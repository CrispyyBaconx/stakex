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

// game -> request game data from server -> have all markets/odds for that game currently available -> organize data by category (moneyline, total, etc) -> render
// also if I am going to catchall the games and query what game it is by url I need to make sure that isn't a security issue
// ref: https://stackoverflow.com/questions/15917400/how-dangerous-is-a-mongo-query-which-is-fed-directly-from-a-url-query-string