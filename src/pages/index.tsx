import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Footer from '@/components/Footer';
import blank from '@/assets/blank.png';

// Components
import { Newsletter } from '@/components/Landing';
import { ConnectButton } from '@/components';
import { Card } from '@/components/Landing';
import { BsFillLightningChargeFill, BsShieldFill } from 'react-icons/bs';
import { FaRegHandshake, FaRegClock } from 'react-icons/fa';
import { GiMoneyStack } from 'react-icons/gi';
import { useGlitchyText } from '@/hooks';

const Landing = () => {
	const titleRef = useRef<HTMLHeadingElement>(null);
	useGlitchyText(titleRef, "Stakex");

	return (
		<>
			<Head>
				<title>Stakex</title>
				<meta name="description" content="Stakex" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className='App'>
				<section className='text-white object-contain w-full h-[50rem] bg-cover'>
					<video autoPlay muted loop className='-z-[100] w-auto min-w-full min-h-full absolute'>
						<source src='/assets/bg.mp4' type='video/mp4' />
					</video>
					<div className='bg-gradient-to-r from-black px-28 py-16 h-full'>
						<div className='grid grid-cols-1 gap-16'>
							<div className='flex w-full justify-between'>
								<Image className='w-12' src={blank} alt='Stakex Logo' />
								<div className='flex gap-6'>
									<ConnectButton />
								</div>
							</div>
							<h1 className='text-6xl font-bold' ref={titleRef}>Stakex</h1>
							<br />
							<div className='flex flex-col gap-4'>
								<p className='text-xl'>Welcome to the future of sports betting.</p>
								<p className='mb-12 text-l w-72'>We are decentralized, secure, and incredibly user-friendly. Bet on your favorite sports without depositing or creating an account!</p>
							</div>
							<div className='flex gap-6'>
								<Link href='/app' className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-10 py-5 text-center mr-2 mb-4'>Enter App</Link>
								<Link href='/stake' className='relative inline-flex items-center justify-center p-0.5 mb-4 mr-4 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
									<span className="relative px-10 py-5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Stake →</span>
								</Link>
							</div>
						</div>
					</div>
				</section>
				<section className='px-24 py-16 bg-inset text-white flex flex-col items-center'>
					<div className='mb-16 flex'>
						<h2 className='text-5xl flex flex-row'>
							Experience the Power of <span className='bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-400 text-transparent bg-clip-text block'>&nbsp;On-Chain&nbsp;</span> Betting.
						</h2>
					</div>

					<div className='flex flex-row justify-around items-center text-white w-[70rem]'>
						{/*<Image src={bg} alt='Cool Gif' width={120} height={120} className='flex' />*/}
						hi
						<h3 className='text-2xl font-bold mb-2 bg-slate-800 p-4 border-8 rounded-lg border-slate-800 w-72'>
							Stakex is an innovative decentralized app (dApp) built on the Arbitrum One layer-2 solution, transforming the way you bet on sports.
						</h3>
					</div>
				</section>

				<section className='flex flex-col items-center bg-[#050a18]'>
					<div className='flex flex-row'>
                		<div className="flex flex-col">
                		    <div className="flex flex-row items-center justify-center p-4">
                		        <Card title='Instant Betting' description='Place bets on your favorite teams and players without any unnecessary steps - no deposits, no registrations.' icon={ BsFillLightningChargeFill } />
                		    </div>
                		    <div className="flex flex-row items-center justify-center p-4">
                		        <Card title='Low Fees' description='Thanks to the scalability solutions provided by Arbitrum One, you can enjoy incredibly low fees, making your betting experience even more rewarding.' icon={ GiMoneyStack } />
                		    </div>
                		    <div className="flex flex-row items-center justify-center p-4">
                		        <Card title='Secure' description=' Your funds are yours alone. We leverage the power of smart contracts to ensure your winnings are transferred directly to your wallet - no middleman, no waiting.' icon={ BsShieldFill } />
                		    </div>
                		</div>

                		<div className='flex flex-col items-center justify-center w-1/6 mx-72'>
                		    <div className='flex flex-col items-center justify-center w-1 h-full bg-white rounded-full'></div>
                		</div>

                		<div className='flex flex-col pt-72'>
                		    <div className="flex flex-row items-center justify-center p-4">
                		        <Card title='Real-Time Updates' description='Stakex integrates real-time odds and updates, ensuring you have the most current information at your fingertips.' icon={ FaRegClock } /> 
                		    </div>
                		    <div className="flex flex-row items-center justify-center p-4">
                		        <Card title='Transparency' description='With Stakex, your bets are recorded on-chain, ensuring complete transparency and fairness. You can trust that there&apos;s no manipulation or unfair practices.' icon={ FaRegHandshake } /> 
                		    </div>
                		</div>
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