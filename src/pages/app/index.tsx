import MinFooter from "@/components/MinFooter";
import Head from "next/head";
import Image from "next/image";

import logo from '@/assets/logo.svg';

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
                    <div className="flex">
                        <Image className="w-5 h-5" src={logo} alt='Stakex Logo' />
                        <h2 className="text-white">Stakex</h2>
                    </div>
                </header>
                {/* Maybe design a figma mock before I work on this page */}
            </main>
            <MinFooter />
        </>
    )
}

export default app;