import React, { useEffect, useRef } from 'react';

const InteractiveBackground = () => {
    const blobRef = useRef(null);
    const pos = useRef({ x: 0, y: 0 });
    const target = useRef({ x: 0, y: 0 });

    useEffect(() => {
        // Initialize position
        pos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        target.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

        const handleMouseMove = (e) => {
            target.current = { x: e.clientX, y: e.clientY };
        };

        const canvas = window;

        let animationFrameId;

        const animate = () => {
            // Smooth lerp (linear interpolation)
            const ease = 0.1; // 10% movement per frame for smoothness
            pos.current.x += (target.current.x - pos.current.x) * ease;
            pos.current.y += (target.current.y - pos.current.y) * ease;

            if (blobRef.current) {
                // Use translate3d for hardware acceleration
                // Center the 600px blob by subtracting 300px
                blobRef.current.style.transform = `translate3d(${pos.current.x - 300}px, ${pos.current.y - 300}px, 0)`;
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('pointermove', handleMouseMove);
        animate();

        return () => {
            window.removeEventListener('pointermove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            <div
                ref={blobRef}
                className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-20 will-change-transform blur-2xl"
                style={{
                    background: 'radial-gradient(circle, rgba(188,19,254,0.6) 0%, rgba(0,243,255,0.3) 40%, transparent 70%)',
                }}
            ></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        </div>
    );
};

export default InteractiveBackground;
