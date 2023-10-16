import { useState, useEffect } from 'react';
import { useMulticall } from "@/hooks";
import { Contract } from "ethers";
import { poolABI } from '@/abis';

interface BalanceData {
    balanceHeld: number;
    balanceClaimable: number;
    balanceStaked: number;
}

const useFetchPoolData = (poolAddress: string, account: string) => {
    const [balances, setBalances] = useState<BalanceData>({
        balanceHeld: 0,
        balanceClaimable: 0,
        balanceStaked: 0,
    });
    const [error, setError] = useState<Error | null>(null);

    const calls = [
        {
            contract: new Contract(poolAddress, poolABI),
            method: "balanceHeld",
            args: [account]
        },
        {
            contract: new Contract(poolAddress, poolABI),
            method: "balanceClaimable",
            args: [account]
        },
        {
            contract: new Contract(poolAddress, poolABI),
            method: "balanceStaked",
            args: [account]
        }
    ];

    const { value, error: multicallError } = useMulticall(calls);

    useEffect(() => {
        if (multicallError) {
            setError(multicallError);
            return;
        }

        if (value) {
            setBalances({
                balanceHeld: value[0] as unknown as number,
                balanceClaimable: value[1] as unknown as number,
                balanceStaked: value[2] as unknown as number,
            });
        }
    }, [value, multicallError]);

    return { balances, error };
};

export default useFetchPoolData;
