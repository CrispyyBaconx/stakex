import { api } from "@/utils/api";
import { MinFooter } from "@/components";
import { type StaticImageData } from "next/image";
import LoadingSpinner from "../LoadingSpinner";
import { useRouter } from "next/router";

export interface GameCategoryProps {
    sport: string;
    backgroundImage: StaticImageData;
}

const GameCategory = (props: GameCategoryProps) => {
    const router = useRouter();
    const isLoading = false; // placeholder for the api call
    // get games for the sport
    // make basic template for the sport
    // title at the top, list of games below, background image faded in the background

    const getWeekday = (): string => {
        // @ts-expect-error - TS expects this to be possibly undefined even though it will never be
        return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][new Date().getDay()];
    }

    // looks complex but it's just a ternary chain giving ordinal suffixes for the date
    const nth = (n: number) => n > 3 && n < 21 ? "th" : n % 10 == 1 ? "st" : n % 10==2 ? "nd" : n % 10 == 3 ? "rd" : "th";

    // routing to the game page
    const getRoute = async (teams: string[], date: Date) => {
        if (teams.length !== 2) throw new Error("Invalid number of teams"); // should never happen but just in case
        if (teams[0] === teams[1]) throw new Error("Teams cannot be the same");

        teams = teams.map(team => team.toLowerCase().replace(" ", "-")); // lowercase and replace spaces with dashes

        // ! maybe instead of all this bs I could just use a selector from the db

        // constructs the route to push to
        // since routes can clash purely using the team names, we will use the team names and the date to make a unique route
        // so it will be /sport/team1-team2-sha256(date).substring(0, 10) (10 is arbitrary) This should be unique enough
        // we will also need to somehow also correctly query the db so it resolves to the correct game
        // PS: maybe store the date hash substringed of the game in the db? //!todo
        // maybe make a special api route for this? //!todo

        // prisma has a special type for dates so we will use that but for now we will just use the standard js date
        const hashedDate = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(date.toISOString()))
        const result = [...new Uint8Array(hashedDate)].map(b => b.toString(16).padStart(2, '0')).join('');
        
        return router.push(`${router.asPath}/${encodeURIComponent(teams.join("-vs-"))}-${encodeURIComponent(result.substring(0, 10))}`);
    };

    return (
        <main className="flex flex-col w-full h-full bg-gray-900">
            {/** 
                Get Date
                API call to get games -> list in asc/desc order 
                Should get odds with first call? Maybe make a separate route to get everything at once //!todo
                Maybe postfx a lattice over the image and just make that the bg
                px-auto, fixed width
            */}
            <div className="flex flex-col w-full h-full">
                {isLoading ? (
                    <div className="flex justify-center m-auto w-full h-full">
                        <LoadingSpinner size={26} />
                    </div>
                ) : (
                    <div className="flex flex-col w-4/5 mx-auto">
                        <div>
                            <div className="flex flex-row">
                                <h3 className="text-3xl">{props.sport}</h3>
                            </div>
                            <div className="flex flex-row text-md text-left text-gray-500 p-4 rounded-xl">
                                {`${getWeekday()}, ${new Date().getDate()}${nth(new Date().getDate())}`}
                            </div>
                        </div>
                    
                        <table className="w-full text-md uppercase">
                            <thead className="w-full text-gray-700">
                                <tr className="grid grid-cols-5 px-2 bg-slate-700 text-black">
                                    <th scope="col" className="flex items-center justify-center col-span-2 pr-32"> {/** this might need to be individualized by sport */}
                                        Teams
                                    </th>
                                    <th scope="col" className="flex items-center justify-center">
                                        Money Line
                                    </th>
                                    <th scope="col" className="flex items-center justify-center">
                                        Total
                                    </th>
                                    <th scope="col" className="flex items-center justify-center">
                                        Run Line
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Mapping through game data and creating rows */}
                                <tr className="grid grid-cols-5 border-b border-gray-700 w-full">
                                    <td className="flex items-center justify-center col-span-2 p-4 font-medium text-slate-600 whitespace-nowrap pr-32 cursor-pointer" scope="col" onClick={ () => { getRoute(["Steve", "David"], new Date()).then().catch(console.error) }}>
                                        {/* Team logo/crest & names */}
                                        Steve vs. David
                                    </td>
                                    <td className="flex items-center justify-center px-2 py-4 hover:bg-gray-800" scope="col">
                                        1.09
                                    </td>
                                    <td className="flex items-center justify-center px-2 py-4 hover:bg-gray-800" scope="col">
                                        1.19
                                    </td>
                                    <td className="flex items-center justify-center px-2 py-4 hover:bg-gray-800" scope="col">
                                        1.29
                                    </td>
                                </tr>
                                {/* More rows */}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
            <div className='flex flex-col w-full'>
                <MinFooter />
            </div>
        </main>
    )
}

export default GameCategory;