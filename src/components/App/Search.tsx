import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { api } from '@/utils/api';
import { type Game } from '@prisma/client';

const Search = () => {
    const [searchString, setSearchString] = useState("");
    const { isLoading, data: searchResults } = api.main.searchGames.useQuery(
      { searchString },
      { enabled: !!searchString }
    );

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchString(event.target.value);
    }

    return (
        <div className='p-4 flex flex-row items-center'>
            <div className='relative w-96 h-10 bg-slate-600 rounded-md'> {/* Container acting as the input field */}
                <BiSearch className='absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500' />
                <input 
                  className='w-full h-full p-2 pl-8 text-gray-900 bg-transparent rounded-md' 
                  type="text" 
                  placeholder='Search' 
                  value={searchString} 
                  onChange={handleSearch} 
                />
            </div>
            {!!searchResults && (
              <div>
                {searchResults.map(((game: Game) => (
                  <article key={game.id}>
                        <h1>Game Found</h1>
                  </article>
                )))}
              </div>
            )}
        </div>
    )
}
// ! Add a loading state for when the search is loading

// Don't forget to ask if the db architecture is feasible (timestamped history of values)

export default Search;
