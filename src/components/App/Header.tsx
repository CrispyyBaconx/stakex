import { ConnectButton } from '@/components';
import { Search, ToggleStyleButton } from '@/components/App';

const Header = () => {

    return (
        <header className="flex flex-row items-stretch w-full">
            <section className="flex p-8 w-full justify-left">
                <h2 className="text-white text-4xl">Stakex</h2>
                <h5 className="p-1 text-purple-600 font-bold">Beta</h5>
            </section>
            <section className='flex flex-row'>
                <Search />
                <ToggleStyleButton />
                <div className='flex flex-row items-center justify-center p-4'>
                    <ConnectButton display='compact' />
                </div>
            </section>
        </header>
    )
}

export default Header;