import { type IconType } from 'react-icons';
import { useGlitchesInText } from '@/hooks';
import { useRef } from 'react';

interface CardProps {
	title: string;
	description: string;
	icon: IconType;
}

const Card = (props: CardProps) => {
	const titleRef = useRef<HTMLHeadingElement>(null);
    useGlitchesInText(titleRef, props.title);

	return (
		<div className="flex flex-col bg-stripes border-4 border-indigo-900 p-4 gap-4 min-w-full">
			<div className="flex flex-row text-2xl gap-4 items-center">
				<props.icon className='ml-2 text-blue-500' />
				<h3 className="text-3xl font-bold text-white text-shadow shadow-white" ref={titleRef}>{props.title}</h3>
			</div>
			<div className="flex flex-row text-xl">
				{props.description}
			</div>
		</div>
	)
}

export default Card;