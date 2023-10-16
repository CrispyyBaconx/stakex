import { useMulticallAddress, useCall, type Call } from "@usedapp/core";
import { Contract } from "ethers";
import { multicallABI } from "@/abis";

interface UseCallResult {
    value?: unknown;
    error?: Error;
}

const useMulticall = (calls: Call[]) => {
    const multicallAddress = useMulticallAddress({
        chainId: 1,
        isStatic: true,
        refresh: "everyBlock"
    });

    const wellFormattedCalls = calls.map((call) => [
        call.contract.address, 
        call.method, 
        call.args
    ]);

    // Explicitly declare the expected type
    const result: UseCallResult = useCall(multicallAddress && {
        contract: new Contract(multicallAddress, multicallABI),
        method: "aggregate",
        args: [wellFormattedCalls],
    }) ?? {};

    console.log(result); // !

    // Since result is of type UseCallResult, TypeScript knows what properties to expect
    const { value, error } = result;

    if (error) {
        console.error(error);
        return null;
    }

    return value as number[] | null;
}

export default useMulticall;
