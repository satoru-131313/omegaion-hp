import React from 'react';
import { motion } from 'framer-motion';
import { Layers, MapPin, EyeOff, FileWarning } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Problem: React.FC = () => {
  const { t } = useLanguage();
  
  const painPoints = [
    {
      icon: Layers,
      title: t.problem.cards.platform.title,
      desc: t.problem.cards.platform.desc,
      color: "text-blue-400"
    },
    {
      icon: MapPin,
      title: t.problem.cards.reality.title,
      desc: t.problem.cards.reality.desc,
      color: "text-emerald-400"
    },
    {
      icon: EyeOff,
      title: t.problem.cards.noise.title,
      desc: t.problem.cards.noise.desc,
      color: "text-red-400"
    },
    {
      icon: FileWarning,
      title: t.problem.cards.risk.title,
      desc: t.problem.cards.risk.desc,
      color: "text-orange-400"
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-64 md:w-96 h-64 md:h-96 bg-slate-900/50 rounded-full blur-3xl mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[10%] w-64 md:w-96 h-64 md:h-96 bg-slate-800/50 rounded-full blur-3xl mix-blend-screen animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block mb-3 md:mb-4 px-3 py-1 border border-slate-700 rounded-full bg-slate-900/50 backdrop-blur-sm"
          >
            <span className="text-[10px] md:text-xs font-mono text-slate-400">{t.problem.tag}</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight whitespace-pre-line"
          >
            {t.problem.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-sm md:text-lg px-2"
          >
            {t.problem.desc}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
          {painPoints.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="group relative p-6 md:p-8 bg-slate-900/40 border border-slate-800 hover:border-slate-600 rounded-2xl backdrop-blur-sm transition-all"
            >
              <div className={`absolute top-0 right-0 p-6 md:p-8 opacity-5 group-hover:opacity-10 transition-opacity ${point.color}`}>
                 <point.icon className="w-24 h-24 md:w-32 md:h-32" />
              </div>

              <div className="flex items-start gap-4 md:gap-6 relative z-10">
                <div className={`p-3 md:p-4 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-slate-600 transition-colors ${point.color}`}>
                  <point.icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-200 mb-2 md:mb-3 group-hover:text-white transition-colors">{point.title}</h3>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12 md:mt-16">
           <motion.div 
             initial={{ opacity: 0, y: -10 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.6 }}
             className="flex flex-col items-center gap-2 text-cyan-500/50"
           >
             <div className="h-8 md:h-12 w-[1px] bg-gradient-to-b from-transparent to-cyan-500"></div>
             <div className="px-3 md:px-4 py-1 border border-cyan-500/30 rounded-full text-[10px] md:text-xs tracking-widest">{t.problem.transition}</div>
           </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Problem;