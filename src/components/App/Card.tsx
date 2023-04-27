import React from 'react'

import Link from 'next/link';
import { useRouter } from 'next/router';
import { StaticImageData } from 'next/image';

interface CardProps {
    sport: string,
    image: StaticImageData
}

// ! maybe instead of a description do upcoming games or a CTA
const Card = (props: CardProps) => {
    const router = useRouter();
    
    const background = {
		backgroundImage: `url("${props.image.src}")`,
		backgroundSize: "cover"
	};

    const handleRedirect = (e) => {
        e.preventDefault();
        router.push(`/app/${props.sport.toLowerCase()}`);
    }

    return (
        <div className="flex h-32 w-64 bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-blue-900 hover:border-2 hover:cursor-pointer" style={ background } onClick={handleRedirect}>
            <div className="p-6 bg-black bg-opacity-75 rounded-3xl w-full hover:bg-opacity-90 hover:font-extrabold transition">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.sport}</h5>
            </div>
        </div>
    )
}

export default Card;