import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ModuleCard = ({ number, title, lessons, delay, isVisible }) => (
    <div
        className={`glass p-8 rounded-3xl border border-white/5 hover:border-brand-violet/30 transition-all duration-300 hover:-translate-y-2 fade-up ${isVisible ? 'visible' : ''}`}
        style={{ transitionDelay: `${delay}ms` }}
    >
        <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-violet to-brand-cyan flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand-violet/20">
                    {number}
                </div>
                <h3 className="text-xl font-bold text-white font-display">{title}</h3>
            </div>

            <div className="space-y-4 mr-2">
                {lessons.map((lesson, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                        <span className="text-brand-cyan mt-1 text-xs">◀</span>
                        <p className="text-gray-300 text-sm leading-relaxed">{lesson}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const CourseModules = () => {
    const [domRef, isVisible] = useScrollAnimation();

    const modules = [
        {
            title: "حجر الأساس والهوية الرقمية",
            lessons: [
                "الدرس الأول: مدخل إلى عالم صناعة المحتوى: فهم التواجد الرقمي وأهمية البراند الشخصي",
                "الدرس الثاني: من أنا ومن هو جمهوري: تحديد الهوية الرقمية واستهداف الجمهور الصح",
                "الدرس الثالث: تهيئة الحساب: كيف تجهز حسابك لاستقبال الزوار وتحويلهم لمتابعين",
                "الدرس الرابع: فك شفرة الخوارزميات: كيف تعمل المنصات وكيف تستفيد منها"
            ]
        },
        {
            title: "استراتيجية المحتوى وتوليد الأفكار",
            lessons: [
                "الدرس الأول: استراتيجية المحتوى الثلاثية: كيف توازن بين محتوى الانتشار، الثقة، والبيع.",
                "الدرس الثاني: بناء ماكينة أفكار: طرق عملية لتوليد أفكار محتوى مستمرة وغير محدودة"
            ]
        },
        {
            title: "فن الكتابة الإبداعية",
            lessons: [
                "الدرس الأول: مغناطيس المشاهدة: أنواع الهوك وكيف تجذب الانتباه من الثانية الأولى",
                "الدرس الثاني: هيكلية السكريبت: الطريقة الصحيحة لكتابة نص فيديو احترافي",
                "الدرس الثالث: قوة السرد القصصي (Storytelling): كيف تحول معلومتك إلى قصة مؤثرة"
            ]
        },
        {
            title: "الإنتاج والتحليل الفني",
            lessons: [
                "الدرس الأول: كيف تكسر خوف الكاميرا، وأسلوب التصوير والإضاءة",
                "الدرس الثاني: أسرار المونتاج: كيف تخرج فيديوهاتك بشكل سريع وجذاب",
                "الدرس الثالث: الترايل ريل: كيف تستغل أقوى ميزة في الإنستغرام",
                "الدرس الرابع: مراجعة الأرقام وكيف تستهلك المحتوى بشكل ذكي"
            ]
        },
        {
            title: "من مشاهدات إلى دولارات",
            lessons: [
                "الدرس الأول: ما هو القمع التسويقي: كيف ترسم طريق العميل حتى الشراء",
                "الدرس الثاني: بناء العرض الذي لا يقاوم: كيف تغلف خبرتك بعرض لا يُرفض",
                "الدرس الثالث: البيع بالأتمتة: كيف تبيع حتى وأنت نائم"
            ]
        }
    ];

    return (
        <section
            ref={domRef}
            className="py-20 px-8 relative z-10"
        >
            <div className="max-w-7xl mx-auto">
                <div className={`text-center mb-20 fade-up ${isVisible ? 'visible' : ''}`}>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 font-display">
                        ماذا ستتعلم في <span className="text-gradient">البرنامج؟</span>
                    </h2>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-8">
                        خارطة طريق متكاملة تنقلك من الصفر إلى الاحتراف
                    </p>
                    <p className="text-brand-cyan font-bold text-3xl md:text-4xl drop-shadow-[0_0_15px_rgba(0,243,255,0.3)]">
                        محتوى الدورة
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {modules.map((module, index) => (
                        <ModuleCard
                            key={index}
                            number={index + 1}
                            title={module.title}
                            lessons={module.lessons}
                            delay={index * 100}
                            isVisible={isVisible}
                        />
                    ))}

                    {/* Tools Section */}
                    <div
                        className={`glass p-8 rounded-3xl border border-brand-cyan/20 bg-brand-cyan/5 hover:bg-brand-cyan/10 transition-all duration-300 fade-up ${isVisible ? 'visible' : ''}`}
                        style={{ transitionDelay: `${modules.length * 100}ms` }}
                    >
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gray-800 border border-brand-cyan/30 flex items-center justify-center text-2xl">
                                    🛠️
                                </div>
                                <h3 className="text-xl font-bold text-white font-display">قسم الأدوات (Bonus)</h3>
                            </div>
                            <div className="space-y-3 mr-2">
                                {[
                                    "بونساي",
                                    "تطبيقات المونتاج",
                                    "لقطات جاهزة",
                                    "كاروسيل بالذكاء الاصطناعي"
                                ].map((tool, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></div>
                                        <p className="text-gray-300 text-sm">{tool}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CourseModules;
