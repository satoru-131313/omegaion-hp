import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Factory, LineChart, Briefcase, BookOpen, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const UseCases: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'supplyChain' | 'investor' | 'consultant' | 'researcher'>('supplyChain');

  const tabs = [
    { id: 'supplyChain', icon: Factory, label: t.useCases.tabs.supplyChain, color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/30' },
    { id: 'investor', icon: LineChart, label: t.useCases.tabs.investor, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/30' },
    { id: 'consultant', icon: Briefcase, label: t.useCases.tabs.consultant, color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/30' },
    { id: 'researcher', icon: BookOpen, label: t.useCases.tabs.researcher, color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/30' }
  ] as const;

  return (
    <section className="py-20 md:py-32 bg-[#020617] relative z-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-3 py-1 border border-slate-700 rounded-full bg-slate-900/50"
          >
            <span className="text-[10px] md:text-xs font-mono text-slate-400 tracking-wider uppercase">{t.useCases.tag}</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight whitespace-pre-line text-white"
          >
            {t.useCases.title}
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* タブナビゲーション */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3 rounded-full border transition-all duration-300 ${
                    isActive 
                      ? `${tab.bg} ${tab.color} scale-105 shadow-lg` 
                      : 'border-slate-800 bg-slate-900/50 text-slate-400 hover:bg-slate-800 hover:text-slate-300'
                  }`}
                >
                  <tab.icon className={`w-4 h-4 md:w-5 md:h-5 ${isActive ? '' : 'opacity-70'}`} />
                  <span className="text-xs md:text-sm font-bold">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* コンテンツエリア */}
          <div className="relative min-h-[250px] md:min-h-[200px] rounded-2xl bg-slate-900/40 border border-slate-800 p-6 md:p-10 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start"
              >
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className={`w-6 h-6 ${tabs.find(t => t.id === activeTab)?.color}`} />
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {t.useCases.content[activeTab].title}
                    </h3>
                  </div>
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed pl-9">
                    {t.useCases.content[activeTab].desc}
                  </p>
                </div>
                
                {/* 装飾用のアブストラクトなグラフィック */}
                <div className="hidden md:flex w-1/3 justify-center items-center opacity-80">
                  <div className={`w-32 h-32 rounded-full blur-3xl opacity-20 absolute ${tabs.find(t => t.id === activeTab)?.bg.split(' ')[0]}`}></div>
                  {React.createElement(tabs.find(t => t.id === activeTab)?.icon || Factory, { className: `w-24 h-24 ${tabs.find(t => t.id === activeTab)?.color} opacity-50` })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};

export default UseCases;