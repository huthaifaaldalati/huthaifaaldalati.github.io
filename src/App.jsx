import React from 'react';
import Hero from './sections/Hero';
import RiskReversal from './sections/RiskReversal';
import CourseModules from './sections/CourseModules';
import Bio from './sections/Bio';
import FAQ from './sections/FAQ';
import Payment from './sections/Payment';
import InteractiveBackground from './components/InteractiveBackground';
import Particles from './components/Particles';
import ScrollCTA from './components/ScrollCTA';
import WhatsAppCTA from './components/WhatsAppCTA';
import Button from './components/Button';


function App() {
  return (
    <div className="App font-sans relative min-h-screen text-white" dir="rtl">


      {/* Background Layers */}
      <div className="fixed inset-0 z-0 bg-bg-primary"></div> {/* Solid Base */}
      <InteractiveBackground /> {/* Interaction Blob */}
      <Particles /> {/* Floating Particles */}
      <ScrollCTA />

      {/* Content Layer (z-10 to stay above background) */}
      <div className="relative z-10 flex flex-col gap-0 backdrop-blur-[0px]">
        {/* Gap-0 ensures no space between sections for blending */}
        <Hero />

        {/* Selling Section */}
        <Payment />

        {/* Risk Reversal */}
        <RiskReversal />

        {/* Course Modules */}
        <CourseModules />

        {/* About Me */}
        <Bio />

        <FAQ />



        {/* Floating WhatsApp Button */}
        <WhatsAppCTA />

        <footer className="py-12 text-center relative z-20 border-t border-white/5 bg-[#05020a]">
          <div className="flex flex-col items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-8 mb-4">
              <a href="https://www.instagram.com/huthaifaaldalati" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-pink transition-colors transform hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@huthaifaaldalati" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-cyan transition-colors transform hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                </svg>
              </a>
              <a href="mailto:huthaifaaldalati@gmail.com" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} جميع الحقوق محفوظة - Aldalati LTD.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
