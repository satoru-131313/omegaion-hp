import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, AlertTriangle, ArrowRight, Lock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Regulations: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="regulations" className="py-32 bg-[#020617] relative overflow-hidden bg-gradient-to-t from-slate-950 to-[#020617]">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
               <div className="flex items-center gap-2">
                 <h2 className="px-3 py-1 rounded-full border border-orange-500/30 bg-orange-950/30 text-orange-400 text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                    {t.regulations.tag}
                 </h2>
                 <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: [0.8, 1, 0.8], boxShadow: ["0 0 12px rgba(245,158,11,0.2)", "0 0 20px rgba(245,158,11,0.5)", "0 0 12px rgba(245,158,11,0.2)"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-500/50 bg-amber-950/30 text-[10px] text-amber-400 font-bold tracking-wider cursor-default"
                 >
                    <Lock className="w-3 h-3" />
                    {t.common.patent}
                 </motion.div>
               </div>
               <span className="text-slate-700">|</span>
               <span className="text-slate-500 text-xs font-mono uppercase">{t.regulations.subtag}</span>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-[1.1] whitespace-pre-line">
              {t.regulations.title}
            </h3>

            <div className="space-y-8">
               <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-900/20 border border-orange-500/30 flex items-center justify-center">
                    <Globe2 className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">{t.regulations.card1.title}</h4>
                    <p className="text-slate-400 leading-relaxed">
                      {t.regulations.card1.desc}
                    </p>
                  </div>
               </div>

               <div className="flex gap-5">
                   <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-900/20 border border-orange-500/30 flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">{t.regulations.card2.title}</h4>
                    <p className="text-slate-400 leading-relaxed">
                      {t.regulations.card2.desc}
                    </p>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Right: 3D Visualization - "The AI Prism" */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative h-[500px] flex items-center justify-center perspective-1000"
          >
             {/* The Prism Concept */}
             <div className="relative w-full h-full max-w-md mx-auto">
                
                {/* 1. Incoming Chaos (Raw Docs) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/3 z-10">
                   <motion.div 
                     animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
                     transition={{ duration: 3, repeat: Infinity }}
                     className="flex flex-col items-center gap-2"
                   >
                      <div className="text-[10px] text-slate-500 tracking-widest uppercase">{t.regulations.ui.stream}</div>
                      <div className="flex gap-2">
                        {[1,2,3].map(i => (
                          <div key={i} className="w-8 h-10 bg-slate-800 border border-slate-600 rounded-sm opacity-50 transform rotate-12"></div>
                        ))}
                      </div>
                      <ArrowRight className="rotate-90 text-slate-600 w-6 h-6" />
                   </motion.div>
                </div>

                {/* 2. The AI Prism (Processing Core) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 z-20">
                   <motion.div 
                     animate={{ rotateY: 360 }}
                     transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                     className="w-full h-full relative preserve-3d"
                   >
                      {/* Pyramid / Diamond Shape simulated with CSS borders or clip-path */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-500/20 backdrop-blur-md border border-orange-400/50 transform rotate-45 rounded-xl shadow-[0_0_50px_rgba(249,115,22,0.4)]"></div>
                      <div className="absolute inset-4 bg-orange-500/10 border border-orange-300/30 transform -rotate-45 rounded-lg"></div>
                      
                      {/* Inner Core */}
                      <div className="absolute inset-0 m-auto w-4 h-4 bg-white rounded-full shadow-[0_0_20px_white] animate-pulse"></div>
                   </motion.div>
                </div>

                {/* 3. Outgoing Structured Data (Beams) */}
                <div className="absolute bottom-0 w-full h-1/2 z-10 flex justify-between px-4 pt-12">
                   
                   {/* Beam 1: USA */}
                   <motion.div 
                     initial={{ height: 0 }}
                     whileInView={{ height: '100%' }}
                     transition={{ duration: 1, delay: 0.2 }}
                     className="relative w-1/3 flex flex-col items-center group"
                   >
                      <div className="w-[2px] h-full bg-gradient-to-b from-orange-400 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute bottom-10 bg-slate-900 border border-orange-500/50 p-3 rounded-lg shadow-lg transform group-hover:-translate-y-2 transition-transform">
                         <div className="text-orange-400 text-xs font-bold">USA</div>
                         <div className="text-[10px] text-slate-300">{t.regulations.ui.usa}</div>
                      </div>
                   </motion.div>

                   {/* Beam 2: EU */}
                   <motion.div 
                     initial={{ height: 0 }}
                     whileInView={{ height: '100%' }}
                     transition={{ duration: 1, delay: 0.4 }}
                     className="relative w-1/3 flex flex-col items-center group"
                   >
                      <div className="w-[2px] h-full bg-gradient-to-b from-orange-400 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute bottom-20 bg-slate-900 border border-orange-500/50 p-3 rounded-lg shadow-lg transform group-hover:-translate-y-2 transition-transform">
                         <div className="text-orange-400 text-xs font-bold">EU</div>
                         <div className="text-[10px] text-slate-300">{t.regulations.ui.eu}</div>
                         <div className="mt-1 flex items-center gap-1">
                            <AlertTriangle className="w-3 h-3 text-red-500" />
                            <span className="text-[9px] text-red-400">{t.regulations.ui.high_impact}</span>
                         </div>
                      </div>
                   </motion.div>

                    {/* Beam 3: JAPAN */}
                    <motion.div 
                     initial={{ height: 0 }}
                     whileInView={{ height: '100%' }}
                     transition={{ duration: 1, delay: 0.6 }}
                     className="relative w-1/3 flex flex-col items-center group"
                   >
                      <div className="w-[2px] h-full bg-gradient-to-b from-orange-400 to-transparent opacity-60 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute bottom-6 bg-slate-900 border border-orange-500/50 p-3 rounded-lg shadow-lg transform group-hover:-translate-y-2 transition-transform">
                         <div className="text-orange-400 text-xs font-bold">JPN</div>
                         <div className="text-[10px] text-slate-300">{t.regulations.ui.japan}</div>
                      </div>
                   </motion.div>

                </div>

             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Regulations;