import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

function useEthersProvider() {
    const [provider, setProvider] = useState<ethers.AlchemyProvider | null>(null);

    useEffect(() => {
        const providerInstance = new ethers.AlchemyProvider("mainnet", process.env.ALCHEMY_API_KEY);
        setProvider(providerInstance);
    }, []);

    return provider;
}

export default useEthersProvider;
