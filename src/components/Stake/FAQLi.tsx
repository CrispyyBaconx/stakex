import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

interface FAQLiProps {
    question: string;
    answer: string;
}

const FAQLi = (props: FAQLiProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <li className="flex flex-row w-full justify-between p-4 bg-gray-800 rounded-xl border-2 border-black">
                <p>{props.question}</p>
                <button className="flex items-center transition" onClick={() => {setIsOpen(!isOpen)}}>
                    {isOpen ? <AiOutlineMinus size={24} /> : <AiOutlinePlus size={24} />}
                </button>
            </li>
            {isOpen && (
                <p>{props.answer}</p>
            )}
        </>        
    )
}

export default FAQLi;