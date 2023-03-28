// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract CommitReveal {
    mapping(address => bytes32) private commitments;
    mapping(address => uint256) private revealed;

    function commit(bytes32 hashedNumber) public {
        require(commitments[msg.sender] == 0, "You have already committed a number.");
        commitments[msg.sender] = hashedNumber;
    }

    function reveal(uint256 number, bytes32 secret) public {
        bytes32 hashedNumber = keccak256(abi.encodePacked(number, secret));
        require(commitments[msg.sender] == hashedNumber, "Invalid number or secret.");

        revealed[msg.sender] = number;
        commitments[msg.sender] = 0;
    }

    function generateRandomNumber() public view returns (uint256) {
        uint256 random = uint256(keccak256(abi.encodePacked(block.timestamp, block.prevrandao, revealed[msg.sender])));
        return random;
    }

    // Hashed number is coming from the frontend
    // ! Look into prevrandao to generate random numbers
    // refs: 
    /*
        https://ethereum.stackexchange.com/questions/137839/using-block-prevrandao-as-randomness-for-miller-rabin-primality-test
        https://ethereum.stackexchange.com/questions/137575/randomness-in-proof-of-stake
        https://eth2book.info/bellatrix/part2/building_blocks/randomness/
        https://soliditydeveloper.com/prevrandao
        https://twitter.com/0x_Beans/status/1570115095212208129
        https://www.youtube.com/watch?v=W3hgX4wVwoo&ab_channel=Soft.Tomatoes
    */
}