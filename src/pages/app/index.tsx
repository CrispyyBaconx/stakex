import MinFooter from "@/components/MinFooter";
import Head from "next/head";
import Image from "next/image";

import logo from '@/assets/logo.svg';

import { Sidebar } from '@/components/App';

const App = () => {
    return (
        <>
            <Head>
                <title>Stakex</title>
        		<meta name="description" content="Stakex" />
        		<meta name="viewport" content="width=device-width, initial-scale=1" />
        		<link rel="icon" href="/favicon.ico" />
            </Head>
            <Sidebar />
            <main className="pl-16">
                <header className="flex flex-col">
                    <div className="flex">
                        <h2 className="text-black">Stakex</h2>
                    </div>
                </header>
                <div>
                    Mutumbu
                </div>
            </main>
            <MinFooter />
        </>
    )
}

export default App;