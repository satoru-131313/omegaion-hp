import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Search, Zap, CheckCircle2, AlertTriangle, Database, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// 図解内の要素を再利用可能にするためのコンポーネント定義
interface ProblemCardProps {
  t: any;
  className?: string;
  isMobile?: boolean;
}

const ProblemCard: React.FC<ProblemCardProps> = ({ t, className = '', isMobile = false }) => (
  <motion.div 
    initial={isMobile ? { opacity: 0, y: 20 } : { x: -50, opacity: 0 }}
    whileInView={{ x: 0, y: 0, opacity: 1 }}
    transition={{ delay: isMobile ? 0.2 : 0.2, duration: isMobile ? 0.5 : 0.8 }}
    className={`${className} max-w-[320px] bg-slate-900/90 border-l-4 border-red-500 rounded-r-xl p-5 md:p-6 shadow-[0_10px_40px_rgba(239,68,68,0.15)] backdrop-blur-xl group`}
  >
      <div className="flex justify-between items-start mb-3 md:mb-4">
         <div className="flex items-center gap-2 md:gap-3">
            <div className="p-1.5 md:p-2 bg-red-500/10 rounded-lg">
               <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
            </div>
            <div>
               <div className="text-[8px] md:text-[10px] text-red-400 font-bold tracking-widest uppercase">{t.features.ui.issue_label}</div>
               <div className="text-white text-base md:text-lg font-bold">{t.features.ui.issue_val}</div>
            </div>
         </div>
      </div>
      
      <div className="space-y-2">
         <div className="h-px w-full bg-slate-800 my-2"></div>
         <div className="flex justify-between items-center text-[10px] md:text-xs">
            <span className="text-slate-400">Analysis:</span>
            <span className="text-red-300 font-mono">DETECTED</span>
         </div>
         <div className="bg-slate-950 p-2 rounded text-[10px] md:text-xs text-slate-300 font-mono border border-slate-800">
            Cause: Industrial Runoff<br/>
            Source: Sector 7G
         </div>
      </div>
  </motion.div>
);

interface CenterElementProps {
  className?: string;
  isMobile?: boolean;
}

const CenterElement: React.FC<CenterElementProps> = ({ className = '', isMobile = false }) => (
  <div className={`${className} flex flex-col items-center justify-center z-20 ${isMobile ? 'mt-4 md:mt-0' : 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-75 md:scale-100'}`}>
     <div className={`relative ${isMobile ? 'w-32 h-32' : 'w-32 h-32 md:w-48 md:h-48'}`}>
        <div className="absolute inset-0 border-2 border-cyan-500/20 rounded-full animate-[spin_8s_linear_infinite]"></div>
        <div className={`absolute ${isMobile ? 'inset-3' : 'inset-3 md:inset-4'} border border-cyan-400/30 border-dashed rounded-full animate-[spin_12s_linear_infinite_reverse]`}></div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/5 to-transparent animate-pulse"></div>
        <div className={`absolute inset-0 m-auto ${isMobile ? 'w-16 h-16' : 'w-16 h-16 md:w-24 md:h-24'} bg-slate-950 rounded-full border border-cyan-500 shadow-[0_0_50px_rgba(34,211,238,0.4)] flex items-center justify-center`}>
           <Search className={`${isMobile ? 'w-6 h-6' : 'w-6 h-6 md:w-10 md:h-10'} text-cyan-400 animate-pulse`} />
        </div>
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-full h-full"
        >
           <div className={`absolute ${isMobile ? '-top-1.5' : '-top-1.5 md:-top-2'} left-1/2 w-3 h-3 md:w-4 md:h-4 bg-slate-900 border border-cyan-400 rounded-full -translate-x-1/2 shadow-[0_0_10px_cyan]`}></div>
        </motion.div>
     </div>
     <div className={`${isMobile ? 'mt-4' : 'mt-4 md:mt-6'} bg-cyan-950/50 border border-cyan-500/30 px-3 py-1 md:px-4 md:py-1.5 rounded-full backdrop-blur-md`}>
        <span className="text-[10px] md:text-xs font-bold text-cyan-300 tracking-wider flex items-center gap-2">
           <Globe className="w-3 h-3 animate-spin-slow" />
           SCANNING GLOBAL DB...
        </span>
     </div>
  </div>
);

