import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

import logo from '@/assets/logo.svg';

const Stake = () => {
    return (
        <>
            <Head>
                <title>Stakex</title>
				<meta name="description" content="Stakex" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <header className=''>
                    <Image className='' src={logo} alt='' />
                    <h2 className=''>Stakex</h2>
                </header>
                <section>
                    {/* Write later */}
                </section>
            </main>
        </>
    )
}

export default Stake;