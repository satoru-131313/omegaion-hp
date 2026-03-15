import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Building2, Landmark, GraduationCap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const TrustTicker: React.FC = () => {
  const { t } = useLanguage();

  // 表示するアイコンとダミーのデータソース概念
  const sources = [
    { icon: Globe, name: "UN Frameworks" },
    { icon: Landmark, name: "Gov Regulations" },
    { icon: Building2, name: "Corporate Disclosures" },
    { icon: GraduationCap, name: "Scientific Journals" },
    { icon: Globe, name: "Global News Media" },
    { icon: Landmark, name: "EU Directives" },
  ];

  return (
    <div className="w-full bg-slate-900 border-y border-slate-800/50 py-4 overflow-hidden relative z-10">
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-slate-900 to-transparent z-20 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-slate-900 to-transparent z-20 pointer-events-none"></div>
      
      <div className="flex items-center w-[200%]">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex items-center gap-8 md:gap-16 whitespace-nowrap"
        >
          {/* ティッカーをループさせるために2回繰り返す */}
          {[...sources, ...sources, ...sources].map((source, idx) => (
            <div key={idx} className="flex items-center gap-3 text-slate-500 opacity-60 hover:opacity-100 transition-opacity">
              <source.icon className="w-4 h-4 md:w-5 md:h-5 text-cyan-500/70" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-wider">{source.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* 翻訳された信頼のメッセージを中央下に表示 */}
      <div className="text-center mt-3 relative z-30">
        <span className="inline-block px-3 py-1 bg-slate-800/50 rounded-full border border-slate-700/50 text-[10px] sm:text-xs text-slate-400 font-medium">
          {t.trustTicker.text}
        </span>
      </div>
    </div>
  );
};

export default TrustTicker;