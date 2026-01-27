import { useState, useEffect, useRef } from 'react';

export const useCountUp = (end, duration = 2000) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const hasStarted = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasStarted.current) {
                    hasStarted.current = true;
                    let start = 0;
                    const increment = end / (duration / 16); // 16ms per frame

                    const timer = setInterval(() => {
                        start += increment;
                        if (start >= end) {
                            setCount(end);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(start));
                        }
                    }, 16);
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, [end, duration]);

    return [count, countRef];
};
