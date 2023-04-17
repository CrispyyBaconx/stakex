// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract StakingPool is ReentrancyGuard, Ownable {
    using SafeMath for uint256;

    IERC20 public stakingToken;
    uint256 public totalStaked;
    uint256 public totalStakers;

    struct StakeInfo {
        uint256 amount;
        uint256 rewardDebt;
    }

    mapping(address => bool) private hasStaked;
    mapping(address => StakeInfo) public stakers;
    uint256 public totalRewardDebt;
    uint256 public lastRevenueUpdateTime;
    uint256 public accumulatedRevenuePerToken;
    uint256 public totalRevenue;

    event Staked(address indexed user, uint256 amount);
    event Withdrawn(address indexed user, uint256 amount);
    event RewardClaimed(address indexed user, uint256 amount);
    event RevenueUpdated(uint256 totalRevenue);

    constructor(IERC20 _stakingToken) {
        stakingToken = _stakingToken;
    }

    function stake(uint256 _amount) external nonReentrant {
        require(_amount > 0, "Staking amount must be greater than 0");

        // Check if the staking contract has enough allowance to transfer tokens from the user's wallet
        uint256 allowance = stakingToken.allowance(msg.sender, address(this));
        require(allowance >= _amount, "Token allowance not sufficient, please approve the tokens first");

        // Update the staker's information before staking the new tokens
        _updateStakingInfo(msg.sender);

        // Transfer the tokens from the user to the staking contract
        stakingToken.transferFrom(msg.sender, address(this), _amount);

        // Update the staker's stake amount and the total staked amount
        stakers[msg.sender].amount = stakers[msg.sender].amount.add(_amount);
        totalStaked = totalStaked.add(_amount);

        emit Staked(msg.sender, _amount);
    }

    function withdraw(uint256 _amount) external nonReentrant {
        require(_amount > 0, "Withdrawing amount must be greater than 0");
    
        // Ensure the user has enough staked tokens to withdraw
        require(stakers[msg.sender].amount >= _amount, "Insufficient staked balance");
    
        // Update the staker's information before withdrawing the tokens
        _updateStakingInfo(msg.sender);
    
        // Update the staker's stake amount and the total staked amount
        stakers[msg.sender].amount = stakers[msg.sender].amount.sub(_amount);
        totalStaked = totalStaked.sub(_amount);
    
        // Transfer the tokens from the staking contract to the user
        stakingToken.transfer(msg.sender, _amount);
    
        emit Withdrawn(msg.sender, _amount);
    }

    function claimReward() external nonReentrant {
        // Update the staker's information before claiming rewards
        _updateStakingInfo(msg.sender);

        // Calculate the pending rewards for the user
        uint256 pending = stakers[msg.sender].rewardDebt;

        // Ensure there are pending rewards to claim
        require(pending > 0, "No pending rewards");

        // Update the staker's reward debt to 0
        stakers[msg.sender].rewardDebt = 0;

        // Transfer the rewards to the user
        // If rewards are in the staking token, use the following:
        stakingToken.transfer(msg.sender, pending);

        emit RewardClaimed(msg.sender, pending);
    }

    function _updateStakingInfo(address _user) internal {
        // Calculate the accumulated revenue per token since the last update
        uint256 accumulatedPerToken = 0;
        if (totalStaked != 0) {
            uint256 timeElapsed = block.timestamp.sub(lastRevenueUpdateTime);
            uint256 revenuePerToken = totalRevenue.mul(1e18).div(totalStaked);
            accumulatedPerToken = revenuePerToken.mul(timeElapsed);
        }

        // Update the global accumulated revenue per token
        accumulatedRevenuePerToken = accumulatedRevenuePerToken.add(accumulatedPerToken);

        // Calculate the user's pending rewards based on the accumulated revenue per token
        uint256 pending = stakers[_user].amount.mul(accumulatedRevenuePerToken).div(1e18).sub(stakers[_user].rewardDebt);

        // Update the user's reward debt
        stakers[_user].rewardDebt = stakers[_user].amount.mul(accumulatedRevenuePerToken).div(1e18);

        // Update the last revenue update time
        lastRevenueUpdateTime = block.timestamp;

        // If there are pending rewards, add them to the user's reward debt
        if (pending > 0) {
            stakers[_user].rewardDebt = stakers[_user].rewardDebt.add(pending);
        }
    }

    function updateRevenue(uint256 _newRevenue) external onlyOwner {
        // Calculate the accumulated revenue per token since the last update
        uint256 accumulatedPerToken = 0;
        if (totalStaked != 0) {
            uint256 timeElapsed = block.timestamp.sub(lastRevenueUpdateTime);
            uint256 revenuePerToken = totalRevenue.mul(1e18).div(totalStaked);
            accumulatedPerToken = revenuePerToken.mul(timeElapsed);
        }

        // Update the global accumulated revenue per token
        accumulatedRevenuePerToken = accumulatedRevenuePerToken.add(accumulatedPerToken);

        // Update the total revenue
        totalRevenue = _newRevenue;

        // Update the last revenue update time
        lastRevenueUpdateTime = block.timestamp;

        emit RevenueUpdated(totalRevenue);
    }

    function pendingReward(address _user) public view returns (uint256) {
        StakeInfo storage staker = stakers[_user];
        uint256 _accumulatedRevenuePerToken = accumulatedRevenuePerToken;

        // Calculate the accumulated revenue per token since the last update
        if (totalStaked != 0) {
            uint256 timeElapsed = block.timestamp.sub(lastRevenueUpdateTime);
            uint256 revenuePerToken = totalRevenue.mul(1e18).div(totalStaked);
            _accumulatedRevenuePerToken = _accumulatedRevenuePerToken.add(revenuePerToken.mul(timeElapsed));
        }

        // Calculate the user's pending rewards based on the accumulated revenue per token
        return staker.amount.mul(_accumulatedRevenuePerToken).div(1e18).sub(staker.rewardDebt);
    }

    function apy() public view returns (uint256) {
        if (totalStaked == 0) {
            return 0;
        }

        // Calculate the revenue percentage based on the total staked amount
        uint256 revenuePercentage = totalRevenue.mul(1e18).div(totalStaked);

        // Assuming the APY is the revenue percentage, we can return it directly
        return revenuePercentage;
    }

    function getStakerInfo(address _user) public view returns (uint256 stakedAmount, uint256 rewardDebt) {
        stakedAmount = stakers[_user].amount;
        rewardDebt = stakers[_user].rewardDebt;
    }

    function getStakedBalance(address _user) public view returns (uint256) {
        return stakers[_user].amount;
    }

    function remainingRewards() public view returns (uint256) {
        return stakingToken.balanceOf(address(this)).sub(totalStaked);
    }

    function getUserClaimableRewards(address _user) public view returns (uint256) {
        uint256 accumulatedPerToken = 0;
        if (totalStaked != 0) {
            uint256 timeElapsed = block.timestamp.sub(lastRevenueUpdateTime);
            uint256 revenuePerToken = totalRevenue.mul(1e18).div(totalStaked);
            accumulatedPerToken = revenuePerToken.mul(timeElapsed);
        }

        uint256 accumulatedRevenuePerTokenTemp = accumulatedRevenuePerToken.add(accumulatedPerToken);
        uint256 pending = stakers[_user].amount.mul(accumulatedRevenuePerTokenTemp).div(1e18).sub(stakers[_user].rewardDebt);
        return pending;
    }
}