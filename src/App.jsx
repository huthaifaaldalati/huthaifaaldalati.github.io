import React from 'react';
import Hero from './sections/Hero';
import TextContent from './sections/TextContent';
import Bio from './sections/Bio';
import CaseStudies from './sections/CaseStudies';
import FAQ from './sections/FAQ';
import Payment from './sections/Payment';
import InteractiveBackground from './components/InteractiveBackground';
import Particles from './components/Particles';
import ScrollCTA from './components/ScrollCTA';


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

        {/* Gradient Separator Example */}


        <Payment />



        <TextContent />
        <Bio />
        <CaseStudies />
        <FAQ />

        <footer className="py-8 text-center text-sm text-gray-500 bg-transparent backdrop-blur-none border-t-0 relative z-20">
          © {new Date().getFullYear()} جميع الحقوق محفوظة - Aldalati LTD.
        </footer>
      </div>
    </div>
  );
}

export default App;
