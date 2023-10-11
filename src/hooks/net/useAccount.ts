import { useState, useEffect, useCallback } from 'react';
import { useEthersProvider } from "@/hooks/net";
import { type JsonRpcSigner } from 'ethers';

function useAccount() {
    const provider = useEthersProvider();
    const [account, setAccount] = useState<JsonRpcSigner | null>(null);
  
    useEffect(() => {
        let isMounted = true;
    
        (async () => {
            if (provider && isMounted) {
                const account = await provider.getSigner();
                setAccount(account);
            }
        })().catch(console.error);
    
        return () => {
            isMounted = false;
        };
    }, [provider]);

    const connect = useCallback(async () => {
        if (provider) {
            try {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                const accounts: string[] = await provider.send("eth_requestAccounts", []);
                const account = await provider.getSigner(accounts[0]);
                setAccount(account);
            } catch (error) {
                console.error("Failed to connect to wallet");
            }
        } else {
            console.error("No provider available");
        }
    }, [provider]);

    const disconnect = useCallback(() => {
        setAccount(null);
    }, []);

    const switchNetwork = useCallback(async () => {
        if (provider) {
            try {
                // switch to mainnet if current network is not mainnet
                if ((await provider.getNetwork()).chainId !== 1n) {
                    await provider.send("wallet_switchEthereumChain", [{ chainId: "0x1" }]);
                }
            } catch (error) {
                console.error("Failed to switch network");
            }
        } else {
            console.error("No provider available");
        }
    }, [provider]);
  
    return {
        account,
        connect,
        disconnect,
        switchNetwork
    };
}

export default useAccount;