import Image from 'next/image';
import Head from 'next/head';

import { MinFooter, LoadingSpinner, ConnectButton } from '@/components';
import { useApy } from '@/hooks';
import { poolABI } from '@/abi';

import Logo from '@/assets/logo.svg';

const Stake = () => {
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
            <main>
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

                    {/* https://polygon.lido.fi/ - maybe model it after this */}
                    <section>
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
                    </section>
            </main>
            <MinFooter />
        </>
    )
}

export default Stake;