import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Search, Zap, ArrowRight, CheckCircle2, AlertTriangle, Database, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Features: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div id="features" className="bg-[#020617] relative z-20 pb-24">
      
      {/* ---------------- SOLUTION PROPOSAL (Core Feature 02) ---------------- */}
      <section className="py-24 bg-gradient-to-b from-slate-900/0 via-slate-900/50 to-[#020617]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             
             {/* Text Content */}
             <div className="space-y-8 order-2 lg:order-1">
                <div className="flex items-center gap-2 mb-2">
                   <h2 className="px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                      {t.features.tag}
                   </h2>
                   <span className="text-slate-500 text-xs font-mono uppercase">{t.features.subtag}</span>
                </div>

                <h3 className="text-4xl md:text-5xl font-bold leading-tight whitespace-pre-line">
                  {t.features.title}
                </h3>
                
                <div className="space-y-6">
                   <p className="text-slate-400 text-lg leading-relaxed">
                      {t.features.desc}
                   </p>
                   
                   <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                      <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                         <Zap className="w-4 h-4 text-yellow-400" /> {t.features.advantage}
                      </h4>
                      <ul className="space-y-3">
                         {t.features.points.map((point, i) => (
                           <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-slate-300">{point}</span>
                           </li>
                         ))}
                      </ul>
                   </div>
                </div>
             </div>
             
             {/* 3D Solution Matching Visual - ENLARGED & REFINED */}
             <div className="order-1 lg:order-2">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative h-[600px] w-full glass-panel rounded-[2.5rem] border border-slate-700/50 overflow-hidden flex items-center justify-center perspective-1000 bg-[#020617]"
                >
                    {/* Background Grid & Effects */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[100px]"></div>

                    {/* Connecting Pipes (SVG) - Animated */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                       {/* Line from Problem to Core */}
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
                       {/* Line from Core to Solution */}
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

                    <div className="relative z-10 w-full h-full p-6">
                        
                        {/* 1. THE PROBLEM (Left Top) - Enlarged */}
                        <motion.div 
                          initial={{ x: -50, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="absolute top-10 left-6 md:left-12 w-80 bg-slate-900/90 border-l-4 border-red-500 rounded-r-xl p-6 shadow-[0_10px_40px_rgba(239,68,68,0.15)] backdrop-blur-xl group"
                        >
                            <div className="flex justify-between items-start mb-4">
                               <div className="flex items-center gap-3">
                                  <div className="p-2 bg-red-500/10 rounded-lg">
                                     <AlertTriangle className="w-6 h-6 text-red-500" />
                                  </div>
                                  <div>
                                     <div className="text-[10px] text-red-400 font-bold tracking-widest uppercase">{t.features.ui.issue_label}</div>
                                     <div className="text-white text-lg font-bold">{t.features.ui.issue_val}</div>
                                  </div>
                               </div>
                            </div>
                            
                            {/* Analysis Section */}
                            <div className="space-y-2">
                               <div className="h-px w-full bg-slate-800 my-2"></div>
                               <div className="flex justify-between items-center text-xs">
                                  <span className="text-slate-400">Analysis:</span>
                                  <span className="text-red-300 font-mono">DETECTED</span>
                               </div>
                               <div className="bg-slate-950 p-2 rounded text-xs text-slate-300 font-mono border border-slate-800">
                                  Cause: Industrial Runoff<br/>
                                  Source: Sector 7G
                               </div>
                            </div>
                        </motion.div>

                        {/* 2. CENTRAL INTELLIGENCE (Center) - Massive & Active */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-20">
                           <div className="relative w-48 h-48">
                              {/* Spinning Outer Rings */}
                              <div className="absolute inset-0 border-2 border-cyan-500/20 rounded-full animate-[spin_8s_linear_infinite]"></div>
                              <div className="absolute inset-4 border border-cyan-400/30 border-dashed rounded-full animate-[spin_12s_linear_infinite_reverse]"></div>
                              
                              {/* Scanning Radar Effect */}
                              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/5 to-transparent animate-pulse"></div>
                              
                              {/* Core Icon */}
                              <div className="absolute inset-0 m-auto w-24 h-24 bg-slate-950 rounded-full border border-cyan-500 shadow-[0_0_50px_rgba(34,211,238,0.4)] flex items-center justify-center">
                                 <Search className="w-10 h-10 text-cyan-400 animate-pulse" />
                              </div>

                              {/* Satellites */}
                              <motion.div 
                                animate={{ rotate: 360 }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 w-full h-full"
                              >
                                 <div className="absolute -top-2 left-1/2 w-4 h-4 bg-slate-900 border border-cyan-400 rounded-full -translate-x-1/2 shadow-[0_0_10px_cyan]"></div>
                              </motion.div>
                           </div>
                           <div className="mt-6 bg-cyan-950/50 border border-cyan-500/30 px-4 py-1.5 rounded-full backdrop-blur-md">
                              <span className="text-xs font-bold text-cyan-300 tracking-wider flex items-center gap-2">
                                 <Globe className="w-3 h-3 animate-spin-slow" />
                                 SCANNING GLOBAL DB...
                              </span>
                           </div>
                        </div>

                        {/* 3. SOLUTIONS (Right Bottom) - Stacked Cards */}
                        <div className="absolute bottom-10 right-6 md:right-12 w-80 perspective-1000">
                           
                           {/* Background Cards (Suggestions) */}
                           <motion.div 
                              initial={{ y: 20, opacity: 0 }}
                              whileInView={{ y: 0, opacity: 0.5 }}
                              transition={{ delay: 1 }}
                              className="absolute top-4 left-4 right-0 h-32 bg-slate-800 border border-slate-700 rounded-xl z-0 transform scale-95"
                           ></motion.div>
                           <motion.div 
                              initial={{ y: 20, opacity: 0 }}
                              whileInView={{ y: 0, opacity: 0.7 }}
                              transition={{ delay: 1.1 }}
                              className="absolute top-2 left-2 right-0 h-32 bg-slate-800 border border-slate-600 rounded-xl z-10 transform scale-98"
                           ></motion.div>

                           {/* Main Solution Card */}
                           <motion.div 
                             initial={{ y: 50, opacity: 0 }}
                             whileInView={{ y: 0, opacity: 1 }}
                             transition={{ delay: 1.2, type: "spring" }}
                             className="relative z-20 bg-emerald-950/90 border-l-4 border-emerald-500 rounded-r-xl p-6 shadow-[0_10px_50px_rgba(16,185,129,0.2)] backdrop-blur-xl"
                           >
                              <div className="flex justify-between items-start mb-4">
                                 <div className="flex items-center gap-3">
                                    <div className="p-2 bg-emerald-500/10 rounded-lg">
                                       <Database className="w-6 h-6 text-emerald-500" />
                                    </div>
                                    <div>
                                       <div className="text-[10px] text-emerald-400 font-bold tracking-widest uppercase">{t.features.ui.solution_label}</div>
                                       <div className="text-white text-xl font-bold">{t.features.ui.solution_val}</div>
                                    </div>
                                 </div>
                              </div>
                              <div className="space-y-2">
                                 <div className="h-px w-full bg-slate-800 my-2"></div>
                                 <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                       <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                       <span className="text-xs text-slate-300">{t.features.ui.provider}</span>
                                    </div>
                                    <span className="text-xs font-bold text-emerald-400 bg-emerald-900/50 px-2 py-1 rounded">98% Match</span>
                                 </div>
                              </div>
                           </motion.div>
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