import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEtherBalance, useEthers, useSendTransaction } from '@usedapp/core';
import { CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { type apyHistory } from '@prisma/client';
import { useState } from 'react';
import { MinFooter, LoadingSpinner, ConnectButton } from '@/components';
import { useCustomCall } from '@/hooks';
import { poolABI, tokenABI } from '@/abis';
import { api } from '@/utils/api';

import Logo from '@/assets/logo.svg';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { FAQLi } from '@/components/Stake'; // figure out why this isnt rendering

// useful links
// https://goerli.etherscan.io/address/0x6535a4e977885cba7fa99b00ee64d4e7c83fd847#readContract
// https://goerli.etherscan.io/address/0xc1b92cd61e0acaeb4678aa2757fc21ac09555910#code

const Stake = () => {
    const router = useRouter();
    const { account } = useEthers();
    const etherBalance = useEtherBalance(account);
    const { sendTransaction } = useSendTransaction();
    const [stake, setStake] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const { isLoading, data: apyHistory } = api.main.getAPYHistory.useQuery(
        { limit: 10, offset: 0 },
        { enabled: !stake }
    );

    const [stakeAmount, setStakeAmount] = useState<number | string>("");
    const [unstakeAmount, setUnstakeAmount] = useState<number | string>("");

    // {/* https://polygon.lido.fi/ - maybe model it after this */}

    const poolAddress = process.env.NEXT_PUBLIC_STAKING_CONTRACT_ADDRESS;
    const tokenAddress = process.env.NEXT_PUBLIC_TOKEN_CONTRACT_ADDRESS;

    const apy = useCustomCall(poolAddress, poolABI, "getAPY", []);
    const balanceHeld = useCustomCall(tokenAddress, tokenABI, "balanceOf", [account ?? "0x0"]); // using 0x0 here to error out if account is null, will be undefined
    const balanceStaked = useCustomCall(poolAddress, poolABI, "getStakedBalance", [account ?? "0x0"]);
    const balanceClaimable = useCustomCall(poolAddress, poolABI, "getUserClaimableRewards", [account ?? "0x0"]);

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

    const processAPYData = (data: Array<apyHistory> | undefined) => {
        // test data
        const testData = [
            { date: new Date("1/1/2021"), apy: 4.1 },
            { date: new Date("1/2/2021"), apy: 4.2 },
            { date: new Date("1/3/2021"), apy: 4.3 },
            { date: new Date("1/4/2021"), apy: 4.4 },
            { date: new Date("1/5/2021"), apy: 4.5 },
            { date: new Date("1/6/2021"), apy: 4.6 },
            { date: new Date("1/7/2021"), apy: 4.7 },
        ]

        if(!data) return testData;
        if(data.length < 7) return testData;

        const processedData = data.map((entry) => {
            return {
                date: new Date(entry.date),
                apy: entry.apy
            };
        });

        return processedData;
    };

    return (
        <>
            <Head>
                <title>Stakex - Staking</title>
				<meta name="description" content="Stakex" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-col min-h-screen bg-slate-950">
                <header className='flex p-8 w-full justify-around'>
                    <div className='flex cursor-pointer' onClick={() => { router.push('/').then().catch(console.error) }}>
                        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                        <Image className='w-10 mr-2' src={Logo} alt='Stakex Logo' />
                        <h2 className='text-2xl flex flex-col justify-center'>Stakex</h2>
                        <p className='text-purple-600 flex pt-2'>
                            &nbsp;Beta
                        </p>
                    </div>
                    <div className='flex'>
                        <ConnectButton display='compact' />
                    </div>
                </header>
                <div className='flex flex-col flex-grow items-center'>
                    <div className='flex flex-col items-center'>
                        <h1 className='text-4xl'>Staking</h1>
                        <p className='text-gray-400'>Earn a percent of platform revenue</p>
                    </div>
                    <div className='flex flex-row items-center bg-gray-900 border-slate-800 border-2 rounded-3xl mt-4'>
                        <a className="flex flex-1 group transition-all duration-300 ease-in-out m-1">
                            <button className='text-white bg-left-bottom bg-gradient-to-r from-blue-500 to-violet-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out m-4' onClick={() => setStake(true)}>
                                Stake
                            </button>
                        </a>
                        <p className='m-1'>·</p>
                        <a className="flex flex-1 group transition-all duration-300 ease-in-out m-1 justify-end">
                            <button className='text-white bg-left-bottom bg-gradient-to-r from-blue-500 to-violet-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out m-4' onClick={() => setStake(false)}>
                                Rewards
                            </button>
                        </a>
                    </div>
                    {stake ? (
                        <div className='flex flex-col items-center'>
                            <div className='flex flex-col items-center mt-12 w-[70em] justify-around'>
                                <div className='flex flex-row p-10 mx-8 leading-7 bg-gray-900 border-2 rounded-[20px] border-gray-800 gap-2 relative'>
                                    {account && etherBalance ? null : (
                                        <div className='z-50'>
                                            <div className="absolute h-full w-full rounded-xl inset-0 backdrop-blur-lg" />
                                            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                                                <h1 className="text-2xl font-bold text-slate-400"><span className='text-slate-500'>&lt;</span> Please Connect Your Wallet <span className='text-slate-500'>&gt;</span></h1>
                                            </div>
                                        </div>
                                    )}
                                    <div className='flex flex-col gap-4 mr-8 w-48'> {/* staking */}
                                        <p className='text-gray-400 text-2xl self-center'>Stake</p>
                                        <label className='relative inline-flex border border-solid border-slate-500 rounded-2xl items-stretch box-border px-3 cursor-text transition-colors duration-100 ease-in-out w-full self-center'>
                                            <span className='flex items-center flex-shrink-0 cursor-inherit pr-4'>
                                                {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                                                <Image src={Logo} alt='Stakex Logo' width={24} height={24} />
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
                                <div className='flex flex-row gap-4 p-4 mt-12 rounded-xl w-full bg-slate-700 justify-between'>
                                    <p className='text-slate-400'>FAQ</p>
                                    {/* going to be a drop down into an accordian is what im thinkin */}
                                    <button className='flex' onClick={() => setIsOpen(isOpen => !isOpen)}>
                                        {isOpen ? (
                                            <BsChevronUp size={24} />
                                        ) : (
                                            <BsChevronDown size={24} />
                                        )}
                                    </button>
                                </div>
                                {isOpen && (
                                    <ul className="flex flex-col m-8 gap-4">
                                        <FAQLi
                                            question="What is the purpose of this project?"
                                            answer="To woble."
                                        />
                                        <FAQLi
                                            question="Why is the purpose of this project?"
                                            answer="To woble."
                                        />
                                        <FAQLi
                                            question="Who is the purpose of this project?"
                                            answer="To woble."
                                        />
                                        <FAQLi
                                            question="When is the purpose of this project?"
                                            answer="To woble."
                                        />
                                    </ul>
                                )}
                            </div>
                        </div>
                    ) : (
                        /* need to find a good graphing lib and maybe write a microservice to get the apy at a specific time everyday and stick it in the db */
                        <div className='flex flex-row items-center mt-12 w-[40em] justify-around'>
                            <div className='flex flex-row p-10 mx-8 leading-7 bg-gray-800 border-2 rounded-[20px] border-gray-800'> {/* rewards */}
                                <div className='flex flex-col'>
                                    <p className='text-gray-400'>APY over Last 7 Days</p>
                                    {isLoading ? ( // chart section
                                        <div className='flex w-[40rem] h-[24rem]'>
                                            <div role="status" className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
                                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
                                                <div className="w-48 h-2 mb-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                                <div className="flex items-baseline mt-4 space-x-6">
                                                    <div className="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
                                                    <div className="w-full h-56 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                                                    <div className="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
                                                    <div className="w-full h-64 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                                                    <div className="w-full bg-gray-200 rounded-t-lg h-80 dark:bg-gray-700"></div>
                                                    <div className="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
                                                    <div className="w-full bg-gray-200 rounded-t-lg h-80 dark:bg-gray-700"></div>
                                                </div>
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className='flex w-[40rem] h-[24rem]'>
                                            <ResponsiveContainer width="100%" height={400}>
                                                <AreaChart data={processAPYData(apyHistory)}>
                                                    <defs>
                                                        <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                                                            <stop offset="0%" stopColor="#8884d8" stopOpacity={0.4} />
                                                            <stop offset="75%" stopColor="#8884d8" stopOpacity={0.05} />
                                                        </linearGradient>
                                                    </defs>

                                                    <Area type="monotone" dataKey="apy" stroke="#8884d8" fill='url(#color)' />
                                                    <CartesianGrid stroke="#1e1b4b" scale={1.5}/>
                                                    <XAxis dataKey={"date"} stroke='#9333ea' tickLine={false} tickCount={7} tickFormatter={(date: Date) => { return format(date) }} />
                                                    <YAxis dataKey={"apy"} stroke='#9333ea' axisLine={true} tickLine={false} tickCount={6} />
                                                    {/* @ts-expect-error eslint-disable-next-line */}
                                                    <Tooltip content={<CustomTooltip />} />
                                                </AreaChart>
                                            </ResponsiveContainer>
                                        </div>
                                    )}
                                    <div className='flex flex-col'>
                                        <p className='text-gray-400'>Query Rewards</p>
                                    <div className='flex-row'>
                                            <input className='bg-slate-900 p-2 rounded-xl text-white' placeholder='Address:' />
                                            <button className='text-lg text-white'>Check</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <p>Staking Info</p>
                                    <p>
                                        {apy ? (
                                            <div className='flex flex-col items-center'>
                                                {apy} <span>% APY</span>
                                            </div>
                                        ) : (
                                            <div role="status" className="max-w-sm animate-pulse">
                                                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-8 mb-4" />
                                                <span className="sr-only">
                                                    <LoadingSpinner size={16} />
                                                </span>
                                            </div>
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className='flex flex-col mt-auto w-full'>
                    <MinFooter />
                </div>
            </main>
        </>
    )
}

type Payload = {
    value: number,
    [x: string | number | symbol]: unknown; // this apparently adds everything else to the type (we only expect value)
}

type CustomTooltipProps = {
    active: boolean;
    payload: Array<Payload>;
    label: Date;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
    const loading = (
        <div className='bg-gray-800 p-4 rounded-xl'>
            <h4 className='text-gray-400'>Loading...</h4>
        </div>
    );

    if (!label || (payload.length === 0)) return loading;

    return (
        <>
            {active ? (
                <div className="bg-gray-800 p-4 rounded-xl">
                    <h4 className="text-gray-400">{format(label)}</h4>
                    <p className="text-gray-400">{payload[0]?.value.toFixed(2)}% APY</p>
                </div>            
            ) : loading}
        </>
    )
};

const format = (date: Date) => {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear().toString().slice(2, 4)}`
}

export default Stake;