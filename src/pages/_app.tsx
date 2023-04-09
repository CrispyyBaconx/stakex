import type { AppProps } from 'next/app';
import localFont from 'next/font/local';

const blenderPro = localFont({
    src: '../public/fonts/Blender-Pro-Book.ttf',
    variable: '--font-blender-pro',
    weight: "700",
});

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={`${blenderPro.variable} font-sans`}>
            <Component {...pageProps} />
        </main>
    )
}