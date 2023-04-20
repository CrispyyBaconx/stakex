import React from 'react'

import Link from 'next/link';
import Image from 'next/image';

interface CardProps {
    sport: string,
    description: string,
    image: string
}

// ! maybe instead of a description do upcoming games.
const Card = (props: CardProps) => {
    return (
        <div className="flex max-h-44 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href="#">
                <Image className="rounded-t-lg" src={props.image} alt={`${props.sport}`} />
            </Link>
            <div className="p-5">
                <Link href={`/app/${props.sport.toLowerCase()}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.sport}</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.description}</p>
            </div>
        </div>
    )
}

export default Card;