import type { AppProps } from 'next/app';
import { Roboto_Mono } from 'next/font/google'

import '@/styles/globals.css';

const robotoMono = Roboto_Mono({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={robotoMono.className}>
            <Component {...pageProps} />
        </main>
    )
}