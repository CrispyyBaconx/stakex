import { Header, MinFooter, Sidebar } from "@/components/App";
import Head from "next/head";

const App = () => {
    return (
        <>
            <Head>
                <title>Stakex</title>
        		<meta name="description" content="Stakex" />
        		<meta name="viewport" content="width=device-width, initial-scale=1" />
        		<link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex bg-gray-900">
                <div className="flex flex-col w-full sticky">
                    <Header />
                </div>
                <aside>
                    <Sidebar />
                </aside>
                <div className="container m-auto grid grid-cols-3 grid-rows-5 md:grid-cols-5 lg:grid-cols-8 gap-4"> {/* main content */}
                    <div className="tile bg-amber-500 row-start-2 row-end-5 col-span-1 md:col-span-2 lg:col-span-3">
                        <h1 className="tile-marker">TWO</h1>
                    </div>
                    <div className="tile bg-yellow-500 row-start-4 row-end-5 md:row-start-2 md:row-end-3 col-span-2 md:col-span-3 lg:col-span-5">
                        <h1 className="tile-marker">THREE</h1>
                    </div>
                    <div className="tile bg-lime-600 lg:col-start-4 lg:col-span-2">
                        <h1 className="tile-marker">FOUR</h1>
                    </div>
                    <div className="tile bg-green-600">
                        <h1 className="tile-marker">FIVE</h1>
                    </div>
                    <div className="tile bg-emerald-500">
                        <h1 className="tile-marker">SIX</h1>
                    </div>
                    <div className="tile bg-teal-500">
                        <h1 className="tile-marker">SEVEN</h1>
                    </div>
                    <div className="tile bg-purple-500">
                        <h1 className="tile-marker">EIGHT</h1>
                    </div>
                    <div className="tile bg-pink-500 row-start-5 md:col-span-full">
                        <h1 className="tile-marker">NINE</h1>
                    </div>
                </div>
            </main>
            <MinFooter />
        </>
    )
}

export default App;