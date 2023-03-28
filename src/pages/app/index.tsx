import Head from "next/head";

const app = () => {
    return (
        <>
            <Head>
                <title>Stakex</title>
        		<meta name="description" content="Stakex" />
        		<meta name="viewport" content="width=device-width, initial-scale=1" />
        		<link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <header>
                    <h1 className='text-3xl font-bold underline'>Test</h1>
                </header>
            </main>
        </>
    )
}

export default app;