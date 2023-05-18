import type { AppType } from 'next/app';
import type { Session } from 'next-auth';
import localFont from 'next/font/local';
import { SessionProvider } from 'next-auth/react';

import { api } from '@/utils/api';

const blenderPro = localFont({
    src: '../../public/fonts/Blender-Pro-Bold.woff2',
    variable: '--font-blender-pro',
    weight: "700",
});

import '@/styles/globals.css';

const App: AppType<{ session: Session | null }> = ({ Component, pageProps: { session, ...pageProps } }) => {
    return (
        <SessionProvider session={session}>
            <main className={`${blenderPro.variable} font-sans`}>
                <Component {...pageProps} />
            </main>
        </SessionProvider>
    );
};

export default api.withTRPC(App);
