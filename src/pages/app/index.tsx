import MinFooter from "@/components/MinFooter";
import Head from "next/head";
import Image from "next/image";

import { FootballCard } from '@/assets/FootballCard.png'; // add this later

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
                <header className="flex flex-col p-8">
                    <h2 className="text-white text-4xl">Stakex</h2>
                </header>
                <div className="flex flex-row">
                    <Card sport="Football" description="Lemme catch ur balls" image={FootballCard} />
                    <Card sport="Soccer" description="Lemme kick ur balls" image={FootballCard} />
                    <Card sport="Basketball" description="Lemme dribble ur balls" image={FootballCard} />
                    <Card sport="Baseball" description="Lemme hit ur balls with a bat" image={FootballCard} />
                </div>
            </main>
            <MinFooter />
        </>
    )
}

export default App;