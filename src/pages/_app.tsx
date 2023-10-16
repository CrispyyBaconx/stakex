import type { AppType } from 'next/app';
import localFont from 'next/font/local';
import { DAppProvider, type Config, Arbitrum, ArbitrumGoerli } from "@usedapp/core";

import { api } from '@/utils/api';

import '@/styles/globals.css';
import { ParallaxProvider } from 'react-scroll-parallax';

const blenderPro = localFont({
    src: '../../public/fonts/Blender-Pro-Bold.woff2',
    variable: '--font-blender-pro',
    weight: "700",
});

export const _config: Config = {
    readOnlyUrls: {
        [Arbitrum.chainId]: "https://arb1.arbitrum.io/rpc",
        [ArbitrumGoerli.chainId]: "https://goerli-rollup.arbitrum.io/rpc",
    }
}

const App: AppType = ({ Component, pageProps }) => {
    return (
        <ParallaxProvider>
            <DAppProvider config={ _config }>
                <main className={`${blenderPro.variable} font-sans`}>
                    <Component {...pageProps} />
                </main>
            </DAppProvider>
        </ParallaxProvider>
    );
};

export default api.withTRPC(App);
