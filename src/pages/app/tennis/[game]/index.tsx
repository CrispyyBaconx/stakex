import { GamePage, Sidebar, Topbar } from "@/components/App";
import { Head } from "@/components";
import { useRouter } from "next/router";
import tennisBackground from "@/assets/FootballCard.jpg";

const Game = () => {
    const router = useRouter();
    const { game } = router.query; // this is the game string from the url /app/tennis/[game]
    const category = router.pathname.split('/')[2]; // this is the category string from the url /app/(category)/[game]

    // compute assets based on category and pass them to the game component

    // if query(game) is not a valid game, redirect to the 404 page
    // ! todo
    // im going to sleep but I need to decide whether or not to just load the gamepage and do all the logic there or to do it here and pass it as props

    return (
        <>
            <Head title={`Stakex - ${typeof game}`} />
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

export default Game;