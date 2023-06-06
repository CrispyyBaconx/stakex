import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "ethers/lib/utils";
import { AiOutlineWarning } from "react-icons/ai";
import { WalletJazzicon, AccountModal } from '@/components';
import { useState } from 'react';

type ConnectButtonProps = {
    display?: 'compact';
};

const ConnectButton = (props: ConnectButtonProps) => {
    const { activateBrowserWallet, account, switchNetwork } = useEthers();
    const etherBalance = useEtherBalance(account);

    const [isModalOpen, setModalOpen] = useState(false);

    const switchToArbitrum = () => {
        const v = async () => {
            await switchNetwork(42161);
        }

        v().then(() => {
            return;
        }).catch((e) => {
            console.log(e);
        });
    };

    const renderWrongNetwork = () => {
        return (
            <>
                <button className="bg-gray-800 border-1 border-transparent hover:border-blue-400 hover:bg-gray-700 rounded-xl m-1 px-3 h-[38px] text-rose-500 flex items-center" onClick={switchToArbitrum}>
                    <AiOutlineWarning className="text-rose-500 mr-2" />
                    Wrong Network
                </button>
            </>
        );
    };

    const renderConnectButton = () => {
        return (
            <button className="bg-gray-800 border-1 border-transparent hover:border-blue-400 hover:bg-gray-700 rounded-xl m-1 px-3 h-[38px]" onClick={activateBrowserWallet}>
                Connect
            </button>
        );

    };

    const renderDefaultDisplay = () => {
        return (
            <div className="flex items-center bg-gray-700 rounded-xl py-0 h-[48px]">
                <div className="px-3">
                    <p className="text-white text-md">
                        {etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)} ETH
                    </p>
                </div>
                <button className="flex items-center bg-gray-800 border border-transparent hover:border-blue-400 hover:bg-gray-700 rounded-xl m-1 px-3 h-[38px]" onClick={() => { setModalOpen(true) }}>
                    <p className="text-white text-md font-medium mr-2">
                        {account &&
                            `${account.slice(0, 6)}...${account.slice(
                                account.length - 4,
                                account.length
                            )
                        }`}
                    </p>
                    <WalletJazzicon />
                </button>
                <AccountModal isOpen={isModalOpen} onClose={() => { setModalOpen(false) }} />
            </div>
        );
    };

    const renderCompactDisplay = () => {
        return (
            <>
                <button className="flex items-center bg-gray-800 border-1 border-transparent hover:border-blue-400 hover:bg-gray-700 rounded-xl m-1 px-3 h-[38px]" onClick={() => { setModalOpen(true) }}>
                    <p className="text-white text-md pr-3">
                        {etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)} ETH
                    </p>
                    <WalletJazzicon />
                </button>
                <AccountModal isOpen={isModalOpen} onClose={() => { setModalOpen(false) }} />
            </>
        );
    };

    const render = () => {
        if (!account) return renderConnectButton();
        if (account && !etherBalance) return renderWrongNetwork();

        switch (props.display) {
            case 'compact':
                return renderCompactDisplay();
            default:
                return renderDefaultDisplay();
        }
    };

    return (
        <>
            {render()}
        </>
    );
};

export default ConnectButton;