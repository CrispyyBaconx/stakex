import { useState } from 'react';
import Link from 'next/link';
import { FiMinus, FiChevronDown } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Sidebar = () => {
    return (
        <aside className="h-full transition-transform -translate-x-full sm:translate-x-0">
          	<div className="h-full w-48 px-6 py-4 bg-gray-50 dark:bg-gray-950 no-scrollbar">
                <p className="text-xl p-4 pl-1">Popular</p>
			    <ul className='flex flex-col'>
                    <SidebarItem href="/in-play" title="In Play" />
                    <SidebarItem href="/upcoming" title="Upcoming" />
                    <SidebarItem href="/mlb" title="MLB" />
                    <SidebarItem href="/nba" title="NBA" />
                    <SidebarItem href="/nfl" title="NFL" />
                    <SidebarItem href="/pga" title="PGA Tour" />
                </ul>
                <p className="text-xl p-4 pl-1">All</p>
                <ul className='flex flex-col'>
                    <SidebarItem href="/tennis" title="Tennis" />
                    <SidebarItem href="/basketball" title="Basketball" />
                    <SidebarItem href="/esports" title="Esports" />
                    <SidebarItem href="/soccer" title="Soccer" />
                    <SidebarItem href="/mma" title="MMA" />
                </ul>
          	</div>
        </aside>
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
            <Link href={href} className="flex items-center w-full">
                <motion.div 
                    className='flex items-center w-full'
                    onMouseEnter={() => { handleHover(true) }}
                    onMouseLeave={() => { handleHover(false) }}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <motion.div
                        initial={{ rotate: 180 }}
                        animate={isHovered ? { rotate: 270 } : { rotate: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ marginRight: '0.5rem' }}
                    >
                        {isHovered ? <FiChevronDown size={20} /> : <FiMinus size={20} />}
                    </motion.div>
                    <span className="px-4 text-lg font-normal">{title}</span>
                </motion.div>
            </Link>
        </li>
    )
};

export default Sidebar;