import React from 'react';
import Button from '../components/Button';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCountUp } from '../hooks/useCountUp';
import profileImage from '../assets/blfbml;fbmlf.png';
import SlotCounter from '../components/SlotCounter';

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
                        <div className="w-56 h-56 rounded-full bg-bg-secondary border-4 border-brand-cyan/30 flex items-center justify-center relative z-10 mx-auto overflow-hidden shadow-[0_0_30px_rgba(0,243,255,0.3)]">
                            <img src={profileImage} alt="Huzaifa Aldalati" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    <h2 className={`text-4xl md:text-6xl font-bold mb-8 text-white font-display fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
                        من هو <br />
                        <span className="inline-block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-white to-brand-cyan animate-pulse">
                            حذيفة الدالاتي؟
                        </span>
                    </h2>

                    <div className={`text-lg md:text-xl text-gray-300 mb-12 leading-relaxed font-light max-w-2xl mx-auto flex flex-col gap-4 fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '400ms' }}>
                        <p className="md:text-center w-full">
                            كنت بعالم <span className="text-red-500 font-medium">التسويق الرقمي</span> فعليًا من 4 سنين.
                        </p>
                        <p className="md:text-center w-full">
                            تعلّمت كثير وحقّقت أرقام حلوة، بس الطريق ما كان سهل.
                        </p>
                        <p className="md:text-center w-full">
                            جرّبت كل شي، لحد ما لخّصت كل خبرتي بسِستم عملي سهّل الشغل عليّ وعفريقي.
                        </p>
                        <p className="md:text-center w-full mt-4">
                            بس ظل عندي سؤال واحد:
                        </p>
                        <p className="text-2xl md:text-3xl font-bold text-white mt-2 mb-4 bg-brand-violet/10 py-2 px-4 rounded-lg border border-brand-violet/20 inline-block mx-auto transform hover:scale-105 transition-transform duration-300">
                            هل بقدر أطبّق نفس السِستم على نفسي؟
                        </p>
                    </div>

                    <div className={`glass-card p-1 rounded-3xl w-full mb-12 fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '600ms' }}>
                        <div className="bg-bg-primary/60 rounded-[1.3rem] p-8 border border-brand-cyan/20 shadow-[0_0_40px_rgba(0,243,255,0.05)]">
                            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-violet animate-pulse">
                                النتائج كانت مذهلة:
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-gray-300">
                                <StatCard end={10000} label="متابع في 14 يوم" />
                                <StatCard end={4170} label="دخل في 21 يوم" prefix="$" />
                                <StatCard end={32214} label="متابع عبر المنصات" prefix="+" />
                            </div>
                        </div>
                    </div>

                    <div className={`bg-bg-primary/50 p-8 rounded-3xl border border-white/10 mb-10 w-full fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '800ms' }}>
                        <h4 className="text-3xl md:text-5xl font-bold mb-12 text-white drop-shadow-[0_0_25px_rgba(34,211,238,0.5)]">هذا السِستم خلاصة أكثر من</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-brand-cyan/30 hover:bg-white/10 transition-all duration-300 flex flex-col items-center justify-center group">
                                <span className="text-5xl md:text-7xl font-black text-brand-cyan mb-4 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)] text-center group-hover:scale-110 transition-transform duration-300">
                                    <SlotCounter value="5" />
                                </span>
                                <span className="text-2xl font-bold text-brand-cyan mb-1 text-center">سنين</span>
                                <span className="text-gray-300 text-center text-lg">خبرة</span>
                            </div>

                            <div className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-brand-cyan/30 hover:bg-white/10 transition-all duration-300 flex flex-col items-center justify-center group">
                                <span className="text-5xl md:text-7xl font-black text-brand-cyan mb-4 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)] text-center group-hover:scale-110 transition-transform duration-300">
                                    <SlotCounter value="125" />
                                </span>
                                <span className="text-2xl font-bold text-brand-cyan mb-1 text-center">مليون</span>
                                <span className="text-gray-300 text-center text-lg">مشاهدة</span>
                            </div>

                            <div className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-brand-cyan/30 hover:bg-white/10 transition-all duration-300 flex flex-col items-center justify-center group">
                                <span className="flex items-center justify-center text-5xl md:text-7xl font-black text-brand-cyan mb-4 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)] group-hover:scale-110 transition-transform duration-300" dir="ltr">
                                    <span>$</span>
                                    <SlotCounter value="400" />
                                </span>
                                <span className="text-2xl font-bold text-brand-cyan mb-1 text-center">ألف</span>
                                <span className="text-gray-300 text-center text-lg">مبيعات</span>
                            </div>
                        </div>
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
