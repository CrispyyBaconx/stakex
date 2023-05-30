import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import bg from '@/assets/bg.gif';
import Logo from '@/assets/logo.svg';
import Footer from '@/components/Footer';

// Components
import { Initializing, Newsletter } from '@/components/Landing';
import { ConnectButton } from '@/components';

const Landing = () => {
	// TODO: add copy & gif to the middle of the page
	// TODO: make app, stake, and misc pages

	// TODO: replace background with blend i made using this https://www.blendernation.com/2020/07/06/blender-eevee-render-to-animated-gif/

	const background = {
		// eslint-disable-next-line @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-member-access
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
				<section className='text-white object-contain w-full h-[50rem]' style={ background }>
					<div className='bg-gradient-to-r from-black px-28 py-16 h-full'>
						<div className='grid grid-cols-1 gap-16'>
							<div className='flex w-full justify-between'>
								{/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
								<Image className='w-12' src={Logo} alt='Stakex Logo' />
								<div className='flex bg-slate-700'>
									<button className='px-4 py-2 text-sm font-medium text-white rounded-md hover:bg-opacity-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>App</button>
									<button className='px-4 py-2 text-sm font-medium text-white rounded-md hover:bg-opacity-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>Stake</button>
								</div>
								<div className='flex gap-6'>
									<ConnectButton />
								</div>
							</div>
							<Initializing />
							<h1 className='text-6xl font-bold'>Stakex</h1>
							<br />
							<p className='mb-12'>The best decentralized betting app - add more text? also maybe swap the buttons. Also don&apos;t forget to change the background to something not copyrighted</p>
							<div className='flex gap-6'>
								<Link href='/app' className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-10 py-5 text-center mr-2 mb-4'>Enter App</Link>
								<Link href='/stake' className='relative inline-flex items-center justify-center p-0.5 mb-4 mr-4 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
									<span className="relative px-10 py-5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Stake →</span>
								</Link>
							</div>
						</div>
					</div>
				</section>

				<section className='px-24 py-16 bg-inset text-white'>
					<div className='max-w-xl mb-16'>
						<h2 className='text-5xl'>
							Make your bets <span className='bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-400 text-transparent bg-clip-text'>on-chain.</span>
						</h2>
					</div>

					<div className='grid grid-cols-2 gap-4 text-white'>
						<h3 className='text-2xl font-bold mb-2'>
							A dApp built on arbitrum one. Add more copy here later + maybe a gif/short looping video on the right (mobile down).
						</h3>
					</div>
				</section>

				<section className='px-8 py-16 bg-[#353945] text-white'>
					<Newsletter />
				</section>
			</main>
			<Footer />
		</>
	)
}

export default Landing;