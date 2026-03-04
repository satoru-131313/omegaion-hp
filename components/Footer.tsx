import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#020617] border-t border-slate-800/50 py-8 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* 左側：ロゴとサービス名 */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="OmegaIon" className="h-5 sm:h-6 w-auto object-contain opacity-70" />
          <span className="text-slate-400 text-sm font-bold tracking-wider">OmegaIon</span>
        </div>
        
        {/* 右側：コピーライト（年号は自動更新） */}
        <div className="text-slate-500 text-xs text-center md:text-right">
          &copy; {new Date().getFullYear()} OmegaIon. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;