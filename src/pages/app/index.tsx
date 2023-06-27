import { MinFooter, Sidebar, Featured } from "@/components/App";
import { ConnectButton } from '@/components';
import { Search } from '@/components/App';
import Head from "next/head";
import Link from 'next/link';

const App = () => {
    return (
        <>
            <Head>
                <title>Stakex</title>
        		<meta name="description" content="Welcome to Stakex." />
        		<meta name="viewport" content="width=device-width, initial-scale=1" />
        		<link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-col min-h-screen bg-gray-900">
                <header className="flex flex-row justify-between w-full">
                    <Link href="/" className="flex px-6 w-48 justify-left items-center bg-gray-950">
                        <h2 className="text-white text-4xl">Stakex</h2>
                        <h5 className="p-1 text-purple-600 font-bold">Beta</h5>
                    </Link>
                    <section className='flex flex-row py-5'>
                        <Search />
                        <div className='flex flex-row items-center justify-center p-4 w-50'>
                            <ConnectButton display='compact' />
                        </div>
                    </section>
                </header>
                <div className="flex flex-row w-full h-full flex-1">
                    <div className="flex items-stretch">
                        <Sidebar />
                    </div>
                    <main className="flex w-full">
                        <Featured />
                    </main>
                </div>
                <div className='flex flex-col w-full'>
                    <MinFooter />
                </div>
            </main>
        </>
    )
}

export default App;