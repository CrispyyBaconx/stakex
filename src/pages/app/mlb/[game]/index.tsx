import { api } from '@/utils/api';

type GameProps = {
    game: string
}

const Game = () => {
    //const { data: game } = api.main (get game data from server)

    return (
        <div>Game Page</div>
    )
}

export default Game;

// this is a catchall for the mlb games, it will render the appropriate game page based on the url