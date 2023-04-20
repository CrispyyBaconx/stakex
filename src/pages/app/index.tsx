import MinFooter from "@/components/MinFooter";
import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';

import FootballCard from '@/assets/FootballCard.jpg';

import { Sidebar } from '@/components/App';
import Card from "@/components/App/Card";

const App = () => {
    // https://www.quackit.com/css/flexbox/examples/flexbox_website_layout_examples.cfm
    // https://www.quackit.com/html/html_editors/scratchpad/?example=/css/flexbox/examples/flexbox_website_layout_2
    // https://www.quackit.com/html/html_editors/scratchpad/?example=/css/flexbox/examples/flexbox_website_layout_4
    // https://tailwindcss.com/blog/tailwindcss-v3-3
    // https://tailwindcss.com/docs/grid-template-columns

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
                <header className="flex p-8 w-full justify-center">
                    <div>
                        <h2 className="text-white text-4xl">Stakex</h2>
                        <h5 className="p-1">Beta</h5>
                    </div>
                    <div className="p-4">
                        <Link href='/stake'>Water</Link>
                    </div>
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