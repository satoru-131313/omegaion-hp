import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const BottomCTA: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-slate-950 flex justify-center items-center relative z-10">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center">
             <a href="https://omegaion.vercel.app/login" className="group px-10 py-5 bg-white text-slate-950 font-bold rounded-full hover:bg-cyan-50 transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(34,211,238,0.4)] text-lg">
               {t.hero.cta}
               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </a>
        </div>
      </div>
    </section>
  );
};

export default BottomCTA;