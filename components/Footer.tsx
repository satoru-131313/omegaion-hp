import React from 'react';
import { Mail, User } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020617] border-t border-slate-800/50 py-12 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        
        {/* 左側: ロゴとコピーライト */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3">
            {/* ★変更: 隣のspanタグを削除し、ロゴ画像のみにしました */}
            <img src="/logo.png" alt="OmegaIon" className="h-6 sm:h-7 w-auto object-contain opacity-80" />
          </div>
          <div className="text-slate-500 text-xs text-center md:text-left leading-relaxed">
            &copy; {new Date().getFullYear()} OmegaIon. All rights reserved.<br />
            Revolutionizing ESG Compliance with Planetary AI.
          </div>
        </div>
        
        {/* 中央: Product Hunt バッジ */}
        <div className="flex flex-col items-center justify-center pt-2">
          <a 
            href="https://www.producthunt.com/products/omegaion?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-omegaion" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity duration-300"
          >
            <img 
              alt="OmegaIon - AI-powered Elemental Map for environmental risk & solutions. | Product Hunt" 
              width="250" 
              height="54" 
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1100597&theme=light&t=1773823623380" 
            />
          </a>
        </div>

        {/* 右側: Contact Us */}
        <div className="flex flex-col items-center md:items-end gap-3 text-sm text-slate-400">
          <span className="text-slate-500 text-xs font-bold tracking-widest uppercase mb-1">Contact Us</span>
          <div className="flex items-center gap-2.5">
            <User className="w-4 h-4 text-emerald-400" />
            <span>Representative: Satoru Tateishi</span>
          </div>
          <a href="mailto:contact@omegaion.com" className="flex items-center gap-2.5 hover:text-cyan-400 transition-colors duration-300 group">
            <Mail className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
            contact@omegaion.com
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;