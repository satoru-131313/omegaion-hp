import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Droplets, Flame, Sprout, Cat, Mountain, Snowflake, Skull, Search, MoreHorizontal, Layers, Lock, ChevronDown } from 'lucide-react';
import { EnvElement } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const Visuals: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const { t } = useLanguage();

  const elements: EnvElement[] = [
    { id: 'water', name: t.visuals.elements.water.name, icon: Droplets, color: 'text-blue-400', description: t.visuals.elements.water.desc },
    { id: 'heat', name: t.visuals.elements.heat.name, icon: Flame, color: 'text-orange-500', description: t.visuals.elements.heat.desc },
    { id: 'plants', name: t.visuals.elements.plants.name, icon: Sprout, color: 'text-emerald-400', description: t.visuals.elements.plants.desc },
    { id: 'life', name: t.visuals.elements.life.name, icon: Cat, color: 'text-pink-400', description: t.visuals.elements.life.desc },
    { id: 'soil', name: t.visuals.elements.soil.name, icon: Mountain, color: 'text-amber-700', description: t.visuals.elements.soil.desc },
    { id: 'ice', name: t.visuals.elements.ice.name, icon: Snowflake, color: 'text-cyan-200', description: t.visuals.elements.ice.desc },
    { id: 'poison', name: t.visuals.elements.poison.name, icon: Skull, color: 'text-purple-500', description: t.visuals.elements.poison.desc },
  ];
  
  // Generate random plots for the "News/Event" map layer
  const mapPlots = useMemo(() => {
    return Array.from({ length: 45 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 70 + 15}%`,
      left: `${Math.random() * 80 + 10}%`,
      color: [
        'bg-blue-500', 'bg-orange-500', 'bg-emerald-500', 'bg-pink-500', 'bg-cyan-400', 'bg-purple-500'
      ][Math.floor(Math.random() * 6)],
      delay: Math.random() * 2
    }));
  }, []);

  // Advanced 3D Transforms for "Exploded View"
  const rotateX = useTransform(scrollYProgress, [0.2, 0.5], [15, 25]);
  const rotateY = useTransform(scrollYProgress, [0.2, 0.5], [0, -10]);
  const separateLayers = useTransform(scrollYProgress, [0.2, 0.5], [0, 40]);

  return (
    <section id="visuals" ref={containerRef} className="py-32 bg-gradient-to-b from-[#020617] to-slate-950 relative overflow-hidden [perspective:2000px]" style={{ position: 'relative' }}>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Content */}
        <div className="mb-24 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-6">
               <div className="flex items-center gap-2">
                 <h2 className="px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                    {t.visuals.tag}
                 </h2>
                 <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: [0.8, 1, 0.8], boxShadow: ["0 0 12px rgba(245,158,11,0.2)", "0 0 20px rgba(245,158,11,0.5)", "0 0 12px rgba(245,158,11,0.2)"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-500/50 bg-amber-950/30 text-[10px] text-amber-400 font-bold tracking-wider cursor-default"
                 >
                    <Lock className="w-3 h-3" />
                    {t.common.patent}
                 </motion.div>
               </div>
               <span className="hidden md:block text-slate-700">|</span>
               <span className="text-slate-500 text-xs font-mono uppercase">{t.visuals.subtag}</span>
            </div>
            
            <h3 className="text-4xl md:text-6xl font-bold mb-8 whitespace-pre-line">
              {t.visuals.title}
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed text-lg">
              {t.visuals.desc}
            </p>
        </div>

        {/* 1. The 7 Attributes - EMPHASIZED */}
        <div className="mb-24">
            <h4 className="text-center text-slate-500 text-sm mb-8 tracking-widest uppercase">{t.visuals.elements_title}</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {elements.map((el, idx) => (
                    <motion.div 
                        key={el.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ y: -10, scale: 1.05 }}
                        className="relative group h-40 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-600 flex flex-col items-center justify-center p-4 transition-all cursor-pointer overflow-hidden"
                        role="article"
                        aria-label={`${el.name}: ${el.description}`}
                    >
                        {/* Background Gradient Hover */}
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-current ${el.color}`}></div>
                        
                        <div className={`mb-4 p-4 rounded-full bg-slate-950 border border-slate-800 shadow-xl group-hover:scale-110 transition-transform ${el.color}`}>
                            <el.icon className="w-8 h-8" aria-hidden="true" />
                        </div>
                        <div className="font-bold text-white mb-1">{el.name}</div>
                        <div className="text-[10px] text-slate-500 text-center leading-tight">{el.description}</div>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* 2. Exploded 3D Dashboard Mockup */}
        <div className="relative h-[600px] w-full flex items-center justify-center [perspective:2000px]">
           
           <motion.div 
             style={{ rotateX, rotateY }}
             className="relative w-full max-w-5xl aspect-video [transform-style:preserve-3d]"
           >
              {/* LAYER 1: Base Plate (The World) */}
              <div className="absolute inset-0 bg-[#0f172a] rounded-xl border border-slate-800 shadow-2xl overflow-hidden">
                 <div className="absolute inset-0 opacity-30 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-cover bg-no-repeat bg-center filter grayscale contrast-125"></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent"></div>
              </div>

              {/* LAYER 2: News/Facts Plots (Floating) - INCREASED DENSITY */}
              <motion.div 
                style={{ z: separateLayers }}
                className="absolute inset-0 pointer-events-none"
              >
                 {/* Generated Random Plots representing "News/Facts" */}
                 {mapPlots.map((plot) => (
                    <motion.div 
                        key={plot.id}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 0.8 }}
                        transition={{ delay: plot.delay, duration: 0.5 }}
                        style={{ top: plot.top, left: plot.left }}
                        className={`absolute w-1.5 h-1.5 rounded-full ${plot.color} shadow-[0_0_8px_currentColor]`}
                    >
                        <div className={`absolute inset-0 rounded-full ${plot.color} animate-ping opacity-50`}></div>
                    </motion.div>
                 ))}
              </motion.div>

              {/* LAYER 3: UI Elements & Specific Event Pins (Higher Float) */}
              <motion.div 
                 style={{ z: useTransform(separateLayers, v => v * 2) }}
                 className="absolute inset-0"
              >
                 {/* Sidebar UI - Replicating Reference */}
                 <div className="absolute left-0 top-4 bottom-4 w-64 bg-slate-950/90 backdrop-blur-xl border-r border-y border-slate-700/50 rounded-r-xl p-4 flex flex-col shadow-2xl transform -translate-x-4">
                     <div className="flex items-center gap-2 mb-8 text-cyan-500 font-bold">
                        <Layers className="w-5 h-5" /> {t.visuals.ui.dashboard}
                     </div>
                     <div className="space-y-4">
                        <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">{t.visuals.ui.active_filters}</div>
                        {elements.slice(0, 4).map(el => (
                            <div key={el.id} className="flex items-center justify-between p-2 rounded bg-slate-900 border border-slate-800">
                                <div className="flex items-center gap-2">
                                    <div className={`w-2 h-2 rounded-full bg-current ${el.color}`}></div>
                                    <span className="text-xs text-slate-300">{el.name}</span>
                                </div>
                                <div className="w-3 h-3 border border-slate-600 rounded bg-cyan-500 flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 bg-white"></div>
                                </div>
                            </div>
                        ))}
                     </div>
                     <div className="mt-auto p-3 rounded bg-slate-900 border border-slate-800">
                        <div className="text-xs text-slate-400 mb-1">{t.visuals.ui.total_signals}</div>
                        <div className="text-xl font-bold text-white">12,403</div>
                     </div>
                 </div>

                 {/* Interactive Event Pins (News) */}
                 <div className="absolute top-[30%] left-[28%]">
                    <div className="relative group cursor-pointer">
                        <div className="absolute -inset-4 bg-orange-500/30 rounded-full blur-md animate-pulse"></div>
                        <div className="relative w-4 h-4 bg-orange-500 border-2 border-white rounded-full shadow-lg"></div>
                        {/* Tooltip - NEWS Style */}
                        <div className="absolute left-6 top-0 bg-slate-900 text-white text-[10px] px-2 py-1 rounded border border-slate-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-50">
                           {t.visuals.ui.heatwave}
                        </div>
                    </div>
                 </div>

                 <div className="absolute top-[50%] right-[30%]">
                    <div className="relative group cursor-pointer">
                        <div className="absolute -inset-4 bg-blue-500/30 rounded-full blur-md animate-pulse delay-75"></div>
                        <div className="relative w-4 h-4 bg-blue-500 border-2 border-white rounded-full shadow-lg"></div>
                         {/* Tooltip - NEWS Style */}
                        <div className="absolute left-6 top-0 bg-slate-900 text-white text-[10px] px-2 py-1 rounded border border-slate-700 whitespace-nowrap opacity-100 z-50">
                           {t.visuals.ui.flood}
                        </div>
                    </div>
                 </div>

                 {/* Top Search Bar */}
                 <div className="absolute top-4 left-72 right-4 h-12 bg-slate-950/80 backdrop-blur rounded-lg border border-slate-700 flex items-center px-4 justify-between shadow-lg">
                    <div className="flex items-center gap-2 text-slate-400">
                        <Search className="w-4 h-4" />
                        <span className="text-xs">{t.visuals.ui.search_placeholder}</span>
                    </div>
                    <MoreHorizontal className="w-4 h-4 text-slate-500" />
                 </div>
              </motion.div>
           </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Visuals;