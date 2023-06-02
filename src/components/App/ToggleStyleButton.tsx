import { useState } from 'react';

const ToggleStyleButton = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className='flex flex-row items-center justify-center p-4'>
            <button onClick={ () => setToggle(!toggle) } className='flex flex-row items-center justify-center w-12 h-12 p-2 text-white bg-gray-900 rounded-full'>
                { toggle ? <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" clipRule="evenodd" />
                </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" clipRule="evenodd" />
                </svg> }
            </button>
        </div>
    )
}

export default ToggleStyleButton;