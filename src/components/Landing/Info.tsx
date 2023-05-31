import React from 'react';

import InfoSVG from "@/assets/Info.svg";
import Image from 'next/image';

const Info = () => {
    return (
        <>
            <div className="flex flex-row items-center justify-center p-4">
                {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                <Image src={InfoSVG} alt="Info" width={48} height={48} />
                <span className='text-xl'>Instant Betting: Place bets on your favorite teams and players without any unnecessary steps - no deposits, no registrations.</span>
            </div>
            <div className="flex flex-row items-center justify-center p-4">
                {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                <Image src={InfoSVG} alt="Info" width={48} height={48} />
                <span className='text-xl'>Transparency: With Stakex, your bets are recorded on-chain, ensuring complete transparency and fairness. You can trust that there&apos;s no manipulation or unfair practices.</span>
            </div>
            <div className="flex flex-row items-center justify-center p-4">
                {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                <Image src={InfoSVG} alt="Info" width={48} height={48} />
                <span className='text-xl'>Low Fees: Thanks to the scalability solutions provided by Arbitrum One, you can enjoy incredibly low fees, making your betting experience even more rewarding.</span>
            </div>
            <div className="flex flex-row items-center justify-center p-4">
                {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                <Image src={InfoSVG} alt="Info" width={48} height={48} />
                <span className='text-xl'>Real-Time Updates: Stakex integrates real-time odds and updates, ensuring you have the most current information at your fingertips.</span>
            </div>
            <div className="flex flex-row items-center justify-center p-4">
                {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                <Image src={InfoSVG} alt="Info" width={48} height={48} />
                <span className='text-xl'>Secure: Your funds are yours alone. We leverage the power of smart contracts to ensure your winnings are transferred directly to your wallet - no middleman, no waiting.</span>
            </div>
        </>
    )
}

export default Info;