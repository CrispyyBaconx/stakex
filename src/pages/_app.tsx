import type { AppType } from 'next/app';
import type { Session } from 'next-auth';
import localFont from 'next/font/local';
import { SessionProvider } from 'next-auth/react';
import { Web3ReactProvider } from '@web3-react/core';

import { api } from '@/utils/api';

const blenderPro = localFont({
    src: '../../public/fonts/Blender-Pro-Bold.woff2',
    variable: '--font-blender-pro',
    weight: "700",
});

import '@/styles/globals.css';

const connectors: [MetaMask][] = [
    [MetaMask, metaMaskHooks],
]

const App: AppType<{ session: Session | null }> = ({ Component, pageProps: { session, ...pageProps } }) => {
    return (
        <SessionProvider session={session}>
            <Web3ReactProvider connectors={connectors} lookupENS={true}>
                <main className={`${blenderPro.variable} font-sans`}>
                    <Component {...pageProps} />
                </main>
            </Web3ReactProvider>
        </SessionProvider>
    );
};

export default api.withTRPC(App);
