import { GameCategory } from "@/components/App";
import { Sidebar, Topbar } from "@/components/App";
import { Head } from "@/components/App";
import tennisBackground from "@/assets/FootballCard.jpg" // ! replace this with a baseball background image

const Tennis = () => {
    const sport = "MLB";

    return (
        <>
            <Head title="Stakex - MLB" />
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