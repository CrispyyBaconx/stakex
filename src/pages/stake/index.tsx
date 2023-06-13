import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEthers, useSendTransaction } from '@usedapp/core';

import { useState } from 'react';
import { MinFooter, LoadingSpinner, ConnectButton } from '@/components';
import { useApy } from '@/hooks';
import { poolABI } from '@/abi';

import Logo from '@/assets/logo.svg';

const Stake = () => {
    const router = useRouter();
    const { account } = useEthers(); // using this for checking connection state
    const { sendTransaction } = useSendTransaction(); // using this for write to stake, unstake, and claim - useCustomCall for read only stuff
    const [stake, setStake] = useState(true); // true = staking menu, false = rewards menu  
    // {/* https://polygon.lido.fi/ - maybe model it after this */}

    // make header a flex and stuff justified around
    // figure out what to do for stake, unstake, and rewards
    // copy the rewards ig

    // this is the zero address right now
    const poolAddress = process.env.NEXT_PUBLIC_STAKING_CONTRACT_ADDRESS;

    const apy = useApy(poolAddress, poolABI); // so this will throw an error // replace with useCustomCall (remove useApy)

    return (
        <>
            <Head>
                <title>Stakex - Staking</title>
				<meta name="description" content="Stakex" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-col min-h-screen bg-slate-900">
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
                    <div className='flex flex-row items-center'>
                        <a className="group transition-all duration-300 ease-in-out">
                            <button className='text-white bg-left-bottom bg-gradient-to-r from-blue-500 to-violet-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out m-4' onClick={() => setStake(true)}>
                                Stake
                            </button>
                        </a>
                        <p>·</p>
                        <a className="group transition-all duration-300 ease-in-out">
                            <button className='text-white bg-left-bottom bg-gradient-to-r from-blue-500 to-violet-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out m-4' onClick={() => setStake(false)}>
                                Rewards
                            </button>
                        </a>
                    </div>
                    {stake ? (
                        <div className='flex flex-col items-center'> {/* staking */}
                            <div className='flex flex-row items-center mt-12 w-[70em] justify-around'>
                                <div className='flex flex-col p-10 mx-8 leading-7 bg-gray-800 border-2 rounded-[20px] border-gray-800 gap-2'>
                                    <p className='text-gray-400 text-2xl'>Stake</p>
                                    <input className='text-white bg-gray-800 border-2 rounded-[20px] border-gray-800' type='number' placeholder='0.00' /> {/* make this look cooler */}
                                    Maybe add more stuff here?
                                </div>
                                <div className='flex flex-col p-10 mx-8 leading-7 bg-gray-800 border-2 rounded-[20px] border-gray-800 gap-2'>
                                    <p className='text-gray-400 text-2xl'>Unstake</p>
                                    <input className='text-white bg-gray-800 border-2 rounded-[20px] border-gray-800' type='number' placeholder='0.00' /> {/* make this look cooler */}
                                    Also add more stuff here
                                </div>
                                <div className='flex flex-col p-10 mx-8 leading-7 bg-gray-800 border-2 rounded-[20px] border-gray-800 gap-2'>
                                    <p className='text-gray-400 text-2xl'>Claim</p>
                                    <p className='text-white'>0.00</p>
                                    {account ? (
                                        <div>
                                            hi
                                        </div>
                                    ) : (
                                        <div>
                                            hi
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='flex flex-row items-center mt-12 w-[40em] justify-around'>
                            <div className='flex flex-col p-10 mx-8 leading-7 bg-gray-800 border-2 rounded-[20px] border-gray-800'> {/* rewards */}
                                <p className='text-gray-400'>Rewards Available</p>
                                <p className='text-white'>0.00</p>
                            </div>
                            <div className='flex flex-col p-10 mx-8 leading-7 bg-gray-800 border-2 rounded-[20px] border-gray-800'>
                                <p className='text-gray-400'>APY over Time</p>
                                {apy ? (
                                    <div className='flex flex-col items-center'>
                                        {apy} <span>% APY</span>
                                    </div>
                                ) : 
                                    <div role="status" className="max-w-sm animate-pulse">
                                        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-8 mb-4" />
                                        <span className="sr-only">
                                            <LoadingSpinner size={16} /> {/* Change name to skeleton */}
                                        </span>
                                    </div>
                                }
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

export default Stake;