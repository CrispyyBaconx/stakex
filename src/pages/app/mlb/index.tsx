import { GameCategory } from "@/components/App";
import { Sidebar, Topbar } from "@/components/App";
import tennisBackground from "@/assets/FootballCard.jpg" // ! replace this with a baseball background image
import Head from "next/head";

const Tennis = () => {
    const sport = "MLB";

    return (
        <>
            <Head>
                <title>Stakex - {sport}</title>
                <meta name="description" content="Tennis" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-col min-h-screen bg-gray-900">
                <div className="flex flex-row flex-1">
                    <Sidebar />
                    <div className="flex flex-col w-full">
                        <Topbar />
                        <GameCategory sport={sport} backgroundImage={tennisBackground} />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Tennis;