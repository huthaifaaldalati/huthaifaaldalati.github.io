import React from 'react';
import Button from '../components/Button';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCountUp } from '../hooks/useCountUp';
import profileImage from '../assets/IMG_0462 2.jpg';

const StatCard = ({ end, label, prefix = "", suffix = "" }) => {
    const [count, ref] = useCountUp(end, 2000);

    // Formatting numbers with dots
    const formattedCount = Math.floor(count).toLocaleString('de-DE');

    return (
        <div ref={ref} className="bg-white/5 p-6 rounded-2xl hover:scale-105 transition-transform duration-300 border border-white/5 hover:border-brand-pink/30 flex flex-col items-center justify-center">
            <span className="block text-brand-pink font-bold text-3xl mb-2" dir="ltr">
                {prefix}{formattedCount}{suffix}
            </span>
            <span className="text-lg">{label}</span>
        </div>
    );
};

const Bio = () => {
    const [domRef, isVisible] = useScrollAnimation();

    return (
        <section
            ref={domRef}
            className={`relative py-20 px-8`}
        >
            <div className="max-w-4xl mx-auto glass rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center">

                <div className="relative z-10 flex flex-col items-center">

                    <div className={`mb-12 relative fade-up ${isVisible ? 'visible' : ''}`}>
                        <div className="absolute inset-0 bg-brand-cyan/20 blur-3xl rounded-full"></div>
                        <div className="w-40 h-40 rounded-full bg-bg-secondary border-4 border-brand-cyan/30 flex items-center justify-center relative z-10 mx-auto overflow-hidden">
                            <img src={profileImage} alt="Huzaifa Aldalati" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    <h2 className={`text-3xl md:text-5xl font-bold mb-6 text-white font-display fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
                        من هو <span className="text-brand-cyan">حذيفة الدالاتي؟</span>
                    </h2>

                    <p className={`text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-light max-w-2xl mx-auto fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '400ms' }}>
                        كنت بعالم <span className="text-red-500">التسويق</span> الرقمي فعليًا من 4 سنين.
                        <br />
                        تعلّمت كثير وحقّقت أرقام حلوة، بس الطريق ما كان سهل.
                        <br />
                        جرّبت الكل، لحد ما لخّصت كل شي ضمن <strong>سِستم عملي</strong> سهّل الشغل عليّ وعلى فريقي.
                        بس ظل عندي سؤال واحد: <span className="text-brand-violet">هل بقدر أطبّق نفس السِستم على نفسي؟</span>
                    </p>

                    <div className={`glass-card p-8 rounded-3xl w-full mb-10 fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '600ms' }}>
                        <h3 className="text-2xl font-bold mb-8 text-brand-cyan">النتائج كانت مذهلة:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-gray-300">
                            <StatCard end={10000} label="متابع في 14 يوم" />
                            <StatCard end={4170} label="أول مبيعة في 21 يوم" prefix="$" />
                            <StatCard end={32214} label="متابع عبر المنصات" prefix="+" />
                        </div>
                    </div>

                    <div className={`bg-bg-primary/50 p-6 rounded-2xl border border-white/10 mb-8 max-w-2xl fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '800ms' }}>
                        <p className="text-lg">
                            هذا السِستم خلاصة أكثر من <span className="text-brand-cyan font-bold">125 مليون مشاهدة</span>،
                            ومبيعات تفوق <span className="text-brand-cyan font-bold">400,000 دولار</span>.
                        </p>
                    </div>

                    <div className={`fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '1000ms' }}>
                        <Button variant="primary">
                            ابدأ قصتك الآن
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Bio;
