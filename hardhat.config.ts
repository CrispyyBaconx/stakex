import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";

const config: HardhatUserConfig = {
    solidity: "0.8.19",
	networks: {
		goerli: {
			url: "https://eth-goerli.g.alchemy.com/v2/XaDKRGgylouMivW0m4zp3i9Ha-1hi3Co",
			accounts: ["0xc7fe07389c2d706c28859c879751e201d11552e13c3cda86bb7e4e08201f673e"],
		},
	},
	etherscan: {
		apiKey: "8E18ZHXBQ9W3Y84A1R4DWDM1GUYBGRC6Y5",
	},
};

export default config;