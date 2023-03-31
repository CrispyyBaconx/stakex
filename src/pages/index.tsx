import Link from 'next/link'
import Image from 'next/image';

const Landing = () => (
	<main className='bg-blue flex'>
		<div className='flex'>
			<Image src='./' alt='' />
			<p className='text-lg'>
				Filler Text
			</p>
		</div>
		<div className='bg-black'>We have the largest selection of stuff</div>
	</main>
)

export default Landing;