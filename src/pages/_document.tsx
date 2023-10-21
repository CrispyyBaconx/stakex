import { Html, Head, Main, NextScript } from 'next/document'
import { Analytics } from '@vercel/analytics/react';

export default function Document() {
  	return (
    	<Html lang="en">
      		<Head>
			  	<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@600&display=swap" rel="stylesheet" />
			</Head>
      		<body>
        		<Main />
        		<NextScript />
				<Analytics />
      		</body>
    	</Html>
  	)
}