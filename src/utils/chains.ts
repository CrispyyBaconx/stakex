// ! this might be useless
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

type ChainConfig = { [chainId: number]: BaseChain | ExtendedChain }

const getInfuraUrlForChain = (network: string) => {
    return process.env.INFURA_KEY ? `https://${network}.infura.io/v3/${process.env.infuraKey}` : undefined;
}

const getAlchemyUrlForChain = (network: string) => {
    return process.env.ALCHEMY_KEY ? `https://eth-${network}.alchemyapi.io/v2/${process.env.alchemyKey}` : undefined;
}

const isExtendedChain = (chain: BaseChain | ExtendedChain): chain is ExtendedChain => {
    return !!(chain as ExtendedChain).nativeCurrency
}

export const getAddChainParams = (chainId: number): AddEthereumChainParameter | number => {
    const chainInfo = CHAINS[chainId];
    if (isExtendedChain(chainInfo)) {
        return {
            chainId,
            chainName: chainInfo.name,
            nativeCurrency: chainInfo.nativeCurrency,
            rpcUrls: chainInfo.urls,
            blockExplorerUrls: chainInfo.blockExplorerUrls
        }
    }
}

export const MAINNET_CHAINS: ChainConfig = {
    42161: {
        urls: [getInfuraUrlForChain('arbitrum-mainnet'), 'https://arb1.arbitrum.io/rpc'].filter(Boolean),
        name: 'Arbitrum One',
        nativeCurrency: ETH,
        blockExplorerUrls: ['https://arbiscan.io'],
    },
}

export const TESTNET_CHAINS: ChainConfig = {
    421613: {
        urls: [getInfuraUrlForChain('arbitrum-goerli'), 'https://goerli-rollup.arbitrum.io/rpc'].filter(Boolean),
        name: 'Arbitrum Goerli',
        nativeCurrency: ETH,
        blockExplorerUrls: ['https://testnet.arbiscan.io'],
    },
    
}

export const CHAINS: ChainConfig = {
    ...MAINNET_CHAINS,
    ...TESTNET_CHAINS
}



/*
Continue with these links:
https://github.com/Uniswap/web3-react/blob/main/example/chains.ts
https://github.com/Uniswap/web3-react/blob/main/packages/core/src/provider.tsx
https://github.com/Uniswap/web3-react
*/