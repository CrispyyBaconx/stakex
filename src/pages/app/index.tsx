import { Head } from "next/document";
import styles from "@/styles/App.module.css"

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
                    <div className='text-3xl font-bold underline'>Test</div>
                </header>
            </main>
        </>
    )
}

export default app;