import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEtherBalance, useEthers } from '@usedapp/core';
import { CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { type apyHistory } from '@prisma/client';
import { useState } from 'react';
import { MinFooter, LoadingSpinner, ConnectButton } from '@/components';
import { Head } from '@/components';
import { useCustomCall } from '@/hooks';
import { poolABI } from '@/abis';
import { api } from '@/utils/api';
import { Pool } from '@/components/Stake';
import Logo from '@/assets/logo.svg';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { FAQLi } from '@/components/Stake';
import { ethers } from 'ethers';

// useful links
// https://goerli.etherscan.io/address/0x6535a4e977885cba7fa99b00ee64d4e7c83fd847#readContract
// https://goerli.etherscan.io/address/0xc1b92cd61e0acaeb4678aa2757fc21ac09555910#code

const Stake = () => {
    const router = useRouter();
    const { account } = useEthers();
    const etherBalance = useEtherBalance(account);
    const { checkBalance } = useFetchPoolData();
    const [stake, setStake] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [queryAddress, setQueryAddress] = useState<string>(""); // ! maybe use a useEffect to query the address asynchonously and set a state variable to the result, using a result turnary to display the result or the default (Nothing to show.)
    const { isLoading, data: apyHistory } = api.main.getAPYHistory.useQuery(
        { limit: 10, offset: 0, pool: "0x0000000000000000000000000000000000000000" },
        { enabled: !stake }
    );

    const poolAddress = process.env.NEXT_PUBLIC_STAKING_CONTRACT_ADDRESS;
    const apy = useCustomCall(poolAddress, poolABI, "getAPY", []);

    const handleQueryAddress = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const inputElement = event.currentTarget.elements[0] as HTMLInputElement; // standard typescript bs
        const inputValue: string = inputElement.value;
        if (ethers.utils.isAddress(inputValue) === false && inputValue !== '') return;
        setQueryAddress(inputValue);

        // query the address
        
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
            <Head title="Stakex - Staking" />
            <main className="flex flex-col min-h-screen bg-slate-950">
                <header className='flex p-8 w-full justify-around'>
                    <div className='flex cursor-pointer' onClick={() => { router.push('/').then().catch(console.error) }}>
                        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                        <Image className='w-6 mr-2' src={Logo} alt='Stakex Logo' />
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
                                <div className='flex flex-row gap-4 p-4 mt-12 rounded-xl w-full bg-slate-700 justify-between'>
                                    <Pool poolAddress={poolAddress ?? ""} account={account ?? ""} etherBalance={etherBalance?.toBigInt() ?? 0n} />
                                    <p className='text-slate-400'>FAQ</p>
                                    <button className='flex' onClick={() => setIsOpen(isOpen => !isOpen)}>
                                        {isOpen ? (
                                            <BsChevronUp size={24} />
                                        ) : (
                                            <BsChevronDown size={24} />
                                        )}
                                    </button>
                                </div>
                                {isOpen && (
                                    <ul className="flex flex-col m-8 gap-4 w-full">
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
                            <div className='flex flex-row p-10 mx-8 leading-7 bg-gray-800 border-2 rounded-[20px] border-gray-700'> {/* rewards */}
                                <div className='flex flex-col'>
                                    <p className='text-gray-300 text-2xl'>APY over Last 7 Days</p>
                                    {isLoading ? ( // chart section
                                        <div className='flex w-[40rem] h-[24rem] m-8 ml-0'>
                                            <div className="flex flex-col p-4 justify-between w-full h-full border border-gray-700 rounded shadow animate-pulse">
                                                <div className="w-full px-40 h-2 mb-2.5 bg-gray-700 rounded-full" />
                                                <div className="flex items-baseline gap-8 justify-center">
                                                    <div className="w-full bg-gray-700 rounded-t-lg h-60" />
                                                    <div className="w-full bg-gray-700 rounded-t-lg h-56" />
                                                    <div className="w-full bg-gray-700 rounded-t-lg h-72" />
                                                    <div className="w-full bg-gray-700 rounded-t-lg h-64" />
                                                    <div className="w-full bg-gray-700 rounded-t-lg h-60" />
                                                    <div className="w-full bg-gray-700 rounded-t-lg h-[17rem]" />
                                                    <div className="w-full bg-gray-700 rounded-t-lg h-60" />
                                                    <div className="w-full bg-gray-700 rounded-t-lg h-64" />
                                                </div>
                                                <div className="h-2.5 bg-gray-700 rounded-full w-full pr-80" />
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className='flex w-[40rem] h-[24rem] m-8 ml-0'>
                                            <ResponsiveContainer width="100%" height={400}>
                                                <AreaChart data={processAPYData(apyHistory)}>
                                                    <defs>
                                                        <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                                                            <stop offset="25%" stopColor="#290680" stopOpacity={0.4} />
                                                            <stop offset="75%" stopColor="#32025e" stopOpacity={0.2} />
                                                            <stop offset="95%" stopColor="#32025e" stopOpacity={0.3} />
                                                        </linearGradient>
                                                    </defs>

                                                    <Area type="monotone" dataKey="apy" stroke="#32025e" fill='url(#color)' />
                                                    <CartesianGrid stroke="#1e1a3b" scale={1.5}/>
                                                    <XAxis dataKey={"date"} stroke='#660fd1' tickLine={false} tickCount={7} tickFormatter={(date: Date) => { return format(date) }} tickMargin={10} />
                                                    <YAxis dataKey={"apy"} stroke='#660fd1' axisLine={true} tickLine={false} tickCount={6} tickMargin={3} />
                                                    {/* @ts-expect-error eslint-disable-next-line */}
                                                    <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'navy', strokeWidth: 2 }} />
                                                </AreaChart>
                                            </ResponsiveContainer>
                                        </div>
                                    )}
                                    <div className='flex flex-col bg-gray-800 p-6 pb-7 items-center rounded-xl'>
                                        <form onSubmit={handleQueryAddress}>
                                            <p className='text-gray-400 text-lg pl-1'>Query Staking Rewards</p>
                                            <label className='flex flex-row gap-4'>
                                                <input className='bg-slate-900 p-2 px-4 rounded-xl text-white w-[25rem]' placeholder='Address:' />
                                                <button type='submit' className="text-lg text-gray-300 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg p-2 px-4 text-center">Check</button>
                                            </label>
                                        </form>
                                    </div>
                                </div>
                                <div className='flex flex-col bg-gray-900 py-6 px-8 ml-4 rounded-xl w-64'>
                                    <div>
                                        <p className='text-xl'>Staking</p>
                                        <p className='flex flex-row gap-2 justify-end'>
                                            {true ? (
                                                <div className='flex flex-row'>
                                                    <span className='text-green-400'>{apy}2.34</span>%
                                                </div>
                                            ) : (
                                                <div className="flex flex-row items-center animate-pulse">
                                                    <div className="h-4 bg-gray-700 rounded-full w-8" />
                                                    <span className="sr-only">
                                                        <LoadingSpinner size={16} />
                                                    </span>
                                                </div>
                                            )}
                                            <span>APY</span>
                                        </p>
                                        <p className='flex flex-row gap-2 justify-end'>
                                            <div className='flex flex-row'>
                                                <span className='text-green-400'>$</span>1,234,567 Market Cap
                                            </div>
                                        </p>
                                    </div>

                                    {/* separator */}
                                    <div className='rounded-xl bg-gray-600 w-auto h-[0.1rem] my-8' />

                                    <div className='flex flex-col gap-3'>
                                        <p className='text-xl'>Rewards</p>
                                        {/* implement totalClaimed() on the contract, and query it with the address in queryAddress, maybe use a state variable to keep track */}
                                        {/* ! implement */}
                                        {false ? (
                                            <div className='flex flex-col'></div>
                                        ) : (
                                            <div className="flex flex-row items-center">
                                                <p className="text-gray-400">Nothing to show.</p>
                                            </div>
                                        )}
                                    </div>
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
                    <p className="text-gray-300">{payload[0]?.value.toFixed(2)}<span className='text-gray-400'>% APY</span></p>
                </div>            
            ) : loading}
        </>
    )
};

const format = (date: Date) => {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear().toString().slice(2, 4)}`
}

export default Stake;