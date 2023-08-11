import Head from 'next/head';
import { GameCategory } from '@/components/App';
import { type GameCategoryProps } from '@/components/App/GameCategory';

const MLB = (props: GameCategoryProps) => {
    return (
        <>
            <Head>
                <title>Stakex - MLB</title>
                <meta name="description" content="Welcome to Stakex." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-col min-h-screen bg-gray-900">
                bal
            </main>
        </>
    )
}

export default MLB;

// Maybe make a "gametype" component that takes in a category prop and renders the appropriate page, catchall the actual games.