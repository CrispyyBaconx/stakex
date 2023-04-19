import React from 'react'

import Link from 'next/link';

interface CardProps {
    link: string
}

const Card = () => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href="#">
                <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
            </Link>
            <div className="p-5">
                <Link href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Football</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Huh</p>
            </div>
        </div>
    )
}

export default Card;