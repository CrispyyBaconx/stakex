import React from 'react';

import { Card } from '@/components/Landing';
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { FaRegHandshake } from 'react-icons/fa';
import { GiMoneyStack } from 'react-icons/gi';
import { FaRegClock } from 'react-icons/fa';
import { BsShieldFill } from 'react-icons/bs';

const Info = () => {
    return (
        <>
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

                {/* Separator */}
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
        </>
    )
}

export default Info;