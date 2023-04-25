import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import logo from '@/assets/logo.svg';

const Sidebar = () => {
    return (
        <>
            <aside className="top-0 left-0 z-10 w-16 h-screen transition-transform -translate-x-full sm:translate-x-0">
               	<div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 no-scrollbar">
                  	<Link href="/" className="flex items-center pl-1 mb-5">
                        <Image src={logo} className="h-6 w-6 mr-3 sm:h-7 sm:w-7" alt="Stakex Logo" />
                  	</Link>
                  	<ul className="space-y-2 font-medium">
                     	<li>
                        	<Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                           		<svg className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                        	</Link>
                     	</li>
                     	<li>
                     	   	<Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     	   	   	<svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                     	   	</Link>
                     	</li>
                  	</ul>
               	</div>
            </aside>
        </>
    )
}

export default Sidebar;