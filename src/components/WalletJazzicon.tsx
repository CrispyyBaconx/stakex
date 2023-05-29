import Jazzicon from "@metamask/jazzicon";
import { useEffect, useRef } from "react";
import { useEthers } from "@usedapp/core";

const WalletJazzicon = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { account } = useEthers();
  
    useEffect(() => {
        if (account && ref.current) {
            ref.current.innerHTML = "";
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            ref.current.appendChild(Jazzicon(16, parseInt(account.slice(2, 10), 16)));
        }
    }, [account]);
        
    return <div className="h-4 w-4 rounded-full bg-black" ref={ref} />;
}  

export default WalletJazzicon;