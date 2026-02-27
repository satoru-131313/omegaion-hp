import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Pricing: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.pricing.title}</h2>
          <p className="text-slate-400">{t.pricing.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Founder Plan - Highlighted */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="col-span-1 md:col-span-1 border-2 border-cyan-500 bg-slate-900/80 rounded-3xl p-8 relative overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.15)] flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 bg-cyan-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-bl-xl">
              LIMITED
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{t.pricing.founder.name}</h3>
              <p className="text-cyan-400 text-sm mb-6">{t.pricing.founder.desc}</p>
              
              <div className="mb-6 flex items-baseline">
                 <span className="text-5xl font-bold">{t.pricing.founder.price}</span>
                 <span className="text-cyan-400 font-bold ml-2 text-xl">{t.pricing.founder.period}</span>
              </div>

              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                {t.pricing.founder.note}
              </p>

              <ul className="space-y-3 text-sm text-slate-200 mb-8">
                 {t.pricing.founder.features?.map((feat: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-cyan-400 shrink-0" /> 
                      <span className="leading-tight">{feat}</span>
                    </li>
                 ))}
              </ul>
            </div>

            <a href="https://omegaion.vercel.app/login" className="block text-center w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-colors mt-auto shadow-[0_0_20px_rgba(34,211,238,0.4)]">
              {t.pricing.founder.cta}
            </a>
          </motion.div>

          {/* Standard Plan */}
          <motion.div 
             whileHover={{ y: -5 }}
             className="glass-panel rounded-3xl p-8 flex flex-col justify-between border border-slate-800"
          >
             <div>
                <h3 className="text-xl font-bold text-slate-300 mb-2">{t.pricing.standard.name}</h3>
                <div className="mb-6 flex items-baseline">
                   <span className="text-4xl font-bold text-white">{t.pricing.standard.price}</span>
                   <span className="text-slate-500 text-sm ml-2">{t.pricing.standard.period}</span>
                </div>
                <p className="text-xs text-slate-500 mb-6">{t.pricing.standard.note}</p>
                
                <ul className="space-y-3 text-sm text-slate-400 mb-8">
                   {t.pricing.standard.features?.map((feat: string, i: number) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-slate-600 shrink-0" /> 
                        <span className="leading-tight">{feat}</span>
                      </li>
                   ))}
                </ul>
             </div>
             <button className="w-full py-4 mt-auto rounded-xl border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-colors">
               {t.pricing.standard.cta}
             </button>
          </motion.div>

          {/* Business Plan */}
          <motion.div 
             whileHover={{ y: -5 }}
             className="glass-panel rounded-3xl p-8 flex flex-col justify-between border border-slate-800"
          >
             <div>
                <h3 className="text-xl font-bold text-slate-300 mb-2">{t.pricing.business.name}</h3>
                <p className="text-slate-500 text-sm mb-6">{t.pricing.business.desc}</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                    <span className="text-slate-400 text-sm">{t.pricing.business.project}</span>
                    <span className="font-bold">$500/y</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                    <span className="text-slate-400 text-sm">{t.pricing.business.team}</span>
                    <span className="font-bold">$1,000/y</span>
                  </div>
                   <div className="flex justify-between items-center pb-2">
                    <span className="text-slate-400 text-sm">{t.pricing.business.dept}</span>
                    <span className="font-bold">$1,800/y</span>
                  </div>
                </div>

                <p className="text-xs text-slate-500">{t.pricing.business.note}</p>
             </div>
             
             <a 
               href="mailto:contact@omegaion.com"
               className="block text-center w-full py-4 mt-8 rounded-xl border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-colors"
             >
               {t.pricing.business.cta}
             </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;