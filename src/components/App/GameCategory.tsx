import { api } from "@/utils/api";
import { type StaticImageData } from "next/image";

export interface GameCategoryProps {
    sport: string;
    backgroundImage: StaticImageData;
}

const GameCategory = () => {
    return (
        <div>GameCategory</div>
    )
}

export default GameCategory;