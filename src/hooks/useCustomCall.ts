import { useCall, type Falsy } from "@usedapp/core";
import { Contract, type ContractInterface } from "ethers";

function useCustomCall(
    address: string | Falsy,
    contractInterface: ContractInterface,
    methodName: string,
    args: never[]
) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { value, error } = useCall(
        address && {
            contract: new Contract(address, contractInterface),
            method: methodName,
            args: args,
        }
    ) ?? { value: undefined, error: undefined };

    if(error) {
        console.error(error);
        return undefined;
    }

    return value as number | undefined;
}

export default useCustomCall;