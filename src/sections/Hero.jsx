import React from 'react';
import Button from '../components/Button';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero = () => {
    const [domRef, isVisible] = useScrollAnimation();

    return (
        <section
            ref={domRef}
            className={`relative min-h-screen flex flex-col items-center justify-center text-center p-8 overflow-hidden`}
        >
            {/* Background Ambience */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-brand-violet/20 rounded-full blur-[100px] animate-pulse-fast"></div>
                <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-brand-cyan/20 rounded-full blur-[100px] animate-pulse-fast delay-700"></div>
            </div>

            <div className="relative z-10 max-w-5xl w-full flex flex-col items-center">

                <div className={`inline-block px-4 py-1 mb-6 rounded-full glass border-brand-cyan/30 text-brand-cyan text-sm font-medium tracking-wider uppercase animate-float fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0ms' }}>
                    الأكثر مبيعاً
                </div>

                <h1 className={`text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-tight font-display fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
                    أبجدية <br />
                    <span className="text-gradient drop-shadow-[0_0_15px_rgba(188,19,254,0.5)]">
                        الانتشار
                    </span>
                </h1>

                <div className={`text-2xl md:text-4xl mb-10 text-white max-w-4xl mx-auto leading-relaxed font-bold fade-up flex flex-col md:flex-row md:flex-wrap md:justify-center md:gap-x-2 items-center gap-y-2 ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '400ms' }}>
                    <span>تعلم الأسرار يلي ساعدتني أوصل لأكثر من</span>
                    <span className="text-brand-cyan animate-glow-pulse">١٢٥ مليون مشاهدة</span>
                    <span>و</span>
                    <span className="text-brand-pink animate-glow-pulse" style={{ animationDelay: '1.3s' }}>٤٠٠ ألف دولار مبيعات</span>
                    <span>في</span>
                    <span className="text-brand-violet animate-glow-pulse" style={{ animationDelay: '2.6s' }}>٤ ساعات فقط</span>
                </div>

                {/* Video Container */}
                <div className={`hidden relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden glass shadow-[0_0_50px_rgba(188,19,254,0.2)] border-brand-violet/30 group animate-float fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '600ms' }}>

                    <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-transparent to-transparent opacity-60"></div>

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center cursor-pointer group-hover:scale-110 transition-transform duration-300">
                            <span className="text-brand-cyan text-4xl ml-1">▶</span>
                        </div>
                    </div>

                    {/* Decorative Corners */}
                    <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-brand-cyan"></div>
                    <div className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-brand-cyan"></div>
                    <div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-brand-cyan"></div>
                    <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-brand-cyan"></div>

                </div>

                <div className={`flex flex-col items-center gap-4 mt-12 fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '800ms' }}>
                    <Button variant="glow" className="px-10 py-5 text-lg md:text-xl w-full md:w-auto">
                        أريد تعلم صناعة المحتوى اليوم
                    </Button>
                    <p className="text-sm text-gray-400/80 max-w-md">
                        احجز مكانك الآن واحصل على مكالمة استشارية مجانية 1:1 مع حذيفة.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
