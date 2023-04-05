import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import bg from './assets/bg.png';
import logosvg from './assets/logo.svg';

const Landing = () => {
	const background = {
		backgroundImage: `url("${bg}")`,
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
								{/* add a logo */}
							</div>
							<h2 className='text-xl uppercase font-bold'>
								{/* text */}
							</h2>
							<h1 className='text-6xl font-bold'>
								{/* text */}
							</h1>
							<p className='text-lg'>
								{/* text */}
							</p>
							<Link href='/app' className='bg-blue'>Enter App</Link>
						</div>
					</div>
				</div>

				<div className='px-8 py-16'>
					<div className='max-w-md mb-16'>
						<h2 className='text-5xl'>
							{/* text */}
						</h2>
					</div>

					<div className='grid grid-cols-2 gap-4 text-slate-600'>
						<div>
							<h3 className='text-2xl font-bold mb-2'>
								{/* text */}
							</h3>
							<p className='text-lg'>
								{/* text */}
							</p>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}

export default Landing;