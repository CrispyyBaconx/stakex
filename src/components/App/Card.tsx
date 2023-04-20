import React from 'react'

import Link from 'next/link';

interface CardProps {
    sport: string,
    description: string
}

const Card = (props: CardProps) => {
    return (
        <div className="flex max-h-44 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href="#">
                <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
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