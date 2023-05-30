import { useState, useEffect } from 'react';

import { ethers } from 'ethers';

import Image from 'next/image';
import Head from 'next/head';

import { MinFooter, LoadingSpinner } from '@/components';

import Logo from '@/assets/logo.svg';

const Stake = () => {
    const [apy, setApy] = useState<number | null>(null);
    
    useEffect(() => {
        // look into ethers and typechain
    }, []);

    return (
        <>
            <Head>
                <title>Stakex</title>
				<meta name="description" content="Stakex" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <header className='flex'>
                    {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                    <Image className='w-8' src={Logo} alt='Stakex Logo' />
                    <h2 className='text-2xl'>Stakex</h2>
                </header>
                <section>
                    {apy ? apy : 
                        <div role="status" className="max-w-sm animate-pulse">
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                            <span className="sr-only"><LoadingSpinner size={16} /></span>
                        </div>
                    }
                    <span>% </span>
                    <span>APY</span>
                </section>
            </main>
            <MinFooter />
        </>
    )
}

export default Stake;