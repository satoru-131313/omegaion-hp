import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Regulations from './components/Regulations';
import Visuals from './components/Visuals';
import Features from './components/Features';
import FutureScope from './components/FutureScope';
import Pricing from './components/Pricing';
import BottomCTA from './components/BottomCTA';
import Footer from './components/Footer';
import ChapterNav from './components/ChapterNav';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo.png" alt="OmegaIon" className="h-8 w-auto object-contain" />
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 bg-slate-900 border border-slate-700 rounded-lg p-1">
             {(['jp', 'en', 'es', 'fr', 'pt'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-2 py-1 text-xs font-bold rounded uppercase transition-colors ${language === lang ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
                >
                  {lang}
                </button>
             ))}
          </div>
          <a href="https://app.omegaion.com/login" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
            {t.nav.login}
          </a>
        </div>
      </div>
    </nav>
  );
};

// 中身の表示とSEO情報（Helmet）を管理するコンポーネント
const PageContent = () => {
  const { t, language } = useLanguage();

  return (
    <>
      <Helmet>
        <html lang={language === 'jp' ? 'ja' : language} />
        <title>{t.seo.title}</title>
        <meta name="description" content={t.seo.description} />
        <meta name="keywords" content={t.seo.keywords} />
        
        {/* 多言語SEOの最重要タグ（hreflang）：Googleに「どの言語のURLがどこにあるか」を教える */}
        <link rel="alternate" href="https://omegaion.com/" hreflang="ja" />
        <link rel="alternate" href="https://omegaion.com/en" hreflang="en" />
        <link rel="alternate" href="https://omegaion.com/es" hreflang="es" />
        <link rel="alternate" href="https://omegaion.com/fr" hreflang="fr" />
        <link rel="alternate" href="https://omegaion.com/pt" hreflang="pt" />
        <link rel="alternate" href="https://omegaion.com/" hreflang="x-default" />
      </Helmet>

      <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-cyan-500 selection:text-slate-950 relative">
        <Navbar />
        <main>
          <Hero />
          <Problem />
          <ChapterNav />
          <Visuals />
          <Features />
          <Regulations />
          <FutureScope />
          <Pricing />
          <BottomCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

function App() {
  return (
    <HelmetProvider>
      {/* BrowserRouterがURLの管理をする大枠 */}
      <BrowserRouter>
        <LanguageProvider>
          <Routes>
            {/* どのURL（/, /en, /es）でアクセスされてもPageContentを表示し、中のContextが言語を判別する */}
            <Route path="*" element={<PageContent />} />
          </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;