interface SolutionCardProps {
  t: any;
  className?: string;
  isMobile?: boolean;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ t, className = '', isMobile = false }) => (
  <motion.div 
     initial={isMobile ? { opacity: 0, y: 20 } : { y: 50, opacity: 0 }}
     whileInView={{ x: 0, y: 0, opacity: 1 }}
     transition={{ delay: isMobile ? 0.8 : 1.2, duration: isMobile ? 0.5 : 0.8, type: isMobile ? "tween" : "spring" }}
     className={`${className} max-w-[320px] bg-emerald-950/90 border-l-4 border-emerald-500 rounded-r-xl p-5 md:p-6 shadow-[0_10px_50px_rgba(16,185,129,0.2)] backdrop-blur-xl`}
   >
      <div className="flex justify-between items-start mb-3 md:mb-4">
         <div className="flex items-center gap-2 md:gap-3">
            <div className="p-1.5 md:p-2 bg-emerald-500/10 rounded-lg">
               <Database className="w-5 h-5 md:w-6 md:h-6 text-emerald-500" />
            </div>
            <div>
               <div className="text-[8px] md:text-[10px] text-emerald-400 font-bold tracking-widest uppercase">{t.features.ui.solution_label}</div>
               <div className="text-white text-base md:text-xl font-bold">{t.features.ui.solution_val}</div>
            </div>
         </div>
      </div>
      <div className="space-y-2">
         <div className="h-px w-full bg-slate-800 my-2"></div>
         <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 md:gap-2">
               <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-500 animate-pulse"></div>
               <span className="text-[10px] md:text-xs text-slate-300">{t.features.ui.provider}</span>
            </div>
            <span className="text-[10px] md:text-xs font-bold text-emerald-400 bg-emerald-900/50 px-1.5 py-0.5 md:px-2 md:py-1 rounded">98% Match</span>
         </div>
      </div>
  </motion.div>
);


