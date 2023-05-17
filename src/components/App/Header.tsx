import React from 'react'

const Header = () => {
    return (
        <header className="flex flex-row items-stretch w-full">
            <section className="flex p-8 w-full justify-left">
                <h2 className="text-white text-4xl">Stakex</h2>
                <h5 className="p-1 text-purple-600 font-bold">Beta</h5>
            </section>
            <section>
                {/* search bar */}
                {/* toggle dark mode */}
                {/* account */}
            </section>
        </header>
    )
}

export default Header;