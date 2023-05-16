import MinFooter from "@/components/MinFooter";
import Head from "next/head";

import FootballCard from '@/assets/FootballCard.jpg';
import SoccerCard from '@/assets/SoccerCard.jpg';
import BasketballCard from '@/assets/BasketballCard.jpg';
import BaseballCard from '@/assets/BaseballCard.jpg';
import BoxingCard from '@/assets/BoxingCard.jpg';

import Card from "@/components/App/Card";

const App = () => {
    // https://www.quackit.com/css/flexbox/examples/flexbox_website_layout_examples.cfm
    // https://www.quackit.com/html/html_editors/scratchpad/?example=/css/flexbox/examples/flexbox_website_layout_2
    // https://www.quackit.com/html/html_editors/scratchpad/?example=/css/flexbox/examples/flexbox_website_layout_4
    // https://tailwindcss.com/blog/tailwindcss-v3-3
    // https://tailwindcss.com/docs/grid-template-columns
    // https://www.iconpacks.net/free-icon/coin-794.html

    return (
        <>
            <Head>
                <title>Stakex</title>
        		<meta name="description" content="Stakex" />
        		<meta name="viewport" content="width=device-width, initial-scale=1" />
        		<link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex bg-gray-900">
                <section className="flex flex-col items-stretch w-full">
                    <header className="flex p-8 w-full justify-left">
                        <h2 className="text-white text-4xl">Stakex</h2>
                        <h5 className="p-1 text-purple-600 font-bold">Beta</h5>
                    </header>
                    <section className="w-auto">
                        <div className="flex flex-row gap-6 p-4 bg-inset h-40 w-full justify-center">
                            <Card sport="Football" image={ FootballCard } />
                            <Card sport="Soccer" image={ SoccerCard } />
                            <Card sport="Basketball" image={ BasketballCard } />
                            <Card sport="Baseball" image={ BaseballCard } />
                            <Card sport="Boxing" image={ BoxingCard } />
                        </div>
                    </section>
                    <section>
                        Get Real
                    </section>
                </section>
            </main>
            <MinFooter />
        </>
    )
}

export default App;