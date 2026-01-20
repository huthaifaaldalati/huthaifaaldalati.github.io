import React from 'react';
import Button from '../components/Button';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const TextContent = () => {
    const [domRef, isVisible] = useScrollAnimation();

    return (
        <section
            ref={domRef}
            className={`relative py-32 px-8`}
        >
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-16">

                <div className="w-full">
                    <h2 className={`text-4xl md:text-5xl font-bold mb-8 font-display fade-up ${isVisible ? 'visible' : ''}`}>
                        هذا البرنامج <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-violet">موجه لك إذا كنت:</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className={`glass-card p-6 rounded-2xl transform hover:-translate-y-2 transition-transform duration-300 fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
                            <div className="w-16 h-16 mx-auto bg-brand-cyan/20 rounded-full flex items-center justify-center mb-4 text-3xl">💡</div>
                            <h3 className="text-xl font-bold text-brand-cyan mb-2">عندك خبرة واسعة بمجالك</h3>
                            <p className="text-gray-400">وتبحث عن الطريقة المثلى لمشاركة هذه الخبرة مع العالم وبناء سمعة قوية.</p>
                        </div>

                        <div className={`glass-card p-6 rounded-2xl transform hover:-translate-y-2 transition-transform duration-300 fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '400ms' }}>
                            <div className="w-16 h-16 mx-auto bg-brand-pink/20 rounded-full flex items-center justify-center mb-4 text-3xl">🔥</div>
                            <h3 className="text-xl font-bold text-brand-pink mb-2">شغوف بصناعة المحتوى</h3>
                            <p className="text-gray-400">ولكنك تحتاج إلى نظام واضح وخطوات عملية للتحول من هاوٍ إلى محترف.</p>
                        </div>

                        <div className={`glass-card p-6 rounded-2xl transform hover:-translate-y-2 transition-transform duration-300 fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '600ms' }}>
                            <div className="w-16 h-16 mx-auto bg-brand-violet/20 rounded-full flex items-center justify-center mb-4 text-3xl">💰</div>
                            <h3 className="text-xl font-bold text-brand-violet mb-2">حابب تبني دخل أونلاين</h3>
                            <p className="text-gray-400">وتحول متابعيك إلى عملاء حقيقيين يدفعون مقابل خدماتك.</p>
                        </div>
                    </div>

                    <div className={`mt-12 fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '800ms' }}>
                        <Button variant="neon">
                            استغل الفرصة الآن
                        </Button>
                    </div>
                </div>

            </div>

            {/* Imagination Section */}
            <div className="max-w-5xl mx-auto mt-32 text-center">
                <h3 className={`text-3xl md:text-5xl font-bold mb-12 fade-up ${isVisible ? 'visible' : ''}`}>تخيل معي:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        "تصحى تلاقي ناس عم تطلب خدماتك بدل ما تركض وراهم",
                        "توصلك دعوات لفرص ولقاءات ما كنت تحلم فيها",
                        "تصير معروف وإلك اسم لامع بمجالك ومصدر ثقة"
                    ].map((text, i) => (
                        <div key={i} className={`glass p-8 rounded-3xl flex flex-col items-center hover:bg-white/10 transition-colors fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${200 * (i + 1)}ms` }}>
                            <div className="w-12 h-12 rounded-full bg-brand-cyan/20 flex items-center justify-center mb-4 text-brand-cyan">✓</div>
                            <p className="text-lg leading-relaxed">{text}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default TextContent;
