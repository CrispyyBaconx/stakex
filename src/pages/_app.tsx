import type { AppType } from 'next/app';
import localFont from 'next/font/local';
import { DAppProvider } from "@usedapp/core";

import { api } from '@/utils/api';

const blenderPro = localFont({
    src: '../../public/fonts/Blender-Pro-Bold.woff2',
    variable: '--font-blender-pro',
    weight: "700",
});

import '@/styles/globals.css';

const App: AppType = ({ Component, pageProps }) => {
    return (
        <DAppProvider config={{}}>
            <main className={`${blenderPro.variable} font-sans`}>
                <Component {...pageProps} />
            </main>
        </DAppProvider>
    );
};

export default api.withTRPC(App);
