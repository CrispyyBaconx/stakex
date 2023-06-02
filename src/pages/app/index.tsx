import { Header, MinFooter, Sidebar, Featured } from "@/components/App";
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
            <main className="bg-gray-900">
                <Header />
                <Sidebar />
                <Featured />
            </main>
            <MinFooter />
        </>
    )
}

export default App;