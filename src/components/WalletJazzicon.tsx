import Jazzicon from "react-jazzicon";
import { useEthers } from "@usedapp/core";

const WalletJazzicon = () => {
    const { account } = useEthers();
    
    if (!account) return null;
    
    return (
        <div className="h-4 w-4 rounded-full bg-black">
            <Jazzicon seed={parseInt(account.slice(2, 10), 16)} diameter={16} />
        </div>
    );
}

export default WalletJazzicon;