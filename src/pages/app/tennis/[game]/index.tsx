import { GamePage, Sidebar, Topbar } from "@/components/App";
import { Head } from "@/components";
import { useRouter } from "next/router";
import tennisBackground from "@/assets/FootballCard.jpg";

import type {
    GetStaticPaths,
    GetStaticProps
} from 'next';

import { api } from "@/utils/api";
import { sha256 } from "ethers/lib/utils";

const Game = () => {
    const router = useRouter();
    const category = router.pathname.split('/')[2]; // this is the category string from the url /app/(category)/[game]

    // compute assets based on category and pass them to the game component
    // maybe use the microservice that handles odds, when it adds a game it will call the revalidate api route?
    // if query(game) is not a valid game, redirect to the 404 page probably do this in getStaticProps
    // ! todo
    // im going to sleep but I need to decide whether or not to just load the gamepage and do all the logic there or to do it here and pass it as props

    return (
        <>
            <Head title={`Stakex - ${typeof Game}`} />
            <main className="flex flex-col min-h-screen bg-gray-900">
                <div className="flex flex-row flex-1">
                    <Sidebar />
                    <div className="flex flex-col w-full">
                        <Topbar />
                        <GamePage backgroundImage={tennisBackground} />
                    </div>
                </div>
            </main>
        </>
    )
}

/**
export const getStaticPaths = (() => {
    const tennisGames = api.main.getGames.useQuery('tennis');
    const tennisPaths = tennisGames.data?.map(game => {
        const url = game.teamA + "-" + game.teamB + "-" + sha256(new TextEncoder().encode(game.date.toISOString())).substring(0, 10); // ! might be bugged who knows

        return {
            params: {
                game: "/" + url,
            }
        }
    }) || [];

    return {
        paths: tennisPaths,
        fallback: false
    }
}) satisfies GetStaticPaths;

export const getStaticProps = (({ params }) => {
    if (!params || typeof params.slug !== 'string') {
        return {
            notFound: true,  // This will return a 404 page in Next.js
        }
    }

    const { slug } = params;

    // fetch the game from the database using the slug
    const game = api.main.getGame.useQuery(1); // ! todo

    return { props: { game } }
}) satisfies GetStaticProps;

export default Game;
 */