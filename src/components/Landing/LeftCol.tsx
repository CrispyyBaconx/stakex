import { Card } from '@/components/Landing';
import { BsFillLightningChargeFill, BsShieldFill } from 'react-icons/bs';
import { GiMoneyStack } from 'react-icons/gi';
import { useParallax } from 'react-scroll-parallax';

const LeftCol = () => {
    const card1 = useParallax<HTMLDivElement>({
        easing: 'easeOutQuad',
        translateX: [-100, 0],
        scale: [0.98, 1],
        opacity: [0, 1],
        startScroll: 300,
        endScroll: 1200,
    })

    const card2 = useParallax<HTMLDivElement>({
        easing: 'easeOutQuad',
        translateX: [-100, 0],
        scale: [0.98, 1],
        opacity: [0, 1],
        startScroll: 450,
        endScroll: 1600,
    })

    const card3 = useParallax<HTMLDivElement>({
        easing: 'easeOutQuad',
        translateX: [-100, 0],
        scale: [0.98, 1],
        opacity: [0, 1],
        startScroll: 750,
        endScroll: 2000,
    })

    return (
        <div className="flex flex-col">
            <div className="flex flex-row items-center justify-center p-4 my-4" ref={card1.ref}>
                <Card title='Instant Betting' description='Place bets on your favorite teams and players without any unnecessary steps - no deposits, no registrations.' icon={ BsFillLightningChargeFill } />
            </div>
            <div className="flex flex-row items-center justify-center p-4 my-4" ref={card2.ref}>
                <Card title='Low Fees' description='Thanks to the scalability provided by Arbitrum One, you can enjoy incredibly low fees, making your betting experience even more rewarding.' icon={ GiMoneyStack } />
            </div>
            <div className="flex flex-row items-center justify-center p-4 my-4" ref={card3.ref}>
                <Card title='Secure' description=' Your funds are yours alone. We leverage the power of smart contracts to ensure your winnings are transferred directly to your wallet - no middleman, no waiting.' icon={ BsShieldFill } />
            </div>
        </div>
    )
}

export default LeftCol;