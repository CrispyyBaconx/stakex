import React from 'react'

import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

interface CardProps {
    sport: string,
    description: string,
    image: StaticImageData
}

// ! maybe instead of a description do upcoming games or a CTA
const Card = (props: CardProps) => {
    const background = {
		backgroundImage: `url("${props.image.src}")`,
		backgroundSize: "cover"
	};

    return (
        <div className="flex h-32 w-64 bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-blue-900 hover:border-2" style={ background }>
            <div className="p-6 bg-black bg-opacity-75 rounded-3xl w-full hover:bg-opacity-90 hover:font-extrabold transition">
                <Link href={`/app/${props.sport.toLowerCase()}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.sport}</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 hover:text-gray-100">{props.description}</p>
            </div>
        </div>
    )
}

export default Card;