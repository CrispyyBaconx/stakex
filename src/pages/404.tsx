import React from 'react';
import Head from 'next/head';

const Error404 = () => {
    return (
        <>
            <Head>
                <title>404 - Page Not Found</title>
                <meta name="description" content="404 - Page Not Found" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-6xl font-bold">404</h1>
                <h2 className="text-2xl font-bold">Page Not Found</h2>
            </div>
        </>
    )
}

export default Error404;