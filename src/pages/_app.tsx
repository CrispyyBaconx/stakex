import type { AppType } from 'next/app';
import localFont from 'next/font/local';
import { ClerkProvider } from '@clerk/nextjs';

import { api } from '@/utils/api';

const blenderPro = localFont({
    src: '../../public/fonts/Blender-Pro-Bold.woff2',
    variable: '--font-blender-pro',
    weight: "700",
});

import '@/styles/globals.css';

const App: AppType = ({ Component, pageProps }) => {
    return (
		<ClerkProvider {...pageProps}>
            <main className={`${blenderPro.variable} font-sans`}>
                <Component {...pageProps} />
            </main>
        </ClerkProvider>
    );
};

export default api.withTRPC(App);
