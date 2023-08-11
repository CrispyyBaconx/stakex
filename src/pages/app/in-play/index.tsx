import { ListLoadingSkeleton } from "@/components";
import { api } from "@/utils/api";
import { type Game } from '@prisma/client';
import Head from "next/head";
import { useRouter } from "next/router";

const InPlay = () => {
    const { isLoading, data: gamesInPlay } = api.main.getGamesInPlay.useQuery();
    const router = useRouter();

    const getNameFromSportId = (sportId: number) => {
        switch (sportId) {
            case 1:
                return 'Football';
            case 2:
                return 'Basketball';
            case 3:
                return 'Baseball';
            case 4:
                return 'Hockey';
            case 5:
                return 'Soccer';
            case 6:
                return 'Tennis';
            case 7:
                return 'Golf';
            case 8:
                return 'MMA';
            case 9:
                return 'Boxing';
            default:
                return 'Unknown';
        }
    };

    return (
        <>
            <Head>
                <title>In Play |&gt;</title>
                <meta name="description" content="Stakex" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='flex flex-col h-screen bg-[#050a18]'>
                <header className='flex flex-col items-center justify-center w-full my-8'>
                    <h1 className='text-6xl font-bold text-white'>In Play</h1>
                </header>
                <main className="flex h-full justify-center">
                    <section className='flex flex-col items-center justify-start px-auto w-[52rem] border-2 bg-slate-900 border-gray-500 rounded-2xl mb-8'>
                        <h2 className='text-4xl font-bold text-white mx-auto mt-12 mb-10'>Games In Play</h2>
                        {isLoading ? (
                            <ListLoadingSkeleton />
                        ) : gamesInPlay && gamesInPlay.length > 0 ? (
                            gamesInPlay.map((game: Game) => (
                                <div key={game.id}>
                                    <h3 className='text-2xl font-bold text-white'>{getNameFromSportId(game.sportId)}</h3>
                                    <p className='text-white'>{game.date.toLocaleDateString()}</p>
                                </div>
                            ))
                        ) : (
                            <div className="flex flex-col items-center gap-12">
                                <div className="flex flex-col items-center gap-2">
                                    <p>No Games Are Currently In Play.</p>
                                    <p>Check Back Later!</p>
                                </div>
                                <button className="relative inline-flex items-center justify-center p-0.5 w-40 h-12 overflow-hidden text-sm font-medium text-gray-900 rounded-xl group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onClick={() => { router.push("/app").then().catch(console.error) }}>
                                    <span className="relative flex justify-center items-center w-full h-full transition-all ease-in duration-75 bg-gray-900 rounded-xl group-hover:bg-opacity-0 text-lg">
                                        Go Back
                                    </span>
                                </button>
                            </div>
                        )}
                    </section>
                </main>
            </div>
        </>
    )
}

export default InPlay;