import { ListLoadingSkeleton } from "@/components";
import { api } from "@/utils/api";
import { type Game } from '@prisma/client';

const InPlay = () => {
    const { isLoading, data: gamesInPlay } = api.main.getGamesInPlay.useQuery();

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
        <div className='flex bg-[#050a18]'>
            <header className='flex flex-col items-center justify-center w-full'>
                <h1 className='text-6xl font-bold text-white'>In Play</h1>
            </header>
            <main>
                <section className='flex flex-col items-center justify-center w-full'>
                    <h2 className='text-4xl font-bold text-white'>Games In Play</h2>
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
                        <p>No Games Are Currently In Play.</p>
                    )}
                </section>
            </main>
        </div>
    )
}

export default InPlay;