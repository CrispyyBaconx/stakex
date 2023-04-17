import MinFooter from "@/components/MinFooter";
import Head from "next/head";
import Image from "next/image";

import logo from '@/assets/logo.svg';

import { Sidebar, Breadcrumb } from '@/components/App';

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
                <header className="flex flex-col">
                    <div className="flex">
                        <Image className="w-5 h-5" src={logo} alt='Stakex Logo' />
                        <h2 className="text-black">Stakex</h2>
                    </div>
                    <Breadcrumb />
                </header>
                <Sidebar />
                {/* Maybe design a figma mock before I work on this page */}
            </main>
            <MinFooter />
        </>
    )
}

export default app;