import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Bell, Tag, Sparkles, FileText, ArrowUpRight, CheckCircle2, Filter, Activity, Share2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FutureScope: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
       {/* Ambient Background */}
       <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[100px] pointer-events-none"></div>
       <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none"></div>

       <div className="container mx-auto px-6 relative z-10">
         
         {/* Section Header */}
         <div className="text-center mb-24">
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-950/30 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-6"
            >
               <Sparkles className="w-3 h-3" />
               {t.future.tag}
            </motion.div>
            <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className="text-4xl md:text-5xl font-bold mb-6 leading-tight whitespace-pre-line text-white"
            >
               {t.future.title}
            </motion.h2>
            <motion.p 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ delay: 0.2 }}
               className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed whitespace-pre-line"
            >
               {t.future.desc}
            </motion.p>
         </div>

         <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* FEATURE 1: Precision Alerting (Funnel Visualization) */}
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="bg-slate-900/50 border border-indigo-500/20 rounded-[2.5rem] p-8 lg:p-10 relative overflow-hidden group hover:border-indigo-500/40 transition-all flex flex-col"
            >
               <div className="absolute top-0 right-0 p-40 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-colors pointer-events-none"></div>
               
               {/* Visual: The Funnel */}
               <div className="relative h-64 w-full mb-8 bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden flex flex-col items-center justify-center">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                  
                  {/* Top: Raw Data (Chaos) */}
                  <div className="absolute top-4 w-full px-10 flex justify-center gap-2">
                     {[...Array(8)].map((_, i) => (
                        <motion.div 
                          key={`particle-${i}`}
                          animate={{ y: [0, 80], opacity: [0, 1, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2, ease: "linear" }}
                          className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-slate-700' : 'bg-slate-600'}`}
                        />
                     ))}
                  </div>

                  {/* Middle: The Filter */}
                  <div className="z-10 relative mt-4">
                     <div className="w-12 h-12 rounded-full border border-indigo-500 bg-indigo-950/50 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.3)] backdrop-blur-sm">
                        <Filter className="w-5 h-5 text-indigo-400" />
                     </div>
                     <div className="absolute top-full left-1/2 -translate-x-1/2 h-8 w-[1px] bg-indigo-500/50"></div>
                  </div>

                  {/* Bottom: Refined Alerts */}
                  <div className="absolute bottom-4 w-64 bg-slate-900/90 border-l-4 border-indigo-500 rounded-r-lg p-3 shadow-lg transform translate-y-2">
                     <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] text-indigo-300 font-bold uppercase tracking-wider">High Impact Alert</span>
                        <span className="flex h-2 w-2 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                     </div>
                     <div className="h-1.5 w-full bg-slate-800 rounded mb-1"></div>
                     <div className="h-1.5 w-2/3 bg-slate-800 rounded"></div>
                  </div>
               </div>

               <div className="flex-1">
                  <div className="w-12 h-12 bg-indigo-950/50 border border-indigo-500/30 rounded-2xl flex items-center justify-center mb-6 text-indigo-400">
                     <Bell className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{t.future.alert.title}</h3>
                  <p className="text-indigo-300 text-sm font-bold tracking-wide mb-4">{t.future.alert.subtitle}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                     {t.future.alert.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                     {t.future.alert.features?.map((feat: string, i: number) => (
                        <div key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-950/30 border border-indigo-500/20 text-indigo-200 text-xs">
                           <CheckCircle2 className="w-3 h-3 text-indigo-500" />
                           {feat}
                        </div>
                     ))}
                  </div>
               </div>
            </motion.div>

            {/* FEATURE 2: Contextual Intelligence (Knowledge Graph) */}
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="bg-slate-900/50 border border-emerald-500/20 rounded-[2.5rem] p-8 lg:p-10 relative overflow-hidden group hover:border-emerald-500/40 transition-all flex flex-col"
            >
               <div className="absolute top-0 right-0 p-40 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-colors pointer-events-none"></div>

               {/* Visual: Knowledge Graph to Doc */}
               <div className="relative h-64 w-full mb-8 bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                  
                  {/* Network Graph Animation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                     <svg className="w-full h-full absolute inset-0 pointer-events-none">
                        {/* Connecting Lines */}
                        <motion.line x1="30%" y1="30%" x2="50%" y2="50%" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }} />
                        <motion.line x1="70%" y1="30%" x2="50%" y2="50%" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }} />
                        <motion.line x1="40%" y1="70%" x2="50%" y2="50%" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse" }} />
                     </svg>
                     
                     {/* Nodes */}
                     <motion.div className="absolute top-[30%] left-[30%] w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 3, repeat: Infinity }} />
                     <motion.div className="absolute top-[30%] right-[30%] w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 3, delay: 1, repeat: Infinity }} />
                     <motion.div className="absolute bottom-[30%] left-[40%] w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 3, delay: 2, repeat: Infinity }} />
                     
                     {/* Central Processing Unit */}
                     <div className="relative z-10 w-16 h-16 bg-slate-900 border border-emerald-500/50 rounded-xl flex items-center justify-center shadow-2xl">
                        <Share2 className="w-6 h-6 text-emerald-400" />
                     </div>
                  </div>

                  {/* Output Document Slide-in */}
                  <motion.div 
                     initial={{ x: 100, opacity: 0 }}
                     whileInView={{ x: 0, opacity: 1 }}
                     transition={{ duration: 0.8, delay: 2, repeat: Infinity, repeatDelay: 4 }}
                     className="absolute bottom-4 right-4 z-20 w-40 bg-emerald-950/90 border border-emerald-500/50 rounded-lg p-3 shadow-2xl backdrop-blur-md"
                  >
                     <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-1.5">
                           <FileText className="w-3 h-3 text-emerald-400" />
                           <span className="text-[9px] font-bold text-emerald-100">Strategic Brief.pdf</span>
                        </div>
                        <ArrowUpRight className="w-3 h-3 text-emerald-500" />
                     </div>
                     <div className="space-y-1.5 opacity-50">
                        <div className="h-1 w-full bg-emerald-200 rounded"></div>
                        <div className="h-1 w-4/5 bg-emerald-200 rounded"></div>
                     </div>
                  </motion.div>
               </div>

               <div className="flex-1">
                  <div className="w-12 h-12 bg-emerald-950/50 border border-emerald-500/30 rounded-2xl flex items-center justify-center mb-6 text-emerald-400">
                     <Brain className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{t.future.report.title}</h3>
                  <p className="text-emerald-300 text-sm font-bold tracking-wide mb-4">{t.future.report.subtitle}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                     {t.future.report.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                     <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-950/30 border border-emerald-500/20 text-emerald-200 text-xs">
                        <Activity className="w-3 h-3 text-emerald-500" />
                        Dynamic Knowledge Graph
                     </div>
                     <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-950/30 border border-emerald-500/20 text-emerald-200 text-xs">
                        <Tag className="w-3 h-3 text-emerald-500" />
                        Multi-Language LLM
                     </div>
                  </div>
               </div>
            </motion.div>

         </div>

       </div>
    </section>
  );
};

export default FutureScope;