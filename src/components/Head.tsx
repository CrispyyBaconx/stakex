import Head from 'next/head';

interface HeadProps {
    title?: string;
    description?: string;
}

const _Head = (props: HeadProps) => {
    return (
        <Head>
            <title>{props.title ?? "Stakex"}</title>
            <link rel='icon' type="image/x-icon" href='/favicon.ico' />
            <link rel='preconnect' href='https://fonts.gstatic.com' />
            <link rel='preconnect' href='https://fonts.googleapis.com' />
            <meta property='description' content={props.description ?? "A decentralized sports betting platform that redistributes revenue to token holders & stakers"} />
            <meta property='og:title' content={props.title ?? "Stakex"} />
            <meta property='og:description' content={props.description ?? "A decentralized sports betting platform that redistributes revenue to token holders & stakers"} />
            <meta property='og:image' content='https://stakex.net/assets/brand/banner.png' />
            <meta property="og:image:type" data-n-head="ssr" data-hid="og:image:type" content="image/png" />
            <meta property='og:url' content='https://stakex.net' />
            <meta property='og:type' content='website' />
            <meta property='og:site_name' content='Stakex' /> {/* Top thing on Discord */}
            <meta property="og:locale" content="en_US" />
            <meta name='twitter:title' content={props.title ?? "Stakex"} />
            <meta name='twitter:description' content={props.description ?? "A decentralized sports betting platform that redistributes revenue to token holders & stakers"} />
            <meta name='twitter:image' content='https://stakex.net/assets/brand/banner.png' />
            <meta name='twitter:image:alt' content='Stakex' />
            <meta name='twitter:image:width' content='1200' />
            <meta name='twitter:image:height' content='600' />
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:site' content='Stakex.net' />
            <meta name='twitter:creator' content='@StakexOfficial' />
            <meta name='twitter:domain' content='https://stakex.net' />
            <meta name='twitter:url' content='https://stakex.net' />
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-RD2Q1Z4XNC"></script>
            <script> { /* ! fix this later */}
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-RD2Q1Z4XNC');
            </script>
        </Head>
    )
}

export default _Head;