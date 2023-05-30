import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "ethers/lib/utils";
import { WalletJazzicon, AccountModal } from '@/components';
import { useState } from 'react';

const ConnectButton = () => {
    const { activateBrowserWallet, account } = useEthers();
    const etherBalance = useEtherBalance(account);

    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    }

    const handleCloseModal = () => {
        setModalOpen(false);
    }

    return (
        <>
            {account ? (
                <div className="flex items-center bg-gray-700 rounded-xl py-0 h-[48px]">
                    <div className="px-3">
                        <p className="text-white text-md">{etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)} ETH</p>
                    </div>
                    <button className="flex items-center bg-gray-800 border border-transparent hover:border-blue-400 hover:bg-gray-700 rounded-xl m-1 px-3 h-[38px]" onClick={handleOpenModal}>
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
                    <AccountModal isOpen={isModalOpen} onClose={handleCloseModal} />
                </div>
            ) : (
                <button className="bg-gray-800 border-1 border-transparent hover:border-blue-400 hover:bg-gray-700 rounded-xl m-1 px-3 h-[38px]" onClick={() => activateBrowserWallet()}>Connect</button>
            )}
        </>
    )
};

export default ConnectButton;
