import Image from 'next/image';
import Head from 'next/head';

import { useState } from 'react';
import { MinFooter, LoadingSpinner, ConnectButton } from '@/components';
import { useApy } from '@/hooks';
import { poolABI } from '@/abi';

import Logo from '@/assets/logo.svg';

const Stake = () => {
    const [stake, setStake] = useState(true); // true = staking menu, false = rewards menu  
    // {/* https://polygon.lido.fi/ - maybe model it after this */}

    // this is the zero address right now
    const poolAddress = process.env.NEXT_PUBLIC_STAKING_CONTRACT_ADDRESS;

    const apy = useApy(poolAddress, poolABI); // so this will throw an error

    return (
        <>
            <Head>
                <title>Stakex - Staking</title>
				<meta name="description" content="Stakex" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-slate-900 h-[96vh]"> {/* should probably fix this */}
                <header className='flex p-4'>
                    <div className='flex'>
                        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                        <Image className='w-8' src={Logo} alt='Stakex Logo' />
                        <h2 className='text-2xl'>Stakex</h2>
                        <p className='text-purple-600 flex'>
                            &nbsp;Beta
                        </p>
                    </div>
                    <div className='flex flex-grow justify-end'>
                        <ConnectButton display='compact' />
                    </div>
                </header>
                <div className='flex flex-col items-center'>
                    <div className='flex flex-col items-center'>
                        <h1 className='text-4xl'>Staking</h1>
                        <p className='text-gray-400'>Earn a percent of platform revenue</p>
                    </div>
                    <div className='flex flex-row items-center'>
                        <a className="group transition-all duration-300 ease-in-out">
                            <button className='text-white bg-left-bottom bg-gradient-to-r from-blue-500 to-violet-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out m-4' onClick={() => setStake(true)}>Stake</button>
                        </a>
                        <p>·</p>
                        <a className="group transition-all duration-300 ease-in-out">
                            <button className= 'text-white bg-left-bottom bg-gradient-to-r from-blue-500 to-violet-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out m-4' onClick={() => setStake(false)}>Rewards</button>
                        </a>
                    </div>
                    {stake ? (
                        <div className='flex flex-col items-center'> {/* staking */}
                            <div className='flex flex-row items-center mt-12'>
                                <div className='flex flex-col p-10 mx-8 leading-7 bg-gray-800 border-2 rounded-[20px] border-gray-800'>
                                    <p className='text-gray-400'>APY over Time</p>
                                    {apy ? (
                                        <div className='flex flex-col items-center'>
                                            {apy} <span>% APY</span>
                                        </div>
                                    ) : 
                                        <div role="status" className="max-w-sm animate-pulse">
                                            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-8 mb-4" />
                                            <span className="sr-only"><LoadingSpinner size={16} /></span>
                                        </div>
                                    }
                                </div>
                                <div className='flex flex-col p-10 mx-8 leading-7 bg-gray-800 border-2 rounded-[20px] border-gray-800'>
                                    <p className='text-gray-400'>Rewards Available</p>
                                    <p className='text-white'>0.00</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='flex flex-row items-center mt-12'> {/* rewards */}
                            <div className='flex flex-col mx-8 p-2 bg-gray-800 border-8 rounded-lg border-gray-800'>
                                <p className='text-gray-400'>APY over Time</p>
                                <p className='text-white'>100%</p>
                            </div>
                            <div className='flex flex-col mx-8 p-2 bg-gray-800 border-8 rounded-lg border-gray-800'>
                                <p className='text-gray-400'>Rewards Available</p>
                                <p className='text-white'>0.00</p>
                            </div>
                        </div>
                    )}
                </div>
            </main>
            <MinFooter />
        </>
    )
}

export default Stake;