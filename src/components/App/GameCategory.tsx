import { api } from "@/utils/api";
import { type StaticImageData } from "next/image";

export interface GameCategoryProps {
    sport: string;
    backgroundImage: StaticImageData;
}

const GameCategory = () => {
    // get games for the sport
    // make basic template for the sport
    // title at the top, list of games below, background image faded in the background

    return (
        <div>GameCategory</div>
    )
}

export default GameCategory;