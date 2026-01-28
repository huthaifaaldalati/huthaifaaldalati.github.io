import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const RiskReversal = () => {
    const [domRef, isVisible] = useScrollAnimation();

    return (
        <section
            ref={domRef}
            className="py-16 px-8 relative z-10"
        >
            <div className={`max-w-2xl mx-auto text-center fade-up ${isVisible ? 'visible' : ''}`}>
                <div className="glass border border-brand-cyan/20 rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:border-brand-cyan/40 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-violet/5 to-brand-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10 flex flex-col items-center gap-6">
                        <div className="w-20 h-20 rounded-full bg-brand-cyan/10 flex items-center justify-center text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                            🛡️
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-brand-pink font-display">
                            استثمارك آمن تماماً
                        </h3>

                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl">
                            ضمان استرداد كامل المبلغ خلال 14 يوماً في حال لم تجد الفائدة المرجوة.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RiskReversal;
