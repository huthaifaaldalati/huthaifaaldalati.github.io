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
        { question: "هل الدورة مناسبة للمبتدئين الذين ليس لديهم أي متابعين؟", answer: "مناسبة ١٠٠٪، طبقت هي الخطوات على حسابي الشخصي يلي كان فيه ٣٠٠ متابع فقط. الوحدة الأولى مصممة خصيصاً لبناء \"حجر الأساس\" قبل أن تبدأ حتى بنشر أول فيديو، والمعلومات مبسّطة لتكون مفهومة مهما كان مستوى علمك بصناعة المحتوى." },
        { question: "هل أحتاج لمعدات تصوير غالية أو كاميرا احترافية؟", answer: "لا أبداً، تلفون حديث كافي جداً. في الوحدة الرابعة، سنتعلم كيف نخرج فيديوهات ممتازة باستخدام هاتفك فقط، مع أسرار الإضاءة البسيطة والمونتاج السريع، مع ترشيح لمعدات بأسعار مناسبة لتساعدك تبدأ بأقل التكاليف." },
        { question: "كيف سأحصل على المكالمة الاستشارية المجانية؟", answer: "بمجرد اشتراكك، سيصلك رابط لجدولة موعد استشارة (1:1)، لنناقش استراتيجية حسابك الخاصة ونضع خطة عمل واضحة، وتسألني أي سؤال بيخطر على بالك." },
        { question: "أنا خجول أمام الكاميرا، هل هذه الدورة لي؟", answer: "هذا هو عائق أغلب المبدعين. خصصت جزء كامل عن موضوع الخجل ولكسر خوف الكاميرا بأساليب عملية، لتظهر بثقة وأريحية على الكاميرا." },
        { question: "ماذا لو اشتركت ولم أجد فائدة؟", answer: "أنا واثق بالمعلومات المقدمة، في حال حضرت الدورة كاملة وطبقت الموجود فيها وما لقيت فائدة حقيقة، بإمكانك استرداد المبلغ كاملاً." },
        { question: "هل المحتوى مسجل أم مباشر؟", answer: "المحتوى مسجل لتقوم بمتابعته في الوقت الذي يناسبك، مع ميزة المكالمة الاستشارية المباشرة لضمان حصولك على توجيه شخصي مني أو من أحد أعضاء فريقي." }
    ];

    return (
        <section
            ref={domRef}
            className={`py-20 px-4 relative`}
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
                    <h3 className="text-2xl font-bold mb-4 text-white"> عندك استفسار؟</h3>
                    <a
                        href="https://api.whatsapp.com/send?phone=905073538511"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-3 rounded-full bg-[#25D366]/10 border border-[#25D366] text-[#25D366] font-bold hover:bg-[#25D366] hover:text-white transition-all duration-300"
                    >
                        تواصل معنا عبر واتساب
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
