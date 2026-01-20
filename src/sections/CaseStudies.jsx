import React from 'react';
import Button from '../components/Button';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const CaseStudyCard = ({ title, description, index, isVisible }) => (
    <div
        className={`group relative bg-[#0f0518] rounded-3xl overflow-hidden border border-white/5 hover:border-brand-violet/50 transition-all duration-700 hover:-translate-y-4 ${index % 2 === 0 ? 'slide-in-right' : 'slide-in-left'} ${isVisible ? 'visible' : ''}`}
        style={{ transitionDelay: `${index * 200}ms` }}
    >
        <div className="h-64 bg-gray-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0518] to-transparent z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/20 to-brand-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
            <div className="flex items-center justify-center h-full relative z-20">
                <span className="text-6xl grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110">
                    📊
                </span>
            </div>
        </div>

        <div className="p-8 relative z-20 text-right">
            <div className="w-12 h-1 bg-gradient-to-l from-brand-violet to-brand-cyan mb-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></div>
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-l group-hover:from-white group-hover:to-brand-cyan transition-colors duration-300">
                {title}
            </h3>
            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {description}
            </p>
        </div>
    </div>
);

const CaseStudies = () => {
    const [domRef, isVisible] = useScrollAnimation();

    const studies = [
        { title: "العميل الأول", description: "شرح تفصيلي عن قصة النجاح الأولى والنتائج التي حققها." },
        { title: "العميل الثاني", description: "رحلة التحول التي مر بها العميل والإنجازات التي حققها." },
        { title: "العميل الثالث", description: "كيف تحولت حياة العميل من خلال تطبيق استراتيجيات المحتوى." }
    ];

    return (
        <section
            ref={domRef}
            className="py-32 px-8 relative z-10"
        >
            <div className="max-w-7xl mx-auto">
                <div className={`text-center mb-20 fade-up ${isVisible ? 'visible' : ''}`}>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 font-display">
                        قصص نجاح <span className="text-gradient">عملائي</span>
                    </h2>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                        نتائج حقيقية لأشخاص طبقوا السِستم وغيروا حياتهم.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 overflow-hidden p-4">
                    {studies.map((study, index) => (
                        <CaseStudyCard key={index} {...study} index={index} isVisible={isVisible} />
                    ))}
                </div>

                <div className={`text-center fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '600ms' }}>
                    <Button variant="glow" className="px-10 py-4">
                        اصنع قصة نجاحك
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
