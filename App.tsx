import React, { useState } from 'react';
import { Copy, ScrollText, AlertTriangle, HeartHandshake } from 'lucide-react';
import { SERVICES, PROCESS_STEPS, NOTICES, WECHAT_ID } from './constants';
import { ServiceCard } from './components/ServiceCard';
import { Divider, OrnateCorner, StarSparkle, MysticalEye, MoonPhase } from './components/Decorations';

export default function App() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(WECHAT_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    // Increased padding from p-2 to p-4 on mobile to ensure symmetrical dark green borders
    <div className="min-h-screen w-full bg-[#1C2E24] flex items-center justify-center p-4 sm:p-6 lg:p-10 font-sans">
      
      {/* The "Paper" Container */}
      <main className="relative w-full max-w-[800px] bg-parchment bg-grain shadow-deep rounded-sm overflow-hidden flex flex-col">
        
        {/* --- Ornamental Border Frame --- */}
        <div className="absolute inset-0 pointer-events-none z-20">
          <div className="absolute inset-2 border-2 border-forest-dark/10"></div>
          <div className="absolute inset-3 border border-antique-gold/40"></div>
          <OrnateCorner position="tl" />
          <OrnateCorner position="tr" />
          <OrnateCorner position="bl" />
          <OrnateCorner position="br" />
        </div>

        {/* --- Content Padding Wrapper --- */}
        <div className="relative z-10 p-6 sm:p-12 lg:p-16 flex flex-col items-center">
          
          {/* 1. Header Area */}
          <header className="text-center w-full mb-10 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 opacity-20 text-antique-gold">
               <MysticalEye className="w-24 h-16" />
            </div>
            
            <div className="flex justify-center items-center gap-3 mb-4 text-antique-gold/80">
              <StarSparkle className="w-4 h-4 text-terracotta" delay="0.5s" />
              <MoonPhase className="scale-75" />
              <StarSparkle className="w-4 h-4 text-terracotta" delay="1s" />
            </div>

            {/* Fixed H1: Updated Typography adjustments */}
            <h1 className="font-serif text-forest-dark leading-[1.2] mb-4 drop-shadow-sm font-bold">
              {/* Changed to Uppercase, removed italic, and reduced weight to fix overlap issues */}
              <span className="block text-xl sm:text-3xl mb-1 text-moss-green tracking-widest font-decorative font-bold">THE MYSTIC</span>
              {/* Increased mobile font size to text-3xl as requested */}
              <span className="whitespace-nowrap text-3xl sm:text-5xl lg:text-6xl">
                直觉引导 <span className="text-terracotta mx-1 font-decorative font-normal">&</span> 深度疗愈
              </span>
            </h1>

            {/* Decreased font size for the quote */}
            <p className="font-serif text-base sm:text-lg text-ink-black/80 italic max-w-lg mx-auto leading-relaxed border-t border-b border-antique-gold/30 py-3 mt-4 font-bold">
              "你是自己命运的编剧，而我是为你读剧本的人"
            </p>
          </header>

          {/* 2. Hero Visual (Arch Shape) */}
          {/* Reduced bottom margin from mb-12 to mb-6 to tighten spacing */}
          {/* Strictly set aspect ratio to aspect-square (1:1) as requested */}
          <div className="relative w-full max-w-md aspect-square mb-6 group">
            {/* Outline Border */}
            <div className="absolute inset-0 border-[6px] border-double border-antique-gold/30 rounded-t-full rounded-b-lg transform translate-x-2 translate-y-2"></div>
            
            {/* Main Visual Container */}
            <div className="relative w-full h-full rounded-t-full rounded-b-lg overflow-hidden border border-forest-dark/20 shadow-md bg-[#E8E1D1]">
              
              <img 
                src="https://i.pinimg.com/736x/22/43/d9/2243d9ecfe12029593b8da64c70ad53c.jpg" 
                alt="Vintage Mystic Collage" 
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-[2000ms] sepia-[.2]"
              />
              
              {/* Overlay Text */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-forest-dark via-forest-dark/60 to-transparent pt-16 pb-4 px-4 text-center z-10">
                 <p className="text-mystic-cream font-decorative tracking-widest text-sm uppercase opacity-90 font-bold">Unveil the Truth</p>
              </div>
            </div>

            <StarSparkle className="absolute -top-4 -right-2 text-antique-gold w-8 h-8 opacity-80" />
            <StarSparkle className="absolute bottom-8 -left-4 text-terracotta w-6 h-6 opacity-60" delay="2s" />
          </div>

          <Divider />

          {/* 3. Services Grid */}
          <section className="w-full mb-8">
            {/* Reduced bottom margin from mb-10 to mb-6 to tighten spacing */}
            <div className="flex items-center justify-center gap-3 mb-6">
               <span className="h-[1px] w-8 bg-forest-dark/40"></span>
               <h2 className="font-serif text-2xl sm:text-3xl text-forest-dark tracking-wide font-bold">占卜套餐</h2>
               <span className="h-[1px] w-8 bg-forest-dark/40"></span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {SERVICES.map((service, index) => (
                <ServiceCard key={index} index={index} service={service} />
              ))}
            </div>
          </section>

          {/* 4. Process (Scroll Style) */}
          <section className="w-full mb-12 bg-mystic-cream/50 border border-antique-gold/20 p-6 sm:p-8 rounded-sm relative overflow-hidden">
             <div className="absolute -right-10 -bottom-10 opacity-5 text-forest-dark pointer-events-none">
               <ScrollText size={200} strokeWidth={0.5} />
             </div>

             <h2 className="font-serif text-2xl text-center text-forest-dark mb-8 flex items-center justify-center gap-2 font-bold">
               <span className="text-terracotta text-lg font-normal">✦</span> 问卜流程
             </h2>

             <div className="relative space-y-8">
               <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[1px] bg-moss-green/30 -translate-x-1/2 hidden sm:block"></div>
               
               {PROCESS_STEPS.map((step, idx) => (
                 <div key={step.id} className={`relative flex flex-col sm:flex-row gap-4 ${idx % 2 === 0 ? 'sm:flex-row-reverse' : ''} items-center sm:items-start`}>
                    
                    <div className="absolute left-0 sm:left-1/2 w-8 h-8 rounded-full bg-forest-dark text-antique-gold border border-antique-gold flex items-center justify-center font-serif font-bold z-10 sm:-translate-x-1/2 shadow-sm">
                      {step.id}
                    </div>

                    <div className="pl-12 sm:pl-0 sm:w-1/2 sm:px-8 text-left sm:text-center w-full">
                       <h3 className="font-bold font-serif text-lg text-forest-dark mb-1">{step.title}</h3>
                       <p className="text-sm font-sans text-ink-black/90 leading-relaxed font-medium">{step.description}</p>
                    </div>
                 </div>
               ))}
             </div>
          </section>

          {/* 5. Notices (Warning Label Style) */}
          <section className="w-full bg-forest-dark text-mystic-cream p-6 sm:p-8 rounded-sm relative mb-8 shadow-inner">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-terracotta via-antique-gold to-terracotta"></div>
             
             <div className="flex flex-col items-center mb-6">
               <AlertTriangle className="text-antique-gold mb-2 w-6 h-6" strokeWidth={1.5} />
               <h3 className="font-serif text-xl tracking-widest text-antique-gold font-bold">注意事项</h3>
             </div>

             <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {NOTICES.map((notice, i) => (
                   <div key={i} className="flex gap-3 items-start">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-terracotta shrink-0"></div>
                      <div>
                        <span className="font-bold text-mystic-cream font-serif block text-sm mb-1">{notice.title}</span>
                        <p className="text-xs sm:text-sm text-mystic-cream/90 font-sans leading-relaxed font-medium">{notice.content}</p>
                      </div>
                   </div>
                ))}
             </div>
          </section>

          {/* 6. Footer / Contact */}
          <footer className="w-full text-center relative font-sans">
             <div className="inline-block relative group cursor-pointer" onClick={handleCopy}>
                
                <div className="relative bg-white border border-forest-dark/10 shadow-lg px-8 py-4 rounded-full flex items-center gap-3 hover:bg-forest-dark hover:text-mystic-cream transition-all duration-300">
                  <HeartHandshake className="w-5 h-5 text-terracotta group-hover:text-mystic-cream transition-colors" />
                  <span className="font-sans font-bold text-lg tracking-wider">WeChat: {WECHAT_ID}</span>
                  {copied ? (
                     <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full animate-pulse">Copied!</span>
                  ) : (
                     <Copy className="w-4 h-4 opacity-50" />
                  )}
                </div>
             </div>
             
             <div className="mt-8 flex justify-center items-center gap-2 opacity-40">
                <span className="h-[1px] w-12 bg-forest-dark"></span>
                <p className="text-[10px] uppercase tracking-[0.3em] font-decorative text-forest-dark font-black">Mystic Tarot Guide</p>
                <span className="h-[1px] w-12 bg-forest-dark"></span>
             </div>
          </footer>

        </div>
      </main>
    </div>
  );
}