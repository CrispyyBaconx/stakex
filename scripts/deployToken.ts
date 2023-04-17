import hre from 'hardhat'
import "@nomiclabs/hardhat-ethers";

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    console.log("Deploying contract with the account:", deployer.address);

  	const Token = await hre.ethers.getContractFactory("Stakex");
  	const token = await Token.deploy(100000000);

  	console.log("Token deployed to:", token.address);
}

main()
.then(() => process.exit(0))
.catch((error) => {
	console.error(error);
	process.exit(1);
});