import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import bg from '@/assets/bg.gif';
import Logo from '@/assets/logo.svg';
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
								<Image src={Logo} alt='Stakex Logo' />
							</div>
							<h2 className='text-m uppercase font-bold'>Initializing...</h2>
							<h1 className='text-6xl font-bold'>Stakex</h1>
							<br />
							<p>The best decentralized casino</p>
							<div className='flex gap-6'>
								<Link href='/app' className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Enter App</Link>
								<Link href='/stake' className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
									<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Stake →</span>
								</Link>
							</div>
						</div>
					</div>
				</div>

				<div className='px-8 py-16 bg-inset text-white'>
					<div className='max-w-md mb-16'>
						<h2 className='text-5xl'>
							Filler
						</h2>
					</div>

					<div className='grid grid-cols-2 gap-4 text-white'>
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