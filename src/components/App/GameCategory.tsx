import { api } from "@/utils/api";
import { type StaticImageData } from "next/image";
import LoadingSpinner from "../LoadingSpinner";

export interface GameCategoryProps {
    sport: string;
    backgroundImage: StaticImageData;
}

const GameCategory = () => {
    const isLoading = false; // placeholder for the api call
    // get games for the sport
    // make basic template for the sport
    // title at the top, list of games below, background image faded in the background

    return (
        <main className="w-full h-screen bg-slate-800">
            {/** 
                Get Date
                API call to get games -> list in asc/desc order 
                Should get odds with first call? Maybe make a separate route to get everything at once //!todo
                Maybe postfx a lattice over the image and just make that the bg
                px-auto, fixed width
            */}
            <div className="flex flex-col w-[30rem] h-[50rem] border-2 border-gray-400 rounded-xl">
                {isLoading ? (
                    <div className="m-auto w-full h-full">
                        <LoadingSpinner />
                    </div>
                ) : (
                    <div>
                        <div className="flex flex-row w-full text-md text-left text-gray-500 bg-gray-200 p-4 rounded-xl">
                            Thursday, 11th
                        </div>
                    
                        <table className="w-full text-md uppercase">
                          <thead className="w-full text-gray-700">
                            <tr className="flex gap-6 px-2 bg-slate-600">
                              <th scope="col" className="mr-auto">
                                Teams
                              </th>
                              <th scope="col">
                                Money Line
                              </th>
                              <th scope="col">
                                Overall
                              </th>
                              <th scope="col">
                                Underdawg
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="flex border-b border-gray-700 hover:bg-gray-50 w-full">
                              <th scope="row" className="mr-auto font-medium text-gray-900 whitespace-nowrap">
                                {/** 
                                  Will have team logo/crest & names
                                  */}
                                Steve vs. David
                              </th>
                              <td className="px-2 py-4">
                                1.09
                              </td>
                              <td className="px-2 py-4">
                                1.19
                              </td>
                              <td className="px-2 py-4">
                                1.29
                              </td>
                            </tr>
                          </tbody>
                        </table>
                    </div>
                )}
            </div>
        </main>
    )
}

export default GameCategory;