import { FaRegClock, FaRegHandshake } from 'react-icons/fa';
import { useParallax } from 'react-scroll-parallax';
import { Card } from '@/components/Landing';

const RightCol = () => {
    const card4 = useParallax<HTMLDivElement>({
        easing: 'easeOutQuad',
        translateX: [100, 0],
        scale: [0.98, 1],
        opacity: [0, 1],
        startScroll: 300,
        endScroll: 1200,
    })

    const card5 = useParallax<HTMLDivElement>({
        easing: 'easeOutQuad',
        translateX: [100, 0],
        scale: [0.98, 1],
        opacity: [0, 1],
        startScroll: 450,
        endScroll: 1800,
    })

    return (
        <div className='flex flex-col pt-72'>
            <div className="flex flex-row items-center justify-center p-4 my-4" ref={card4.ref}>
                <Card title='Real-Time Updates' description='Stakex integrates real-time odds and updates, ensuring you have the most current information at your fingertips.' icon={ FaRegClock } /> 
            </div>
            <div className="flex flex-row items-center justify-center p-4 my-4" ref={card5.ref}>
                <Card title='Transparency' description='With Stakex, your bets are recorded on-chain, ensuring complete transparency and fairness. You can trust that there&apos;s no manipulation or unfair practices.' icon={ FaRegHandshake } /> 
            </div>
        </div>
    )
}

export default RightCol;