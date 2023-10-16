import { useFetchPoolData } from "@/hooks";
import { useSendTransaction } from "@usedapp/core";
import Logo from "@/assets/logo.svg";
import Image from "next/image";
import { useState } from "react";

interface PoolProps {
    poolAddress: string;
    account: string;
    etherBalance: number | bigint;
}

const Pool = ({ poolAddress, account, etherBalance }: PoolProps) => {
    const [stakeAmount, setStakeAmount] = useState<number | string>("");
    const [unstakeAmount, setUnstakeAmount] = useState<number | string>("");
    const { sendTransaction } = useSendTransaction();

    const { balances } = useFetchPoolData(poolAddress, account);
    const { balanceClaimable, balanceHeld, balanceStaked } = balances;

    const handleUnstakeAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.value.includes(".") ||
           event.target.value.includes(" ") ||
           Number.isNaN(+event.target.value)) return;

        setUnstakeAmount(event.target.value);
    };

    const handleStakeAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.value.includes(".") || 
           event.target.value.includes(" ") ||
           Number.isNaN(+event.target.value)) return;

        setStakeAmount(event.target.value);
    };

    return (
        <div className='flex flex-row p-10 mx-8 leading-7 bg-gray-900 border-2 rounded-[20px] border-gray-800 gap-2 relative'>
            {account && etherBalance ? null : (
                <div className='z-50'>
                    <div className="absolute h-full w-full inset-0 backdrop-blur-lg rounded-[20px]" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                        <h1 className="text-2xl font-bold text-slate-400"><span className='text-slate-500'>&lt;</span> Please Connect Your Wallet <span className='text-slate-500'>&gt;</span></h1>
                    </div>
                </div>
            )}
            <div className='flex flex-col gap-4 mr-8 w-48'> {/* staking */}
                <p className='text-gray-400 text-2xl self-center'>Stake</p>
                <label className='relative inline-flex border border-solid border-slate-500 rounded-[20px] items-stretch box-border px-3 cursor-text transition-colors duration-100 ease-in-out w-full self-center'>
                    <span className='flex items-center flex-shrink-0 cursor-inherit pr-4'>
                        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                        <Image src={Logo} alt='Stakex Logo' width={20} height={20} />
                    </span>
                    <span className='font-normal text-base flex flex-grow relative py-4'>
                        <input className='bg-transparent shadow-none border-transparent outline-none w-full font-normal text-base leading-normal p-0 rounded-none relative top-2' disabled={false} placeholder='0.00' min={0} value={stakeAmount} onChange={handleStakeAmountChange} />
                        <span className='absolute left-0 top-1/2 text-base leading-tight whitespace-nowrap overflow-hidden text-ellipsis max-w-full transform origin-top translate-y-[-4px] translate-x-[-6px] scale-75 opacity-100 -mt-4 duration-100 ease-in-out'>Amount</span>
                    </span>
                    <span className='flex items-center flex-shrink-0 cursor-inherit pl-4'>
                        <div className='flex items-center'>
                            <button className='border-2 border-blue-800 outline-none bg-transparent px-1 text-blue-300 opacity-70 rounded-lg' onClick={() => { setStakeAmount(balanceHeld ?? 0) }}>
                                <p className='font-bold text-xs p-1'>MAX</p>
                            </button>
                        </div>
                    </span>
                </label>
                <button className="relative inline-flex items-center justify-center p-0.5 w-full h-16 overflow-hidden text-sm font-medium text-gray-900 rounded-xl group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onClick={() => { sendTransaction({ to: poolAddress, data: '0x' }).then().catch(console.error) }}>
                    <span className="relative flex justify-center items-center w-full h-full transition-all ease-in duration-75 bg-gray-900 rounded-xl group-hover:bg-opacity-0 text-lg">
                        Stake
                    </span>
                </button>
            </div>
            {/* separator */}
            <div className='border-r-2 border-gray-600 h-auto' />
            <div className='flex flex-col gap-4 mx-8 w-48'> {/* unstaking */}
                <p className='text-gray-400 text-2xl self-center'>Unstake</p>
                <label className='relative inline-flex border border-solid border-slate-500 rounded-2xl items-stretch box-border px-3 cursor-text transition-colors duration-100 ease-in-out w-full self-center'>
                    <span className='font-normal text-base flex flex-grow relative py-4'>
                        <input className='bg-transparent shadow-none border-transparent outline-none w-full font-normal text-base leading-normal p-0 rounded-none relative top-2' disabled={false} placeholder='0.00' min={0} value={unstakeAmount} onChange={handleUnstakeAmountChange} />
                        <span className='absolute left-0 top-1/2 text-base leading-tight whitespace-nowrap overflow-hidden text-ellipsis max-w-full transform origin-top translate-y-[-4px] translate-x-[-6px] scale-75 opacity-100 -mt-4 duration-100 ease-in-out'>Amount</span>
                    </span>
                    <span className='flex items-center flex-shrink-0 cursor-inherit pl-4'>
                        <div className='flex items-center'>
                            <button className='border-2 border-blue-800 outline-none bg-transparent px-1 text-blue-300 opacity-70 rounded-lg' onClick={() => { setUnstakeAmount(balanceStaked ?? 0) }}>
                                <p className='font-bold text-xs p-1'>MAX</p>
                            </button>
                        </div>
                    </span>
                </label>
                <button className="relative inline-flex items-center justify-center p-0.5 w-full h-16 overflow-hidden text-sm font-medium text-gray-900 rounded-xl group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onClick={() => { sendTransaction({ to: poolAddress, data: '0x' }).then().catch(console.error) }}>
                    <span className="relative flex justify-center items-center w-full h-full transition-all ease-in duration-75 bg-gray-900 rounded-xl group-hover:bg-opacity-0 text-lg">
                        Unstake
                    </span>
                </button>
            </div>
            {/* separator */}
            <div className='border-r-2 border-gray-600 h-auto' />
            <div className='flex flex-col gap-4 ml-8 w-48 justify-between'> {/* claim */}
                <p className='text-gray-400 text-2xl self-center'>Claim</p>
                <p className='text-white text-sm self-center'>Total Claimable: {balanceClaimable ?? 0.0}</p>
                <div className='flex'>
                    <button className="relative inline-flex items-center justify-center p-0.5 w-full h-16 overflow-hidden text-sm font-medium text-gray-900 rounded-xl group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onClick={() => { sendTransaction({ to: poolAddress, data: '0x' }).then().catch(console.error) }}>
                        <span className="relative flex justify-center items-center w-full h-full transition-all ease-in duration-75 bg-gray-900 rounded-xl group-hover:bg-opacity-0 text-lg">
                            Claim
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Pool;