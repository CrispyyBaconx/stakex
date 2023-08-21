import { GamePage } from "@/components/App";
import { useRouter } from "next/router";

const Game = () => {
    const router = useRouter();
    const { game } = router.query; // this is the game string from the url /app/tennis/[game]
    const category = router.pathname.split('/')[2]; // this is the category string from the url /app/(category)/[game]

    // compute assets based on category and pass them to the game component

    // if query(game) is not a valid game, redirect to the 404 page
    // ! todo
    // im going to sleep but I need to decide whether or not to just load the gamepage and do all the logic there or to do it here and pass it as props

    return (
        <div>
            test
        </div>
    )
}

export default Game;