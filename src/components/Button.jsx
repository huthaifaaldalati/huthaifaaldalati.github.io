import React from 'react';

const Button = ({ children, onClick, className = '', variant = 'primary' }) => {
    const handleClick = (e) => {
        if (onClick) {
            onClick(e);
            return;
        }
        const paymentSection = document.getElementById('payment-section');
        if (paymentSection) {
            paymentSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const baseStyles = "relative px-8 py-3 font-bold text-lg rounded-xl overflow-hidden transition-all duration-300 group cursor-pointer";

    const variants = {
        primary: "bg-white text-black hover:scale-105 shadow-[0_0_20px_bg-white/50] hover:shadow-[0_0_30px_#00f3ff]",
        neon: "text-white border border-brand-cyan hover:bg-brand-cyan/10 hover:shadow-[0_0_20px_#00f3ff] hover:text-brand-cyan",
        glow: "bg-brand-violet text-white shadow-[0_0_20px_#bc13fe] hover:bg-brand-pink hover:shadow-[0_0_30px_#ff0099] transition-all duration-300"
    };

    return (
        <button
            onClick={handleClick}
            className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
        >
            <span className="relative z-10 flex items-center justify-center gap-2">
                {children}
            </span>
            {/* Hover glow effect overlay */}
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none"></div>


        </button>
    );
};

export default Button;
