import { type StaticImageData } from 'next/image';
import { useRouter } from 'next/router';

interface GamePageProps {
    backgroundImage: StaticImageData;
}

const GamePage = (props: GamePageProps) => {
    // this one will have to be more generic than the GameCategory component
    const router = useRouter();
    
    const team1 = "Team 1";
    const team2 = "Team 2";

    return (
        <div className='flex flex-col'>
            <div className="flex flex-row w-full h-full justify-evenly">
                <div className='bg-slate-800 p-2 px-4 rounded-xl'>
                    {/* Logo */}
                    <h3 className='text-3xl'>{team1}</h3>
                </div>
                <h3 className='text-3xl text-red-400 self-center'>vs</h3>
                <div className='bg-slate-800 p-2 px-4 rounded-xl'>
                    {/* Logo */}
                    <h3 className='text-3xl'>{team2}</h3>
                </div>
            </div>

            {/* Somehow get all markets and odds from db */}
            {/* Map through all markets and create a Market component for each */}

            {/* Go to bet365 and just make up a game and stick it in the db manually */}
            {/* Prisma Studio */}
        </div>
    )
}

export default GamePage;