const Features: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div id="features" className="bg-[#020617] relative z-20 pb-16 md:pb-24 overflow-hidden">
      
      {/* ---------------- SOLUTION PROPOSAL (Core Feature 02) ---------------- */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-900/0 via-slate-900/50 to-[#020617]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
             
             {/* Text Content */}
             <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
                <div className="flex items-center gap-2 mb-2">
                   <h2 className="px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-[10px] md:text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                      {t.features.tag}
                   </h2>
                   <span className="text-slate-500 text-[10px] md:text-xs font-mono uppercase">{t.features.subtag}</span>
                </div>

                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight whitespace-pre-line">
                  {t.features.title}
                </h3>
                
                <div className="space-y-6">
                   <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                      {t.features.desc}
                   </p>
                   
                   <div className="bg-slate-900 border border-slate-800 p-5 md:p-6 rounded-2xl">
                      <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                         <Zap className="w-4 h-4 text-yellow-400" /> {t.features.advantage}
                      </h4>
                      <ul className="space-y-3">
                         {t.features.points.map((point, i) => (
                           <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                              <span className="text-xs md:text-sm text-slate-300">{point}</span>
                           </li>
                         ))}
                      </ul>
                   </div>
                </div>
             </div>
             
             {/* 3D Solution Matching Visual - RESPONSIVE (Two Separate Layouts) */}
             <div className="order-1 lg:order-2 w-full flex items-center justify-center">
                {/* 親要素のコンテナ：ガラスパネルとperspective効果は共有
                  スマホ（md未満）では `h-auto` で中身に合わせ、PCでは `h-[600px]` 固定にする。
                */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative glass-panel rounded-3xl md:rounded-[2.5rem] border border-slate-700/50 overflow-hidden bg-[#020617] perspective-1000 h-auto md:h-[600px] w-full max-w-[500px] md:max-w-none shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                >
                    {/* 背景効果は共有 (スマホではスケールダウン) */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:60px_60px]"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-900/10 rounded-full blur-[50px] md:blur-[100px]"></div>


                    {/* ========================================================
                      ----- スマホ用レイアウト (`md:hidden`) -----
                      上から下へ流れる、シンプルでクリーンな縦型フロー。
                      歪みやすいSVGパスを使いません。
                    ======================================================== */}
                    <div className="md:hidden flex flex-col items-center gap-6 py-10 px-4 relative z-10 w-full h-auto">
                        
                        {/* 1. 問題カード (中央寄せ) */}
                        <ProblemCard t={t} isMobile={true}/>

                        {/* スマホ用縦型パイプ (シンプルな animated div) */}
                        <motion.div 
                           className="h-10 w-px bg-gradient-to-b from-red-500 to-cyan-500"
                           initial={{ scaleY: 0 }}
                           whileInView={{ scaleY: 1 }}
                           transition={{ delay: 0.3, duration: 0.5 }}
                        />

                        {/* 2. 中心調査要素 (中央寄せ、スケール調整) */}
                        <CenterElement isMobile={true}/>

                        {/* スマホ用縦型パイプ */}
                        <motion.div 
                           className="h-10 w-px bg-gradient-to-b from-cyan-500 to-emerald-500"
                           initial={{ scaleY: 0 }}
                           whileInView={{ scaleY: 1 }}
                           transition={{ delay: 0.9, duration: 0.5 }}
                        />

                        {/* 3. 解決カード (中央寄せ) */}
                        <SolutionCard t={t} isMobile={true}/>

                    </div>


                    {/* ========================================================
                      ----- PC用レイアウト (`hidden md:flex`) -----
                      元の複雑でクールな3D図解をそのまま表示。
                      絶対配置とSVGパイプによる「地図」構造。
                    ======================================================== */}
                    <div className="hidden md:flex relative z-10 w-full h-full p-6">
                        
                        {/* Connecting Pipes (SVG) - PCのみで描画 */}
                        <svg viewBox="0 0 600 600" preserveAspectRatio="xMidYMid meet" className="absolute inset-0 w-full h-full pointer-events-none z-0">
                           <motion.path 
                             d="M 150 150 C 150 300, 250 300, 300 300" 
                             fill="none" 
                             stroke="url(#grad_input)" 
                             strokeWidth="4"
                             strokeLinecap="round"
                             initial={{ pathLength: 0, opacity: 0 }}
                             whileInView={{ pathLength: 1, opacity: 1 }}
                             transition={{ duration: 1.5, ease: "easeInOut" }}
                           />
                           <motion.path 
                             d="M 300 300 C 350 300, 450 300, 450 450" 
                             fill="none" 
                             stroke="url(#grad_output)" 
                             strokeWidth="4"
                             strokeLinecap="round"
                             initial={{ pathLength: 0, opacity: 0 }}
                             whileInView={{ pathLength: 1, opacity: 1 }}
                             transition={{ duration: 1.5, ease: "easeInOut", delay: 0.8 }}
                           />
                           <defs>
                              <linearGradient id="grad_input" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.5" />
                                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.8" />
                              </linearGradient>
                              <linearGradient id="grad_output" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#10b981" stopOpacity="1" />
                              </linearGradient>
                           </defs>
                        </svg>

                        <div className="relative z-10 w-full h-full">
                           {/* 1. 問題カード (PC用絶対配置、固定幅) */}
                           <ProblemCard t={t} className="absolute top-10 left-12 w-80" isMobile={false} />

                           {/* 2. 中心要素 (PC用絶対配置、元のスケール) */}
                           <CenterElement isMobile={false} />

                           {/* 3. 解決カード (PC用絶対配置、固定幅) */}
                           <div className="absolute bottom-10 right-12 w-80 perspective-1000">
                              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 0.5, y: 0 }} transition={{ delay: 1 }} className="absolute top-4 left-4 right-0 h-32 bg-slate-800 border border-slate-700 rounded-xl z-0 transform scale-95"></motion.div>
                              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 0.7, y: 0 }} transition={{ delay: 1.1 }} className="absolute top-2 left-2 right-0 h-32 bg-slate-800 border border-slate-600 rounded-xl z-10 transform scale-98"></motion.div>
                              <SolutionCard t={t} isMobile={false} />
                           </div>
                        </div>

                    </div>
                </motion.div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;