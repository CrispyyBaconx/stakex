import { useState } from 'react';
import Link from 'next/link';
import { FiMinus, FiChevronDown } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Sidebar = () => {
    return (
        <>
            <aside className="top-0 left-0 z-10 h-screen transition-transform -translate-x-full sm:translate-x-0">
               	<div className="h-full w-48 px-6 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-950 no-scrollbar">
					{/* Implement backend? or just a static list of games / inplay*/}
					<ul>
                        <SidebarItem href="/in-play" title="In Play" />
                        <SidebarItem href="/football" title="Football" />
                        <SidebarItem href="/tennis" title="Tennis" />
                        <SidebarItem href="/basketball" title="Basketball" />
                        <SidebarItem href="/esports" title="Esports" />
                        <SidebarItem href="/soccer" title="Soccer" />
                    </ul>
               	</div>
            </aside>
        </>
    )
}

type SidebarItemProps = {
    href: string;
    title: string;
}

const SidebarItem = ({ href, title }: SidebarItemProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = (value: boolean) => {
        setIsHovered(value);
    };

    return (
        <li className="mb-2 flex flex-row text-gray-400 hover:text-gray-200">
            <Link href={href} className="flex items-center">
                <motion.div 
                    className='flex items-center'
                    onMouseEnter={() => { handleHover(true) }}
                    onMouseLeave={() => { handleHover(false) }}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <motion.div
                        initial={{ rotate: 0 }}
                        animate={isHovered ? { rotate: 90 } : { rotate: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ marginRight: '0.5rem' }}
                    >
                        {isHovered ? <FiChevronDown size={20} /> : <FiMinus size={20} />}
                    </motion.div>
                    <span className="mx-4 text-lg font-normal">{title}</span>
                </motion.div>
            </Link>
        </li>
    )
};

export default Sidebar;