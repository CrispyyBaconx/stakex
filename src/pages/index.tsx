import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import coins from '@/assets/coins.png';
import logo from '@/assets/logo.svg';

// Components
import { Newsletter, Card } from '@/components/Landing';
import { Head } from '@/components';
import { useGlitchyText } from '@/hooks';

// Icons 
import { FaRegHandshake } from 'react-icons/fa';
import { BsShieldFill, BsFillLightningChargeFill } from 'react-icons/bs';
import { AiOutlineClockCircle } from 'react-icons/ai';

// add pnl cards to finished bets on the bets page

const Landing = () => {
	const titleRef = useRef<HTMLHeadingElement>(null);
	useGlitchyText(titleRef, "Stakex");

	return (
		<>
			<Head title='Stakex - Home' />
			<main className='max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8'> {/*  */}
				<section className='text-white object-contain w-full h-[50rem] bg-cover'>
					<div className='grid grid-cols-1 gap-16 px-28 py-16'>
						<div className='flex w-full justify-between'>
							<div className='flex flex-row gap-6'>
								{/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
								<Image className='w-8' src={logo} alt='Stakex Logo' />
								<h1 className='text-4xl font-bold text-shadow shadow-slate-100 self-center' ref={titleRef}>Stakex</h1>
							</div>
							<Link href="/app" className='tracking-wider text-xl'>
								App  &gt;
							</Link>
						</div>
						<br />
						<div className='flex flex-col gap-4'>
							<p className='text-3xl'>Welcome to the future of sports betting.</p>
							<p className='mb-12 text-l w-72'>We are decentralized, secure, and incredibly user-friendly. Bet on your favorite sports without depositing or creating an account!</p>
						</div>
						<div className='flex gap-6'>
							<Link href='/app' className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-10 py-5 text-center mr-2 mb-4'>Enter App</Link>
							<Link href='/stake' className='relative inline-flex items-center justify-center p-0.5 mb-4 mr-4 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
								<span className="relative px-10 py-5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Stake →</span>
							</Link>
						</div>
					</div>
				</section>
				<section className='px-24 py-16 text-white flex flex-col items-center'>
					<div className='mb-16 flex'>
						<h2 className='text-5xl flex flex-row'>
							Experience the Power of <span className='bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-400 text-transparent bg-clip-text block'>&nbsp;On-Chain&nbsp;</span> Betting.
						</h2>
					</div>

					<div className='flex flex-row justify-around items-center text-white w-[70rem]'>
						<Image src={coins} alt='Coins' width={240} height={240} className='flex' />
						<h3 className='text-2xl font-bold bg-slate-800 p-4 border-8 rounded-lg border-gray-900 bg-stripes w-72 my-10'>
							Stakex is an innovative decentralized app (dApp) built on the blockchain, transforming the way you bet on sports.
						</h3>
					</div>
				</section>

				<section className="flex flex-col items-center gap-8 mx-8">
					<h2 className='text-4xl text-shadow shadow-white self-start mx-[-2rem]'>Why Stakex?</h2>
					<Card title='Transparency' description='With Stakex, your bets are recorded on-chain, ensuring complete transparency and fairness. You can trust that there&apos;s no manipulation or unfair practices.' icon={ FaRegHandshake } />
					<Card title='Security' description='Stakex is built on the Ethereum blockchain, meaning that your bets are secured by the Ethereum network. You can rest assured that your bets are safe and secure.' icon={ BsShieldFill } />
					<Card title='Frictionless Betting' description='With Stakex, you can place bets on your favorite teams and players without any unnecessary steps. No deposits, no registrations.' icon={ BsFillLightningChargeFill } />
					<Card title='No Last Minute Cancellations' description='Once a bet is placed, the timestamp of the block is used to verify odds at time of placement - so no random cancellations' icon={ AiOutlineClockCircle } />
				</section>

				<section className='px-24 py-16 text-white flex flex-col items-center'>
					<div className='mb-16 flex'>
						<h2 className='text-5xl flex flex-row text-shadow shadow-slate-200'>
							How it Works / This isn&apos;t your average sportsbook.
						</h2>
					</div>
					<div className='flex flex-row justify-around items-center text-white w-[70rem]'>
						<h3 className='text-2xl font-bold mb-2 bg-stripes p-4 border-8 rounded-lg border-gray-900 w-72'>
							(filler) $SKX is the native token of the Stakex platform. It can be used to place bets, and can be earned by staking $SKX on our <Link href="/stake" className='text-indigo-600 hover:text-blue-500'>pools.</Link>
						</h3>
						Maybe add some graphics in a line explaining how it works
						<Image src={coins} alt='Coins' width={240} height={240} className='flex' />
					</div>
				</section>
			</main>
			<section className='px-8 py-16 bg-[#1b2130] text-white'>
				<Newsletter />
			</section>
			<Footer />
		</>
	)
}

export default Landing;