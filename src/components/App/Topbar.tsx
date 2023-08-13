import { ConnectButton } from '@/components';
import { Search } from '@/components/App';

const Topbar = () => {
    return (
        <section className='flex flex-row py-5 pr-6 justify-between'>
            <div className="pl-8">
                <Search />
            </div>
            <div className='flex flex-row items-center justify-center p-4 w-50'>
                <ConnectButton display='compact' />
            </div>
        </section>
    )
}

export default Topbar;