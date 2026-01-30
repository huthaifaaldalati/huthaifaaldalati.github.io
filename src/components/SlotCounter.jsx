import React, { useEffect, useRef, useState } from 'react';

const SlotDigit = ({ char, index, isVisible }) => {
    // If not a digit, just return it as is
    if (!/^\d$/.test(char)) {
        return <span>{char}</span>;
    }

    const digit = parseInt(char, 10);

    // We create a strip of numbers. 
    // To give a "spin" feel, we can act like it spun a few times, but for simplicity/performance
    // we'll just have 0-9 sorted vertically and slide to the correct position.
    // To make it look like it's coming from "above" (falling into place), 
    // we should translate from a lower negative value up to the target?
    // Standard visual typically has the numbers moving UP (strip moves DOWN) or vice versa.
    // If we want numbers to come from ABOVE, the strip should move DOWN.
    // So we start with the strip shifted UP (showing higher numbers or wrapped) and move it DOWN to 0?
    // Actually simpler: The viewing window is 1 digit high.
    // The strip is [0, 1, 2, ... 9].
    // If we want to show '5', we translate Y to show index 5.
    // `translateY(-50%)` (if 10 items, 5 is 50%).
    // If we start at digest '0' (translateY(0)) and move to '5', the numbers 0,1,2,3,4,5 go by.
    // That looks like they are moving UP (new numbers appear from bottom).
    // To make numbers appear from ABOVE, the strip needs to move DOWN.
    // So we should arrange the strip as [9, 8, ... target ... 0]?
    // Or just animate from a different offset?
    // Let's stick to the natural 0-9 order.
    // We render [0, 1, 2...9].
    // Target is `d`. Position is `-d * 100%`.
    // If we want it to look like it spun, maybe we render a longer strip?
    // e.g. [0-9, 0-9, 0-9].
    // But simple transition is usually enough.

    return (
        <span className="inline-block relative h-[1.1em] overflow-hidden align-bottom" style={{ lineHeight: 1.1 }}>
            <span
                className="flex flex-col transition-transform ease-out"
                style={{
                    transform: isVisible ? `translateY(-${digit * 10}%)` : `translateY(0)`,
                    transitionDuration: '2000ms',
                    transitionDelay: `${index * 100}ms`,
                    height: '1000%' // 10 numbers, so container is 10x height? No.
                    // If the parent is h-[1em], this inner container holds 10 items.
                    // We want each item to be 10% of this inner container.
                    // And we translate this inner container.
                }}
            >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                    <span
                        key={n}
                        className="flex items-center justify-center h-[10%]" // 1/10th of the strip
                        style={{ height: '1.1em' }}
                    >
                        {n}
                    </span>
                ))}
            </span>
        </span>
    );
};

const SlotCounter = ({ value }) => {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const stringValue = String(value);

    return (
        <span ref={elementRef} className="inline-flex overflow-hidden" dir="ltr">
            {stringValue.split('').map((char, index) => (
                <SlotDigit key={index} char={char} index={index} isVisible={isVisible} />
            ))}
        </span>
    );
};

export default SlotCounter;
