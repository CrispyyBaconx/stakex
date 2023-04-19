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
            <main className="flex bg-gray-900">
                <Sidebar />
                <header className="flex flex-col p-8">
                    <h2 className="text-white text-4xl">Stakex</h2>
                </header>
                <div className="flex flex-row">
                    <div className="card">
                        
                    </div>
                </div>
            </main>
            <MinFooter />
        </>
    )
}

export default App;