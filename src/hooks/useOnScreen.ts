import { type RefObject, useState, useMemo, useEffect } from 'react'

export default function useOnScreen(ref: RefObject<HTMLElement>): boolean {
    const [isIntersecting, setIntersecting] = useState(false);
    
    const observer = useMemo(() => {
        if (typeof IntersectionObserver === 'undefined') {
            return null;
        }

        return new IntersectionObserver(
            ([entry]) => {
                if(entry !== undefined) setIntersecting(entry.isIntersecting)
            }
        );
    }, []);
  
    useEffect(() => {
        if (!observer || ref.current === null) {
            return;
        }

        observer.observe(ref.current);
        return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref.current]);
  
    return isIntersecting;
}
