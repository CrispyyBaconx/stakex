import { useEffect } from 'react'
import { useEthers } from '@usedapp/core';
import { WalletJazzicon } from '@/components';
import Link from 'next/link';

import { BiLinkExternal } from 'react-icons/bi';
import { RiFileCopyLine } from 'react-icons/ri';
import { IoClose } from 'react-icons/io5';

type Props = {
    isOpen: boolean;
    onClose: () => void;
}

export default function AccountModal({ isOpen, onClose }: Props) {
    const { account, deactivate } = useEthers();

    const handleDeactivateAccount = () => {
        deactivate();
        onClose();
    }

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        // Clean up function to remove the class in case component unmounts
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isOpen]);

    if (!isOpen) return null;
    if (!account) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-75 bg-black">
            <div className="bg-gray-900 border border-gray-700 rounded-3xl">
                <div className='flex justify-between items-center px-4 py-3'>
                    <div className="text-white px-4 text-lg font-medium">
                        Account
                    </div>
                    <button className="text-white text-sm hover:text-white hover:opacity-70 px-4" onClick={onClose}>
                        <IoClose size={28}/>
                    </button>
                </div>
                <div className="pt-0 px-4">
                    <div className="rounded-3xl border border-gray-600 px-5 pt-4 pb-2 mb-3">
                        <div className="flex justify-between items-center mb-3">
                            <p className="text-gray-400 text-sm">Connected with MetaMask</p>
                            <button className="border border-blue-800 rounded-3xl text-blue-500 text-xs font-normal px-2 h-6 hover:bg-transparent hover:border-blue-300 hover:underline"
                                    onClick={handleDeactivateAccount}>
                                Change
                            </button>
                        </div>
                        <div className="flex items-center mt-2 mb-4">
                            <WalletJazzicon />
                            <p className="text-white text-xl font-semibold ml-2">{account && `${account.slice(0, 6)}...${account.slice(account.length - 4, account.length)}`}</p>
                        </div>
                        <div className="flex items-center m-3">
                            <button className="text-gray-400 text-sm hover:text-white hover:opacity-80">
                                <RiFileCopyLine className="inline-block mr-1" />
                                Copy Address
                            </button>
                            <Link href={`https://goerli.arbiscan.io/address/${account}`} target="_blank" rel="noreferrer" className="text-sm flex items-center text-gray-400 ml-6 hover:text-white hover:underline">
                                <BiLinkExternal className="inline-block mr-1" />
                                View on Explorer
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
