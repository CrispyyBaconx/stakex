import Head from 'next/head';
import { useRouter } from 'next/router';

const Error404 = () => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>404 - Page Not Found</title>
                <meta name="description" content="404 - Page Not Found" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex flex-col items-center justify-center h-screen bg-black">
                <button onClick={() => { router.back() }} className="absolute top-12 left-12 m-4 text-4xl text-white transition ease-in-out hover:-translate-x-2 z-10 hover:drop-shadow-sm" title='Go Home'>&lt;</button>
                <div className="flex flex-col items-center p-10 px-16 rounded-3xl z-10">
                    <h1 className="text-6xl font-bold text-white">Error <span className='text-red-500'>404</span></h1>
                    <h2 className="text-2xl font-bold text-white">Page Not Found</h2>
                </div>
                <p className='absolute text-[48rem] z-0 text-[#101010] leading-3 select-none'>404</p>
            </div>
        </>
    )
}

export default Error404;