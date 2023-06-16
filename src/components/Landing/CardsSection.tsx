import cardsBackground from '@/assets/cardsBackground.png';
import { ParallaxBanner } from 'react-scroll-parallax';
import { type BannerLayer } from 'react-scroll-parallax/dist/components/ParallaxBanner/types';
import LeftCol from './LeftCol';
import RightCol from './RightCol';

const CardsSection = () => {
    const background: BannerLayer = {
        image: cardsBackground.src,
        speed: 30
    }

    return (
        <ParallaxBanner className='bg-inset h-[100rem]' layers={[background, {
            children: (
                <section className="flex flex-col items-center">
                    <div className='flex flex-row bg-gradient-to-r from-black px-28 h-full w-full justify-center'>
                        <LeftCol />

                        <div className='flex flex-col items-center justify-center w-1/6 mx-56'>
                            <div className='flex flex-col items-center justify-center w-1 h-full bg-slate-800 rounded-full'></div>
                        </div>

                        <RightCol />
                    </div>
                </section>
            ),
            speed: 0
        }]} />
    )
}

export default CardsSection;