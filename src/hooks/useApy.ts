import { useCall, type Falsy } from "@usedapp/core";
import { Contract, type ContractInterface } from "ethers";

function useApy(
    poolAddress: string | Falsy,
    poolInterface: ContractInterface
) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { value, error } = useCall(
        poolAddress && {
            contract: new Contract(poolAddress, poolInterface),
            method: "getAPY",
            args: [],
        }
    ) ?? { value: undefined, error: undefined };

    if(error) {
        console.error(error);
        return undefined;
    }

    return value as number | undefined;
}

export default useApy;