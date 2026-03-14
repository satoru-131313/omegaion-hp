import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, PlayCircle, ShieldCheck, Database, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const { t } = useLanguage();

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-16 perspective-2000">
      <div className="absolute inset-0 z-0 bg-[#020617]">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-cyan-900/20 rounded-full blur-[120px] mix-blend-screen"></div>
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100"></div>
         <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-[linear-gradient(to_bottom,transparent_0%,#020617_100%),linear-gradient(rgba(34,211,238,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [transform:perspective(500px)_rotateX(60deg)] origin-bottom opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex-grow flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
          
          <motion.div style={{ y: y1 }} className="space-y-6 sm:space-y-8 relative z-20">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 backdrop-blur-md text-cyan-300 text-xs font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(34,211,238,0.2)]"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              {t.hero.tag}
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.15] tracking-tight text-white"
            >
              {t.hero.title}<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 drop-shadow-[0_0_30px_rgba(52,211,238,0.4)]">
                {t.hero.highlight}
              </span>
              <br className="hidden md:block" />
              <span className="text-white">{t.hero.title_suffix}</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-xl leading-relaxed"
            >
               {t.hero.desc}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
               <a href="https://app.omegaion.com/login" className="group px-8 py-4 bg-white text-slate-950 font-bold rounded-full hover:bg-cyan-50 transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(34,211,238,0.4)] text-base">
                 {t.hero.cta}
                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </a>
               <button className="px-8 py-4 bg-slate-800/50 text-white font-medium rounded-full hover:bg-slate-700/50 transition-all border border-slate-700 flex items-center justify-center gap-2 backdrop-blur-sm">
                 <PlayCircle className="w-5 h-5" />
                 {t.hero.cta_sub}
               </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.5, duration: 1, type: "spring" }}
            className="relative z-20 perspective-1000 mt-8 lg:mt-0"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.15)] bg-transparent">
              <img 
                src="/ui-mockup.png" 
                alt="OmegaIon Dashboard UI" 
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/10 to-emerald-500/10 rounded-[3rem] blur-3xl -z-10"></div>
          </motion.div>

        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="container mx-auto px-4 sm:px-6 relative z-10 mt-16 border-t border-slate-800/50 pt-8"
      >
        <p className="text-center text-slate-500 text-xs sm:text-sm font-medium mb-6 uppercase tracking-wider">
          {t.hero.trust_label}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 text-slate-300">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
            <span className="font-semibold text-sm sm:text-base">GDPR Compliant</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <Database className="w-6 h-6 text-cyan-400" />
            <span className="font-semibold text-sm sm:text-base">Global Public Data</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <Globe className="w-6 h-6 text-blue-400" />
            <span className="font-semibold text-sm sm:text-base">EU CSRD Ready</span>
          </div>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;