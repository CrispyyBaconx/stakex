import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image, { type StaticImageData } from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface Item {
    image: StaticImageData;
    link: string;
}

interface CarouselProps {
    items: Item[];
    interval: number;
}

const Carousel = (props: CarouselProps) => {
    const [index, setIndex] = useState(0);
    const router = useRouter();
    const current = props.items[index];

    const next = () => {
        setIndex((previousIndex) => {
            return previousIndex + 1 === props.items.length ? 0 : previousIndex + 1;
        });
    }

    const previous = () => {
        setIndex((previousIndex) => {
            return previousIndex - 1 < 0 ? props.items.length - 1 : previousIndex - 1;
        });
    }

    const handleJump = (index: number) => {
        setIndex(index);
    }

    useEffect(() => {
        const next = () => {
            setIndex((previousIndex) => {
                return previousIndex + 1 === props.items.length ? 0 : previousIndex + 1;
            });
        }

        const interval = setInterval(() => {
            next();
        }, props.interval);

        return () => clearInterval(interval);
    }, [props.interval, props.items.length]);

    return ( // still need to add the link functionality
        <div className="flex relative justify-center items-center">
            {current && <Image className='w-full h-full rounded-lg border border-red-500' src={current.image} key={index} alt='' height={300} width={500} />}
            <div className="flex absolute justify-between w-full px-5 top-1/2 transform -translate-y-1/2">
                <button className="bg-slate-900 border-2 border-gray-400 text-white p-2 rounded-full left-0" onClick={previous}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/> {/* fix this bs */}
                    </svg>
                </button>
                <button className="bg-slate-900 border-2 border-gray-400 text-white p-2 rounded-full right-0" onClick={next}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="flex h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                </button>
            </div>
            <div className="mt-5 flex justify-center space-x-5 absolute">
                {props.items.map((_, idx) => {
                    return (
                        <div key={idx} className={`flex ${idx === props.items.length - 1 ? '' : 'mr-2'}`} onClick={() => handleJump(idx)} />
                    )
                })}
            </div>
        </div>
    )
}

export default Carousel;