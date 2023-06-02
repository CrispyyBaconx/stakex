import React from 'react';

import { useBlockNumber } from "@usedapp/core";
import { ConnectButton } from '@/components';
import { Search, ToggleStyleButton } from '@/components/App';

const Header = () => {
    const blockNumber = useBlockNumber();

    return (
        <header className="flex flex-row items-stretch w-full">
            <section className="flex p-8 w-full justify-left">
                <h2 className="text-white text-4xl">Stakex</h2>
                <h5 className="p-1 text-purple-600 font-bold">Beta</h5>
            </section>
            {blockNumber && blockNumber}
            <section>
                <Search />
                <ToggleStyleButton />
                <ConnectButton />
            </section>
        </header>
    )
}

export default Header;