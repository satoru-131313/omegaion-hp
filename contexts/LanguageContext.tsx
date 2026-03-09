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

// 新機能：アクセス初回時に最適な言語を自動判定する
const getOptimalLanguage = (): Language => {
  // 1. 過去にユーザーが手動で選んだ言語記録があればそれを最優先
  const savedLang = localStorage.getItem('app_language') as Language;
  if (savedLang && SUPPORTED_LANGUAGES.includes(savedLang)) {
    return savedLang;
  }
  
  // 2. ブラウザの設定言語（アクセス地域情報）を取得して自動判定
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('ja')) return 'jp';
  if (browserLang.startsWith('es')) return 'es';
  if (browserLang.startsWith('fr')) return 'fr';
  if (browserLang.startsWith('pt')) return 'pt';
  
  // 3. 上記以外（日本、スペイン、フランス、ポルトガル圏以外）は英語をデフォルトとする
  return 'en';
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [language, setLanguageState] = useState<Language>('jp');

  useEffect(() => {
    // URLのパスから言語を取得（例: /en なら en）
    const pathLang = location.pathname.split('/')[1] as Language;
    
    if (SUPPORTED_LANGUAGES.includes(pathLang)) {
      // URLに言語指定がある場合
      setLanguageState(pathLang);
      localStorage.setItem('app_language', pathLang);
    } else if (location.pathname === '/') {
      // トップページ（言語指定なし）にアクセスした場合、最適な言語を判定
      const optimalLang = getOptimalLanguage();
      
      if (optimalLang === 'jp') {
        // 日本語が最適な場合はそのまま（URLは / のまま）
        setLanguageState('jp');
        localStorage.setItem('app_language', 'jp');
      } else {
        // 日本語以外が最適な場合は、該当する言語のURLへ自動でリダイレクト
        navigate(`/${optimalLang}`, { replace: true });
      }
    }
    // バグの原因だった「language」と「navigate」への依存を監視から外し、誤作動を防止しました
  }, [location.pathname]); 

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('app_language', lang);
    // ボタンが押されたら該当する言語のURLへ正確に遷移する
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