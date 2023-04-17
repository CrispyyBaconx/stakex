import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

import Logo from '@/assets/logo.svg';

const Stake = () => {
    const apy = 4.7; // example // grab this from contract

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
                    <Image className='w-8' src={Logo} alt='Stakex Logo' />
                    <h2 className='text-2xl'>Stakex</h2>
                </header>
                <section>
                    {apy
                      ? 
                        apy 
                      : 
                        <div role="status" className="max-w-sm animate-pulse">
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                            <span className="sr-only">Loading...</span>
                        </div>
                    }
                    <span>% </span>
                    <span>APY</span>
                </section>
            </main>
        </>
    )
}

export default Stake;