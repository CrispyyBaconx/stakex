import { useRouter } from 'next/router';

interface GamePageProps {
    backgroundImage: string;
}

const GamePage = (props: GamePageProps) => {
    const router = useRouter();
    
    return (
        <div>GamePage</div>
    )
}

export default GamePage;