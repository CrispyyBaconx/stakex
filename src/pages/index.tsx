import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import bg from '@/assets/bg.jpg';
import logosvg from '@/assets/logo.svg';
import Footer from '@/components/Footer';

// check this https://flowbite.com/docs/components/footer/

const Landing = () => {
	const background = {
		backgroundImage: `url("${bg.src}")`,
		backgroundSize: "cover"
	};

	return (
		<>
			<Head>
				<title>Stakex</title>
				<meta name="description" content="Stakex" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className='App'>
				<div className='text-white' style={background}>
					<div className='bg-gradient-to-r from-black px-8 py-16'>
						<div className='max-w-xl grid grid-cols-1 gap-8'>
							<div className='w-12'>
								<Image src={logosvg} alt='Stakex Logo' />
							</div>
							<h2 className='text-m uppercase font-bold'>
								Initializing...
							</h2>
							<h1 className='text-6xl font-bold'>
								Stakex
							</h1>
							<br />
							<Link href='/app' className='bg-gradient-to-r from-pink-600 to-orange-600 py-3 px-6 text-lg rounded-md w-48'>Enter App</Link>
						</div>
					</div>
				</div>

				<div className='px-8 py-16'>
					<div className='max-w-md mb-16'>
						<h2 className='text-5xl'>
							Filler
						</h2>
					</div>

					<div className='grid grid-cols-2 gap-4 text-slate-600'>
						<div>
							<h3 className='text-2xl font-bold mb-2'>
								Filler
							</h3>
							<p className='text-lg'>
								Written by <code>Filler</code>
							</p>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	)
}

export default Landing