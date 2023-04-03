import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const Landing = () => (
	<div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/mainbg.png')" }}>
		<Head>
        	<title>Stakex</title>
        	<link rel="icon" href="/favicon.ico" />
      	</Head>

		<header className="p-8">
        	<Image src="/logo.png" alt="Stakex" className="h-16 w-auto" />
      	</header>

		<main className='bg-blue flex flex-col items-center justify-center w-full h-full text-white'>
			<div className='flex'>
				{/* <Image src='./' alt='' /> */}
				<p className='text-lg'>
					Filler Text
				</p>
			</div>
			<Link href='/app' className=''>Enter App</Link>
			<button className=''>Read More</button>
			<div className='bg-black'>We have the largest selection of stuff</div>
		</main>
	</div>
)

export default Landing;