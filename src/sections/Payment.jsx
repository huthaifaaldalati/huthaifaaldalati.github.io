import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Payment = () => {
    const [domRef, isVisible] = useScrollAnimation();

    return (
        <section
            id="payment-section"
            ref={domRef}
            className={`py-20 px-8 flex flex-col items-center justify-center relative overflow-hidden`}
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
                            $97
                        </span>
                        <span className="text-3xl text-gray-500 line-through decoration-2 decoration-red-500">$147</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-right mb-10 text-gray-300">
                        {[
                            'نظام عملي من الألف إلى الياء',
                            'استراتيجيات خلق الأفكار',
                            'أسرار كتابة الهوك',
                            'كيف تكتب سكريبت',
                            'فن السرد القصصي',
                            'اكسر خوفك من الظهور أمام الكاميرا',
                            'قوالب جاهزة',
                            'مجتمع خاص للطلاب',
                            'محتوى محدث باستمرار',
                            'وصول إلى الأبد'
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-brand-cyan/20 flex items-center justify-center text-brand-cyan text-xs">✓</div>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>

                    <a
                        href="https://whop.com/huthaifaaldalati/digital-presence-code/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-5 text-2xl font-bold rounded-2xl bg-gradient-to-r from-brand-violet via-brand-pink to-brand-violet text-white animate-gradient-xy hover:scale-105 hover:shadow-[0_0_40px_rgba(188,19,254,0.4)] transition-all duration-300 active:scale-95 mb-6 text-center"
                    >
                        اشترك الآن
                    </a>

                    <p className="text-brand-cyan/80 text-sm mb-4">🔥 الأماكن محدودة للدفعة الأولى - السعر سيرتفع لاحقاً!</p>

                    <a
                        href="https://api.whatsapp.com/send?phone=905073538511"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-xs md:text-sm font-bold hover:bg-[#25D366]/20 transition-all duration-300"
                    >
                        في حال كنت تفضل أسلوب دفع مختلف (حوالة إلخ.) اضغط للانتقال إلى واتساب
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Payment;
