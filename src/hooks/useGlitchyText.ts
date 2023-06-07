import { useState, useEffect } from 'react'
import { useOnScreen } from '@/hooks';

export default function useGlitchyText(ref: React.RefObject<HTMLElement>, originalText: string) {
    const [hasScrambled, setHasScrambled] = useState(false);
    const onScreen = useOnScreen(ref);

    useEffect(() => {
        if (onScreen && ref.current && !hasScrambled) {
            const _originalText = originalText;
            const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            let iteration = 0;
            const interval = setInterval(() => {
                if (!ref.current) return;
                ref.current.innerText = _originalText
                    .split("")
                    .map((letter, index) => {
                        if(index < iteration) {
                            return _originalText[index];
                        }
                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("");
                if(iteration >= _originalText.length){ 
                    clearInterval(interval);
                    setHasScrambled(true);
                }
                iteration += 1 / 3;
            }, 15);
        }
        if (!onScreen) {
            setHasScrambled(false);
        }
    }, [hasScrambled, onScreen, originalText, ref]);       

    return hasScrambled;
}