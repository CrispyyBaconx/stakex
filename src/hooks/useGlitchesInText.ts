import { useState, useEffect } from 'react';
import { useOnScreen } from '~/hooks';

export default function useGlitchyText(ref: React.RefObject<HTMLElement>, originalText: string): boolean {
    const [hasScrambled, setHasScrambled] = useState(false);
    const onScreen = useOnScreen(ref);

    useEffect(() => {
        if (onScreen && ref.current && !hasScrambled) {
            const _originalText = originalText;
            const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            let iteration = 0;
            const interval = setInterval(() => {
                if (!ref.current) return;
                const scrambledText = _originalText
                    .split('')
                    .map((letter, index) => {
                        if (Math.random() < (1 / 3) || index < iteration) {
                            return _originalText[index];
                        }
                        return letters[Math.floor(Math.random() * letters.length)];
                    })
                    .join('');

                ref.current.innerText = scrambledText;
                if (iteration >= _originalText.length) {
                    clearInterval(interval);
                    setHasScrambled(true);
                }
                iteration += 1 / 3;
            }, 15);

            return () => clearInterval(interval);
        }

        if (!onScreen) {
            setHasScrambled(false);
        }
    }, [hasScrambled, onScreen, originalText, ref]);

    return hasScrambled;
}