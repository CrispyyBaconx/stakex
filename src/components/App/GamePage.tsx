import { useRouter } from 'next/router';

interface GamePageProps {
    backgroundImage: string;
}

const GamePage = (props: GamePageProps) => {
    // this one will have to be more generic than the GameCategory component
    const router = useRouter();
    
    return (
        <div>GamePage</div>
    )
}

export default GamePage;