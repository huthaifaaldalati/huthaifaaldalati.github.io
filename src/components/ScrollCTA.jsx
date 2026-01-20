import React, { useState, useEffect, useRef } from 'react';

const ScrollCTA = () => {
    const [isVisible, setIsVisible] = useState(false);
    const isHoveredCallback = useRef(false);
    const timeoutRef = useRef(null);

    useEffect(() => {
        let lastScrollTime = 0;

        const handleScroll = () => {
            const now = Date.now();
            if (now - lastScrollTime < 100) return; // Throttle to 100ms
            lastScrollTime = now;

            setIsVisible(true);

            // Clear existing timeout
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            // Set new timeout to hide button after scrolling stops
            timeoutRef.current = setTimeout(() => {
                if (!isHoveredCallback.current) {
                    setIsVisible(false);
                }
            }, 1500);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const handleMouseEnter = () => {
        isHoveredCallback.current = true;
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setIsVisible(true);
    };

    const handleMouseLeave = () => {
        isHoveredCallback.current = false;
        // restart hide timer
        timeoutRef.current = setTimeout(() => {
            setIsVisible(false);
        }, 1500);
    };

    const scrollToPayment = () => {
        const paymentSection = document.getElementById('payment-section');
        if (paymentSection) {
            paymentSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`fixed bottom-8 left-8 z-50 transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95 pointer-events-none'
                }`}
        >
            <button
                onClick={scrollToPayment}
                className="group relative px-6 py-4 bg-gradient-to-r from-brand-violet via-brand-pink to-brand-violet hover:from-brand-cyan hover:via-blue-500 hover:to-brand-cyan background-animate bg-[length:200%_auto] rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(188,19,254,0.4)] hover:shadow-[0_0_50px_rgba(0,243,255,0.6)] hover:scale-110 transition-all duration-300"
            >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-[-100%] transition-transform duration-700 blur-md"></div>

                <div className="relative flex items-center gap-3">
                    <span className="text-white font-black text-xl font-display drop-shadow-md group-hover:-translate-x-12 transition-transform duration-500">ابدأ الآن</span>
                    <span className="w-10 h-10 rounded-xl bg-white text-brand-violet flex items-center justify-center font-bold text-2xl group-hover:translate-x-32 group-hover:rotate-45 transition-all duration-500 shadow-lg relative z-10">
                        🚀
                    </span>
                </div>
            </button>
        </div>
    );
};

export default ScrollCTA;
