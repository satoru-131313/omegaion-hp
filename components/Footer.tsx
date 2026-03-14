import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#020617] border-t border-slate-800/50 py-12 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center md:items-end gap-8">
        
        {/* 左側：ロゴとコピーライト */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="OmegaIon" className="h-6 sm:h-7 w-auto object-contain opacity-80" />
            <span className="text-slate-300 text-base font-bold tracking-wider">OmegaIon</span>
          </div>
          <div className="text-slate-500 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} OmegaIon. All rights reserved.
          </div>
        </div>
        
        {/* 右側：コンタクト情報 */}
        <div className="flex flex-col items-center md:items-end gap-1.5 text-sm text-slate-400">
          <span className="text-slate-500 text-xs font-bold tracking-widest uppercase mb-1">Contact Us</span>
          <span>Representative: Satoru Tateishi</span>
          <a href="mailto:contact@omegaion.com" className="hover:text-cyan-400 transition-colors duration-300">
            contact@omegaion.com
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;