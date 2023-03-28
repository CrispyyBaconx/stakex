import { Head } from "next/document";
import styles from "@/styles/App.module.css"


const app = () => {
    return (
        <>
            <Head>
                {/* Add meta tags later */}
            </Head>
            <main>
                <header>
                    <div className={styles.ribbon}></div>
                </header>
            </main>
        </>
    )
}

export default app;