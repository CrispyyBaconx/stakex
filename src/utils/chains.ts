import type { AddEthereumChainParameter } from "@web3-react/types";

const ETH: AddEthereumChainParameter['nativeCurrency'] = {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18
}

interface BaseChain {
    urls: string[],
    name: string,
}

interface ExtendedChain extends BaseChain {
    nativeCurrency: AddEthereumChainParameter['nativeCurrency'],
    blockExplorerUrls: AddEthereumChainParameter['blockExplorerUrls'],
}

const getInfuraUrlForChain = (network: string) => {
    return process.env.INFURA_KEY ? `https://${network}.infura.io/v3/${process.env.infuraKey}` : undefined;
}

const getAlchemyUrlForChain = (network: string) => {
    return process.env.ALCHEMY_KEY ? `https://eth-${network}.alchemyapi.io/v2/${process.env.alchemyKey}` : undefined;
}

export const getAddChainParams = (chainId: number): AddEthereumChainParameter | number => {
    const chainInfo = CHAINS[chainId];
}

export const MAINNET_CHAINS: ChainConfig = {
    
}

/*
Continue with these links:
https://github.com/Uniswap/web3-react/blob/main/example/chains.ts
https://github.com/Uniswap/web3-react/blob/main/packages/core/src/provider.tsx
https://github.com/Uniswap/web3-react
*/