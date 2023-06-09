import Link from 'next/link';

const Sidebar = () => {
    return (
        <>
            <aside className="top-0 left-0 z-10 w-16 h-screen transition-transform -translate-x-full sm:translate-x-0">
               	<div className="h-full w-36 px-6 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-950 no-scrollbar">
					{/* Implement backend? or just a static list of games / inplay*/}
					<Link href="/in-play">In Play</Link>
               	</div>
            </aside>
        </>
    )
}

export default Sidebar;