import { useMulticallAddress, useCall } from "@usedapp/core"
import { Contract } from "ethers";
import { type Call } from "@usedapp/core";

import { multicallABI } from "@/abis"

const useMulticall = (calls: Call[]) => {
    const multicallAddress = useMulticallAddress({
        chainId: 1,
        isStatic: true,
        refresh: "everyBlock"
    })

    const { value, error } = useCall(multicallAddress && {
        contract: new Contract(multicallAddress, multicallABI),
        method: "aggregate",
        args: [calls.map((call) => [call.contract.address, call.method, call.args])],
    }) as { value: { data: object[] }, error: Error };

    if (error) {
        console.error(error);
        return { value: null, error };
    }
    
      if (!value) {
        return { value: null, error: null };
    }
    
    const { data } = value;
    return { value: data, error: null };
    
}

export default useMulticall