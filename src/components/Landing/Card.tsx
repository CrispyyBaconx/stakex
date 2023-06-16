import { type IconType } from 'react-icons';
import { useGlitchesInText } from '@/hooks';
import { useRef } from 'react';

type CardProps = {
    title: string;
    description: string;
    icon: IconType; 
}

const Card = (props: CardProps) => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    useGlitchesInText(titleRef, props.title);

    return (
        <div className='flex w-[300px] aspect-[10/16] rounded-2xl overflow-hidden py-8 hover:scale-105 ease-in-out transition'>
            <div className='flex flex-col justify-between w-full p-5 bg-[#13151f] border-[#008cff] border-2 rounded-2xl'>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center justify-center w-12 h-12 bg-white rounded-full'>
                        <props.icon className='w-6 h-6 text-black' />
                    </div>
                    <h3 className='text-3xl font-bold text-white text-shadow shadow-slate-500' ref={titleRef}>{props.title}</h3>
                    <p className='text-l text-gray-300'>{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;