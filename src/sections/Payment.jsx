import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Payment = () => {
    const [domRef, isVisible] = useScrollAnimation();

    return (
        <section
            id="payment-section"
            ref={domRef}
            className={`py-32 px-8 flex flex-col items-center justify-center relative overflow-hidden`}
        >
            {/* Background Gradients */}


            <div className="relative z-10 max-w-2xl w-full">
                <div className={`glass border border-white/10 rounded-[2.5rem] p-8 md:p-12 text-center relative overflow-hidden group hover:border-brand-cyan/30 transition-colors duration-500 fade-up ${isVisible ? 'visible' : ''}`}>

                    <div className="inline-block px-6 py-2 mb-6 rounded-full bg-brand-pink/20 border border-brand-pink text-brand-pink text-sm font-bold tracking-widest uppercase animate-pulse">
                        خصم 67% لفترة محدودة
                    </div>

                    <h2 className="text-4xl font-bold mb-4 font-display">أبجدية الانتشار</h2>
                    <p className="text-gray-400 mb-8">احصل على كل ما تحتاجه لبناء براند قوي وصناعة محتوى احترافي</p>

                    <div className="flex flex-col items-center justify-center mb-10 gap-2">
                        <span className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-cyan to-brand-violet font-display">
                            $147
                        </span>
                        <span className="text-3xl text-gray-500 line-through decoration-2 decoration-red-500">$447</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-right mb-10 text-gray-300">
                        {[
                            'تدريب لايف شامل لمدة شهر',
                            'متابعة إضافية لمدة 30 يوم',
                            'نظام عملي من الألف إلى الياء',
                            'استراتيجيات النمو الأورغانيك',
                            'أدوات وتقنيات صناعة المحتوى',
                            'نماذج وقوالب جاهزة',
                            'مجتمع خاص للطلاب',
                            'تحديثات مجانية للمحتوى'
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-brand-cyan/20 flex items-center justify-center text-brand-cyan text-xs">✓</div>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>

                    <button
                        className="w-full py-5 text-2xl font-bold rounded-2xl bg-gradient-to-r from-brand-violet via-brand-pink to-brand-violet text-white animate-gradient-xy hover:scale-105 hover:shadow-[0_0_40px_rgba(188,19,254,0.4)] transition-all duration-300 active:scale-95 mb-6"
                    >
                        اشترك الآن
                    </button>

                    <p className="text-brand-cyan/80 text-sm mb-8">🔥 الأماكن محدودة للدفعة الأولى - السعر سيرتفع لاحقاً!</p>
                </div>

                {/* Guarantee */}
                <div className={`glass border border-white/10 rounded-3xl p-6 mt-6 flex flex-col items-center text-center relative overflow-hidden fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '400ms' }}>
                    <span className="text-3xl mb-2">✅</span>
                    <h4 className="text-lg font-bold text-white mb-2">ضمان استرداد المال لمدة 30 يوم</h4>
                    <p className="text-sm text-gray-400 max-w-md">
                        إذا طبّقت كل ما في البرنامج ولم تحقق أي نتائج خلال 30 يوم، سأرجع لك كامل المبلغ بدون أي أسئلة.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Payment;
