import React from 'react';
import { motion } from 'framer-motion';
import { Map, Lightbulb, Network } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ValueProps: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Map,
      title: t.valueProps.cards.visual.title,
      desc: t.valueProps.cards.visual.desc,
      color: "text-blue-400",
      bgBorder: "hover:border-blue-500/50"
    },
    {
      icon: Lightbulb,
      title: t.valueProps.cards.solution.title,
      desc: t.valueProps.cards.solution.desc,
      color: "text-emerald-400",
      bgBorder: "hover:border-emerald-500/50"
    },
    {
      icon: Network,
      title: t.valueProps.cards.regulation.title,
      desc: t.valueProps.cards.regulation.desc,
      color: "text-purple-400",
      bgBorder: "hover:border-purple-500/50"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#020617] relative z-10 border-t border-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-3 py-1 border border-slate-700 rounded-full bg-slate-900/50"
          >
            <span className="text-[10px] md:text-xs font-mono text-slate-400 tracking-wider">{t.valueProps.tag}</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight whitespace-pre-line text-white"
          >
            {t.valueProps.title}
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={`p-8 rounded-2xl bg-slate-900/40 border border-slate-800 ${feat.bgBorder} transition-colors group flex flex-col items-center text-center`}
            >
              <div className={`p-4 rounded-xl bg-slate-950 border border-slate-800 mb-6 group-hover:scale-110 transition-transform ${feat.color}`}>
                <feat.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-200 mb-4">{feat.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;