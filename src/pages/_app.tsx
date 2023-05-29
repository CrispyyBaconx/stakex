import type { AppType } from 'next/app';
import localFont from 'next/font/local';
import { DAppProvider, type Config, Arbitrum, ArbitrumGoerli } from "@usedapp/core";

import { api } from '@/utils/api';

import '@/styles/globals.css';

const blenderPro = localFont({
    src: '../../public/fonts/Blender-Pro-Bold.woff2',
    variable: '--font-blender-pro',
    weight: "700",
});

export const config: Config = {
    readOnlyUrls: {
        [Arbitrum.chainId]: "https://arb1.arbitrum.io/rpc",
        [ArbitrumGoerli.chainId]: "https://goerli-rollup.arbitrum.io/rpc",
    }
}

const App: AppType = ({ Component, pageProps }) => {
    return (
        <DAppProvider config={ config }>
            <main className={`${blenderPro.variable} font-sans`}>
                <Component {...pageProps} />
            </main>
        </DAppProvider>
    );
};

export default api.withTRPC(App);
