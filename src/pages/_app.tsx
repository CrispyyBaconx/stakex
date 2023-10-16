import type { AppType } from 'next/app';
import localFont from 'next/font/local';
import { DAppProvider, type Config, Mainnet, Sepolia } from "@usedapp/core";

import { api } from '@/utils/api';

import '@/styles/globals.css';
import { ParallaxProvider } from 'react-scroll-parallax';

const blenderPro = localFont({
    src: '../../public/fonts/Blender-Pro-Bold.woff2',
    variable: '--font-blender-pro',
    weight: "700",
});

export const _config: Config = {
    multicallVersion: 2 as const,
    readOnlyUrls: {
        [Mainnet.chainId]: "https://eth-mainnet.g.alchemy.com/v2/Vy2RK9nukNdy1E1UVlNA_c3OX8nC9zWf",
        [Sepolia.chainId]: "https://eth-sepolia.g.alchemy.com/v2/P7KBlG6NBLajZCuD0Kpe13qSsDd8RW22",
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
