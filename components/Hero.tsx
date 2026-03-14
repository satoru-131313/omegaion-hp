import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, PlayCircle, ShieldCheck, Database, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 50]);
  const { t } = useLanguage();

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-12 perspective-2000">
      {/* 背景エフェクト */}
      <div className="absolute inset-0 z-0 bg-[#020617]">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-cyan-900/20 rounded-full blur-[120px] mix-blend-screen"></div>
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100"></div>
         <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-[linear-gradient(to_bottom,transparent_0%,#020617_100%),linear-gradient(rgba(34,211,238,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [transform:perspective(500px)_rotateX(60deg)] origin-bottom opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex-grow flex items-center">
        {/* 2カラム構成：左にテキストとCTA、右に2枚の重なるUI画像 */}
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-center w-full max-w-7xl mx-auto">
          
          {/* 左カラム：テキストとCTA */}
          <motion.div style={{ y: y1 }} className="space-y-6 relative z-20">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 backdrop-blur-md text-cyan-300 text-[10px] sm:text-xs font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(34,211,238,0.2)]"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              {t.hero.tag}
            </motion.div>

            {/* テキストサイズを 1画面に収まるよう最適化 */}
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight text-white"
            >
              {t.hero.title}<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 drop-shadow-[0_0_30px_rgba(52,211,238,0.4)]">
                {t.hero.highlight}
              </span>
              <br className="hidden md:block" />
              <span className="text-white text-3xl md:text-4xl lg:text-5xl">{t.hero.title_suffix}</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-sm sm:text-base lg:text-lg text-slate-400 max-w-lg leading-relaxed"
            >
               {t.hero.desc}
            </motion.p>

            {/* CTAをテキストのすぐ下に配置 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
               <a href="https://app.omegaion.com/login" className="group px-6 py-3 bg-white text-slate-950 font-bold rounded-full hover:bg-cyan-50 transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(34,211,238,0.4)] text-sm md:text-base">
                 {t.hero.cta}
                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </a>
               <button className="px-6 py-3 bg-slate-800/50 text-white font-medium rounded-full hover:bg-slate-700/50 transition-all border border-slate-700 flex items-center justify-center gap-2 backdrop-blur-sm text-sm md:text-base">
                 <PlayCircle className="w-4 h-4" />
                 {t.hero.cta_sub}
               </button>
            </motion.div>
          </motion.div>

          {/* 右カラム：2枚のUI画像を重ねて配置（スタッキング） */}
          <div className="relative z-20 perspective-1000 mt-8 lg:mt-0 h-[300px] sm:h-[400px] lg:h-[500px] w-full flex items-center justify-center">
            
            {/* 背面：環境規制ビュー (少し小さく、右上へオフセット) */}
            <motion.img
              initial={{ opacity: 0, x: 50, y: -20, rotateY: 15 }}
              animate={{ opacity: 0.6, x: 20, y: -20, rotateY: 5 }}
              transition={{ delay: 0.7, duration: 1, type: "spring" }}
              src="/ui-mockup-reg.jpg" 
              alt="OmegaIon Regulations UI" 
              className="absolute right-0 top-[10%] w-[75%] rounded-xl border border-slate-700/50 drop-shadow-2xl hover:opacity-100 hover:z-30 transition-all duration-500 cursor-pointer"
            />

            {/* 前面：マップビュー (少し大きく、左下へオフセット) */}
            <motion.img
              initial={{ opacity: 0, x: -50, y: 20, rotateY: -10 }}
              animate={{ opacity: 1, x: -20, y: 20, rotateY: 0 }}
              transition={{ delay: 0.5, duration: 1, type: "spring" }}
              src="/ui-mockup.png" 
              alt="OmegaIon Map UI" 
              className="absolute left-0 bottom-[10%] w-[85%] rounded-xl border border-slate-700/50 drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] z-20 hover:scale-105 transition-transform duration-500 cursor-pointer"
            />

            {/* 装飾用の光彩 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-cyan-500/10 to-emerald-500/10 rounded-full blur-3xl -z-10"></div>
          </div>

        </div>
      </div>

      {/* 信頼性バッジ（下部にコンパクトに配置） */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="container mx-auto px-4 sm:px-6 relative z-10 mt-8"
      >
        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 sm:gap-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 border-t border-slate-800/50 pt-6">
          <div className="flex items-center gap-2 text-slate-300">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span className="font-semibold text-xs sm:text-sm">GDPR Compliant</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <Database className="w-5 h-5 text-cyan-400" />
            <span className="font-semibold text-xs sm:text-sm">Global Public Data</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <Globe className="w-5 h-5 text-blue-400" />
            <span className="font-semibold text-xs sm:text-sm">EU CSRD Ready</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;