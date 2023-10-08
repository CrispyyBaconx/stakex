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
		<div className="flex flex-col bg-[#194c7e]">
			<div className="flex flex-row text-2xl">
				<props.icon />
				<h3 className="text-2xl font-bold text-white text-shadow shadow-slate-500" ref={titleRef}>{props.title}</h3>
			</div>
			<div className="flex flex-row">
				{props.description}
			</div>
		</div>
	)
}

export default Card;