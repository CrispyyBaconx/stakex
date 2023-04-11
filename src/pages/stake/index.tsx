import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

import Logo from '@/assets/logo.svg';
import Breadcrumb from '@/components/Breadcrumb';

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
                    <Image className='w-4' src={Logo} alt='' />
                    <h2 className=''>Stakex</h2>
                </header>
                <section>
                    <Breadcrumb />
                </section>
            </main>
        </>
    )
}

export default Stake;