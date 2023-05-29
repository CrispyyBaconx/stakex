import { useEthers, useEtherBalance } from "@usedapp/core";

const ConnectButton = () => {
    const { activateBrowserWallet, account } = useEthers();
    const etherBalance = useEtherBalance(account);

    return account ? (
        <button onClick={() => activateBrowserWallet()}>{etherBalance && parseFloat(etherBalance.toString()).toPrecision(4)} ETH</button>
    ) : (
        <button onClick={() => activateBrowserWallet()}>Connect</button>
    );
};

export default ConnectButton;