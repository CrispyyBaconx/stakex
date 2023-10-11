import { useState, useEffect } from 'react';
import { useEthersProvider } from "@/hooks/net";

function useBalance(address: string) {
    const provider = useEthersProvider();
    const [balance, setBalance] = useState<bigint>(0n);
  
    useEffect(() => {
        async function fetchBalance() {
            if (provider) {
                const balance = await provider.getBalance(address);
                setBalance(balance);
            }
        }
  
        fetchBalance().then().catch(console.error);
    }, [address, provider]);
  
    return balance;
}


export default useBalance;