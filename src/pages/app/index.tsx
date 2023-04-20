import MinFooter from "@/components/MinFooter";
import Head from "next/head";
import Image from "next/image";

import FootballCard from '@/assets/FootballCard.jpg';

import { Sidebar } from '@/components/App';
import Card from "@/components/App/Card";

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
                <header className="flex p-8 w-full">
                    <h2 className="text-white text-4xl">Stakex</h2>
                </header>
                <div className="flex flex-row gap-4 p-4 bg-inset h-40 w-full items-center">
                    <Card sport="Football" description="David" image={ FootballCard } />
                    <Card sport="Soccer" description="David" image={ FootballCard } />
                    <Card sport="Basketball" description="David" image={ FootballCard } />
                    <Card sport="Baseball" description="David" image={ FootballCard } />
                </div>
            </main>
            <MinFooter />
        </>
    )
}

export default App;