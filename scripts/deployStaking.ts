import hre from 'hardhat'
import "@nomiclabs/hardhat-ethers";

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    console.log("Deploying contract with the account:", deployer.address);

  	const Pool = await hre.ethers.getContractFactory("StakingPool");
  	const pool = await Pool.deploy("0xC1B92cd61e0AcAEb4678AA2757Fc21aC09555910"); //! Token contract

  	console.log("Staking Contract deployed to:", pool.address);
}

main()
.then(() => process.exit(0))
.catch((error) => {
	console.error(error);
	process.exit(1);
});