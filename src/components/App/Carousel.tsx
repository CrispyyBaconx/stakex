import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { type CarouselItem } from '@prisma/client';
import { motion } from 'framer-motion';

interface CarouselProps {
    items: CarouselItem[];
    interval: number;
}

const Carousel = (props: CarouselProps) => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1); // 1 for right, -1 for left
    const router = useRouter();

    useEffect(() => {
        const next = () => {
            setIndex((previousIndex) => {
                setDirection(1);
                return previousIndex + 1 === props.items.length ? 0 : previousIndex + 1;
            });
        }

        const interval = setInterval(() => {
            next();
        }, props.interval);

        return () => clearInterval(interval);
    }, [props.interval, props.items.length]);

    const slideIn = (direction: number) => ({
        opacity: 0,
        x: direction * 100,
        transition: { type: "tween", duration: 0.6 }
    });
    
    const slideOut = (direction: number) => ({
        opacity: 1,
        x: direction * -100,
        transition: { type: "tween", duration: 0.6 }
    });

    const current = props.items[index];
    if (!current) return null;

    const next = () => {
        setIndex((previousIndex) => {
            setDirection(1);
            return previousIndex + 1 === props.items.length ? 0 : previousIndex + 1;
        });
    }

    const previous = () => {
        setIndex((previousIndex) => {
            setDirection(-1);
            return previousIndex - 1 < 0 ? props.items.length - 1 : previousIndex - 1;
        });
    }

    const handleJump = (index: number) => {
        setIndex(index);
    }

    return (
        <div className="flex relative justify-center items-center my-8 w-4/5">
            <div className='flex flex-row'>
                <button className="bg-slate-900 border-2 border-gray-400 text-white p-2 mr-12 m-3 rounded-full left-0 transition hover:scale-110 my-auto" onClick={previous}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pl-1 pt-[3px] text-gray-400" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/> {/* fix this bs */}
                    </svg>
                </button>
                <motion.div
                    initial="out"
                    animate="in"
                    exit="out"
                    variants={{
                        in: slideIn(direction),
                        out: slideOut(direction)
                    }}
                    key={index} // This key is important for the animation to work correctly.
                >
                    <Image className='w-full h-full max-w-3xl rounded-lg border-[3px] border-gray-700 hover:cursor-pointer' src={current.imageLink} key={index} alt='Carousel' placeholder='blur' blurDataURL='iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==' height={350} width={800} onClick={() => { router.push(current.href).then().catch(console.error) }} />
                </motion.div>
                <button className="bg-slate-900 border-2 border-gray-400 text-white p-2 ml-12 m-3 rounded-full right-0 transition hover:scale-110 my-auto" onClick={next}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="flex h-6 w-6 pl-1 pt-[3px] text-gray-400" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                </button>
            </div>
            <div className="flex justify-center absolute bottom-4 p-2">
                {props.items.map((_, idx) => {
                    return (
                        <div key={idx} className={`flex bg-slate-800 border-gray-500 border-[1px] h-[0.6rem] w-[0.6rem] rounded-xl hover:cursor-pointer ${idx === props.items.length - 1 ? '' : 'mr-2'} ${idx === index ? 'scale-150 transition bg-indigo-800 border-purple-600' : ''}`} onClick={() => handleJump(idx)} />
                    )
                })}
            </div>
        </div>
    )
}

export default Carousel;