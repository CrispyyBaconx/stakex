import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import bg from '@/assets/bg.gif';
import Logo from '@/assets/logo.svg';
import Footer from '@/components/Footer';

import Initializing from '@/components/Landing/Initializing';
import FAQ from '@/components/Landing/FAQ';

const Landing = () => {
	// TODO: add background animation/render (three.js and react-three-fiber)
	// TODO: add email submission (convertkit maybe?)
	// TODO: add footer links
	// TODO: add copy & gif to the middle of the page
	// TODO: make app, stake, and misc pages

	const background = {
		backgroundImage: `url("${bg.src}")`,
		backgroundSize: "cover"
	};

	const submitEmail = (e) => {
		// TODO: add email submission
		e.preventDefault();
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
				<section className='text-white object-contain w-full h-[50rem]' style={background}>
					<div className='bg-gradient-to-r from-black px-28 py-16 h-full'>
						<div className='grid grid-cols-1 gap-16'>
							<div className='flex w-full justify-between'>
								<Image className='w-12' src={Logo} alt='Stakex Logo' />
								<div className='flex gap-6'>
									I am a cool thing on the other side that could be a button or something
								</div>
							</div>
							<Initializing />
							<h1 className='text-6xl font-bold'>Stakex</h1>
							<br />
							<p className='mb-12'>The best decentralized casino - maybe add more text? also maybe swap the buttons</p>
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
							A dApp built on arbitrum one. Add more copy here later.
						</h3>
					</div>
				</section>

				<section className='px-22 py-18 bg-gray-800 text-white flex flex-col items-center'>
					<FAQ />
				</section>

				<section className='px-8 py-16 bg-[#353945] text-white'>
					<div className='flex flex-col items-center gap-8'>
						<h2 className='text-3xl'>Want more updates?</h2>
						<form className='flex gap-5 align-middle' onSubmit={(e) => submitEmail(e)}>
							<div className='relative w-full mr-3 formkit-field'>
								<label className='hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300' htmlFor="member_email">Email Address</label>
								<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none focus:border-blue-500'>
									<svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
								</div>
								<input type='email' id='member_email' pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$" required placeholder='Enter Email' className='bg-black px-4 py-2 rounded-xl pl-10' />
							</div>
							<button className='bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center' type='submit'>Subscribe</button>
						</form>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}

export default Landing;