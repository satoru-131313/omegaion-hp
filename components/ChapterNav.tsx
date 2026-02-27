import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const ChapterNav: React.FC = () => {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>('visuals');
  const [isVisible, setIsVisible] = useState(false);

  // Sections to track
  const sections = [
    { id: 'visuals', label: t.common.chapters[0] },
    { id: 'features', label: t.common.chapters[1] },
    { id: 'regulations', label: t.common.chapters[2] },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Adjust offset for the fixed headers (Navbar 64px + ChapterNav ~60px)
      const y = element.getBoundingClientRect().top + window.scrollY - 130;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Show nav only after scrolling past the hero
      const heroHeight = window.innerHeight * 0.8;
      setIsVisible(window.scrollY > heroHeight);

      // Scroll Spy Logic
      const sectionElements = sections.map(s => document.getElementById(s.id));
      
      let current = 'visuals';
      sectionElements.forEach((el) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          // If top of section is within the top half of viewport
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = el.id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-[64px] z-40 flex justify-center py-4 pointer-events-none"
    >
      <div className="pointer-events-auto inline-flex items-center gap-1 bg-slate-900/80 backdrop-blur-md rounded-full p-1.5 border border-slate-700/50 shadow-2xl ring-1 ring-white/5">
         {sections.map((section) => {
           const isActive = activeSection === section.id;
           return (
             <button 
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`relative px-6 py-2 rounded-full text-xs font-bold tracking-widest transition-all duration-300 ${
                  isActive 
                    ? 'text-cyan-400 bg-cyan-950/50 shadow-[0_0_15px_rgba(34,211,238,0.1)] border border-cyan-500/20' 
                    : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800 border border-transparent'
                }`}
             >
               {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full bg-cyan-500/5"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
               )}
               {section.label}
             </button>
           );
         })}
      </div>
    </motion.div>
  );
};

export default ChapterNav;