import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { translations } from '../utils/translations';

type Language = 'jp' | 'en' | 'es' | 'fr' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.jp;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
const SUPPORTED_LANGUAGES: Language[] = ['jp', 'en', 'es', 'fr', 'pt'];

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [language, setLanguageState] = useState<Language>('jp');

  useEffect(() => {
    // URLのパス（/en など）から言語を取得
    const pathLang = location.pathname.split('/')[1] as Language;
    
    if (SUPPORTED_LANGUAGES.includes(pathLang)) {
      if (language !== pathLang) {
        setLanguageState(pathLang);
        localStorage.setItem('app_language', pathLang);
      }
    } else if (location.pathname === '/') {
      // トップページの場合は以前選んだ言語を確認
      const savedLanguage = localStorage.getItem('app_language') as Language;
      if (savedLanguage && SUPPORTED_LANGUAGES.includes(savedLanguage) && savedLanguage !== 'jp') {
          // 過去に英語などを選んでいた場合はそのURLへ飛ばす
          navigate(`/${savedLanguage}`, { replace: true });
      } else {
        setLanguageState('jp');
      }
    }
  }, [location.pathname, navigate, language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('app_language', lang);
    // ボタンが押されたらURLも変更する
    const newPath = lang === 'jp' ? '/' : `/${lang}`;
    navigate(newPath);
  };

  const value = {
    language,
    setLanguage,
    t: translations[language] || translations.jp
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};