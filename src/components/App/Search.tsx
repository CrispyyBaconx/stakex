import { BiSearch } from 'react-icons/bi';

const Search = () => {
    return (
        <div className='p-4 flex flex-row items-center'>
            <div className='relative w-96 h-10 bg-slate-600 rounded-md'> {/* Container acting as the input field */}
                <BiSearch className='absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500' />
                <input className='w-full h-full p-2 pl-8 text-gray-900 bg-transparent rounded-md' type="text" placeholder='Search' />
            </div>
        </div>
    ) 
}

export default Search;
