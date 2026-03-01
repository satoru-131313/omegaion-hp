import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const { t } = useLanguage();
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 perspective-2000">
      <div className="absolute inset-0 z-0 bg-[#020617]">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-cyan-900/20 rounded-full blur-[120px] mix-blend-screen"></div>
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100"></div>
         <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-[linear-gradient(to_bottom,transparent_0%,#020617_100%),linear-gradient(rgba(34,211,238,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [transform:perspective(500px)_rotateX(60deg)] origin-bottom opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center justify-center text-center">
        <motion.div style={{ y: y1 }} className="max-w-5xl space-y-6 sm:space-y-10 relative z-20 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 backdrop-blur-md text-cyan-300 text-[10px] sm:text-xs font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(34,211,238,0.2)]"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            {t.hero.tag}
          </motion.div>
          
          <div className="min-h-[200px] md:min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {!showLogo ? (
                <motion.h1 
                  key="title"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
                  transition={{ delay: 0.2, duration: 1 }}
                  // スマホでは text-4xl に縮小
                  className="text-4xl md:text-6xl lg:text-8xl font-bold leading-[1.1] tracking-tight"
                >
                  {t.hero.title_prefix}<br/>
                  <span className="text-emerald-400">{t.hero.title_fact}</span>. 
                  <span className="text-orange-400">{t.hero.title_reg}</span>. 
                  <span className="text-cyan-400">{t.hero.title_sol}</span>.<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500">{t.hero.title_suffix}</span><br />
                  <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">{t.hero.title_main}</span>
                </motion.h1>
              ) : (
                <motion.div
                  key="logo"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="flex justify-center items-center px-4"
                >
                  <img 
                    src="/logo.png" 
                    alt="OmegaIon Logo" 
                    className="w-full max-w-[400px] md:max-w-[600px] h-auto object-contain drop-shadow-[0_0_50px_rgba(34,211,238,0.2)]" 
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <p className="text-base sm:text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed px-2">
             {t.hero.desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6 sm:pt-8 w-full sm:w-auto px-4 sm:px-0">
             <a href="https://app.omegaion.com/login" className="group px-8 sm:px-10 py-4 sm:py-5 bg-white text-slate-950 font-bold rounded-full hover:bg-cyan-50 transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(34,211,238,0.4)] text-base sm:text-lg w-full sm:w-auto">
               {t.hero.cta}
               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;