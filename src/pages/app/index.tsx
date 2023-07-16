import { Sidebar } from "@/components/App";
import { ConnectButton, MinFooter } from '@/components';
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
                <div className="flex flex-row flex-1">
                    <div className="flex flex-col">
                        <Link href="/" className="flex p-6 pt-8 w-48 justify-left items-center justify-end bg-gray-950">
                            <h2 className="text-white text-4xl">Stakex</h2>
                            <h5 className="p-1 text-purple-600 font-bold">Beta</h5>
                        </Link>
                        <Sidebar />
                    </div>
                    <div className="flex flex-col w-full">
                        <section className='flex flex-row py-5 pr-6 justify-between'>
                            <div className="pl-8">
                                <Search />
                            </div>
                            <div className='flex flex-row items-center justify-center p-4 w-50'>
                                <ConnectButton display='compact' />
                            </div>
                        </section>
                        <main className="flex w-full">
                            <div className="flex flex-col w-full items-center bg-slate-950 mx-56 mt-10 rounded-xl border-2 border-gray-800">
                                <div className="flex p-4">
                                    <div className="flex flex-row">
                                        <h3 className="text-3xl">Boosts</h3>
                                        <h3 className="text-3xl font-serif font-extrabold text-purple-600">&nbsp;&gt;</h3> {/* ! prob replace this with a graphic */}
                                        <h3 className="text-3xl font-serif font-extrabold text-purple-600 translate-x-[-18px]">&nbsp;&gt;</h3>
                                    </div>
                                    <div className="flex flex-row">
                                        {/* use backend to get games with an odds boost today? */}
                                    </div>
                                </div>
                                
                                {/* Separator */}
                                <div className="flex flex-row w-[85%] border-b-2 border-gray-800" />

                                <div className="flex p-4">
                                    <div className="flex flex-row">
                                        <h3 className="text-3xl">Top Upcoming Events</h3>
                                        <h3 className="text-3xl font-serif font-extrabold text-purple-600">&nbsp;&gt;</h3> {/* ! prob replace this with a graphic */}
                                        <h3 className="text-3xl font-serif font-extrabold text-purple-600 translate-x-[-18px]">&nbsp;&gt;</h3>
                                    </div>
                                    <div className="flex flex-row">
                                        {/* use backend to get popular games today for each category? */}
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div className='flex flex-col w-full'>
                    <MinFooter />
                </div>
            </main>
        </>
    )
}

export default App;