import React, { useState } from 'react';
import Button from '../components/Button';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`group border border-white/5 rounded-2xl overflow-hidden mb-4 transition-all duration-300 ${isOpen ? 'bg-white/5 border-brand-violet/30' : 'bg-transparent hover:bg-white/5'}`}>
            <button
                className="w-full py-6 px-8 text-right flex justify-between items-center focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`text-xl font-medium transition-colors duration-300 ${isOpen ? 'text-brand-cyan' : 'text-white'}`}>
                    {question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border border-white/20 transition-all duration-300 ${isOpen ? 'rotate-180 bg-brand-violet border-transparent' : 'group-hover:border-brand-cyan'}`}>
                    <span className="text-xl leading-none mb-1 text-white">+</span>
                </div>
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="px-8 pb-8 text-gray-300 leading-relaxed text-right">
                    {answer}
                </div>
            </div>
        </div>
    );
};

const FAQ = () => {
    const [domRef, isVisible] = useScrollAnimation();

    const faqs = [
        { question: "هل الدورة مناسبة للمبتدئين؟", answer: "نعم، البرنامج مصمم ليأخذ بيدك من الصفر حتى الاحتراف، بغض النظر عن مستواك الحالي." },
        { question: "كم من الوقت أحتاج لإنهاء الدورة؟", answer: "البرنامج مصمم لمدة 30 يوم، مع جلسات لايف ومتابعة لتضمن تطبيقك لكل خطوة." },
        { question: "ما الفرق بين الباقة العادية وباقة 1:1؟", answer: "نقدم حالياً باقة شاملة مع متابعة مكثفة لضمان أفضل النتائج للجميع في هذه الدفعة." },
        { question: "هل هناك ضمان استرداد الأموال؟", answer: "نعم، نقدم ضمان استرداد كامل للمبلغ لمدة 30 يوم في حال طبقت ولم تجد نتائج." },
        { question: "هل سأحصل على شهادة؟", answer: "الهدف الأكبر هو النتائج العملية والدخل، لكن نعم ستحصل على شهادة إتمام للبرنامج." },
        { question: "هل المحتوى محدث؟", answer: "بالتأكيد، نحن نغطي أحدث استراتيجيات 2024-2025 في عالم صناعة المحتوى." }
    ];

    return (
        <section
            ref={domRef}
            className={`py-32 px-8 relative`}
        >
            <div className="max-w-4xl mx-auto">
                <h2 className={`text-3xl md:text-5xl font-bold mb-4 text-center text-white fade-up ${isVisible ? 'visible' : ''}`}>
                    الأسئلة الشائعة
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-brand-cyan to-transparent mx-auto mb-16"></div>

                <div className="mb-16">
                    {faqs.map((faq, index) => (
                        <div key={index} className={`fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${100 * (index + 1)}ms` }}>
                            <FAQItem {...faq} />
                        </div>
                    ))}
                </div>

                <div className={`text-center glass p-8 rounded-3xl border border-white/5 inline-block w-full fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '800ms' }}>
                    <h3 className="text-2xl font-bold mb-4 text-white">لسا عندك أسئلة؟</h3>
                    <p className="text-gray-400 mb-6">احجز مكالمة استشارية مجانية لمناقشة أهدافك.</p>
                    <Button variant="neon">
                        احجز استشارة مجانية
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
