import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, PlayCircle, ShieldCheck, Database, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 50]);
  const { t } = useLanguage();

  const CtaButtons = (
    <>
      <a href="https://app.omegaion.com/login" className="group px-6 py-3 bg-white text-slate-950 font-bold rounded-full hover:bg-cyan-50 transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(34,211,238,0.4)] text-sm md:text-base">
        {t.hero.cta}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </a>
      <a 
        href="https://www.youtube.com/@officialOmegaion" 
        target="_blank" 
        rel="noopener noreferrer"
        className="px-6 py-3 bg-slate-800/50 text-white font-medium rounded-full hover:bg-slate-700/50 transition-all border border-slate-700 flex items-center justify-center gap-2 backdrop-blur-sm text-sm md:text-base"
      >
        <PlayCircle className="w-4 h-4" />
        {t.hero.cta_sub}
      </a>
    </>
  );

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-12 perspective-2000">
      <div className="absolute inset-0 z-0 bg-[#020617]">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-cyan-900/20 rounded-full blur-[120px] mix-blend-screen"></div>
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100"></div>
         <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-[linear-gradient(to_bottom,transparent_0%,#020617_100%),linear-gradient(rgba(34,211,238,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [transform:perspective(500px)_rotateX(60deg)] origin-bottom opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex-grow flex items-center">
        <div className="grid lg:grid-cols-[4.5fr_5.5fr] xl:grid-cols-[4fr_6fr] gap-6 lg:gap-10 items-center w-full max-w-[1400px] mx-auto">

          {/* ▼ 修正: min-w-0 を追加して、テキストが画面外に押し出されるのを防ぐ */}
          <motion.div style={{ y: y1 }} className="space-y-5 sm:space-y-6 relative z-20 min-w-0">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 backdrop-blur-md text-cyan-300 text-[10px] sm:text-xs font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(34,211,238,0.2)]"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              {t.hero.tag}
            </motion.div>

            {/* ▼ 修正: break-keep を break-words に変更 */}
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-[2.5rem] xl:text-[2.75rem] font-bold leading-[1.3] tracking-tight text-white whitespace-pre-line break-words"
            >
              {t.hero.title}<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 drop-shadow-[0_0_30px_rgba(52,211,238,0.4)]">
                {t.hero.highlight}
              </span>
              <br className="hidden md:block" />
              <span className="text-white text-2xl md:text-3xl lg:text-4xl">{t.hero.title_suffix}</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-sm sm:text-base text-slate-400 max-w-lg leading-relaxed whitespace-pre-line"
            >
               {t.hero.desc}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="hidden lg:flex flex-col sm:flex-row gap-3 pt-2"
            >
               {CtaButtons}
            </motion.div>
          </motion.div>

          {/* ▼ 修正: min-w-0 を追加して画像枠の突き抜けを防止 */}
          <div className="relative z-20 mt-8 lg:mt-0 w-full flex items-center justify-center perspective-1000 min-w-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-gradient-to-tr from-cyan-500/10 to-emerald-500/10 rounded-full blur-3xl -z-10"></div>

            {/* ▼ 修正: max-w-full を追加 */}
            <motion.img
              initial={{ opacity: 0, x: 20, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.5, duration: 1, type: "spring" }}
              src="/ui-pc.gif" 
              alt="OmegaIon PC UI" 
              className="relative w-full max-w-full sm:w-[95%] h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)] drop-shadow-[0_0_40px_rgba(34,211,238,0.2)] z-10"
            />

            <motion.img
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.8, duration: 1, type: "spring" }}
              src="/ui-mobile.png" 
              alt="OmegaIon Mobile UI" 
              className="absolute right-0 lg:right-[-2%] bottom-[-5%] w-[28%] xl:w-[30%] h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.8)] drop-shadow-[0_0_30px_rgba(34,211,238,0.3)] z-20 hover:scale-105 transition-transform cursor-pointer"
            />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex lg:hidden flex-col sm:flex-row gap-3 pt-4 pb-4 w-full justify-center relative z-20"
          >
             {CtaButtons}
          </motion.div>

        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="container mx-auto px-4 sm:px-6 relative z-10 mt-6"
      >
        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 sm:gap-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 border-t border-slate-800/50 pt-5">
          <div className="flex items-center gap-2 text-slate-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="font-semibold text-xs sm:text-sm">GDPR Compliant</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <Database className="w-4 h-4 text-cyan-400" />
            <span className="font-semibold text-xs sm:text-sm">Global Public Data</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <Globe className="w-4 h-4 text-blue-400" />
            <span className="font-semibold text-xs sm:text-sm">EU CSRD Ready</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;