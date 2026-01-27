const ScrollCTA = () => {
    const scrollToPayment = () => {
        const paymentSection = document.getElementById('payment-section');
        if (paymentSection) {
            paymentSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fixed bottom-6 left-6 z-[100] transition-all duration-300 transform translate-y-0 opacity-100">
            <button
                onClick={scrollToPayment}
                className="group relative px-4 py-3 md:px-6 md:py-4 bg-gradient-to-r from-brand-violet via-brand-pink to-brand-violet hover:from-brand-cyan hover:via-blue-500 hover:to-brand-cyan background-animate bg-[length:200%_auto] rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(188,19,254,0.4)] hover:shadow-[0_0_50px_rgba(0,243,255,0.6)] hover:scale-105 transition-all duration-300"
            >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-[-100%] transition-transform duration-700 blur-md"></div>

                <div className="relative flex items-center gap-2 md:gap-3">
                    <span className="text-white font-black text-sm md:text-xl font-display drop-shadow-md">ابدأ الآن</span>
                    <span className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-white text-brand-violet flex items-center justify-center font-bold text-lg md:text-2xl shadow-lg relative z-10">
                        🚀
                    </span>
                </div>
            </button>
        </div>
    );
};

export default ScrollCTA;
