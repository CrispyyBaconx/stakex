import type { AppType } from 'next/app';
import localFont from 'next/font/local';
import { api } from '@/utils/api';

import '@/styles/globals.css';

const blenderPro = localFont({
    src: '../../public/fonts/Blender-Pro-Bold.woff2',
    variable: '--font-blender-pro',
    weight: "700",
});

const App: AppType = ({ Component, pageProps }) => {
    return (
        <main className={`${blenderPro.variable} font-sans`}>
            <Component {...pageProps} />
        </main>
    );
};

export default api.withTRPC(App);
