import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations } from '../utils/translations';

type Language = 'jp' | 'en' | 'es' | 'fr' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.jp;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// サポートしている言語のリストを定義
const SUPPORTED_LANGUAGES: Language[] = ['jp', 'en', 'es', 'fr', 'pt'];

// ユーザーにとって最適な初期言語を決定する関数
const getInitialLanguage = (): Language => {
  // 1. 以前にユーザーが手動で選んだ言語（ローカルストレージ）があれば、それを最優先する
  const savedLanguage = localStorage.getItem('app_language') as Language;
  if (savedLanguage && SUPPORTED_LANGUAGES.includes(savedLanguage)) {
    return savedLanguage;
  }

  // 2. ブラウザの設定言語を取得する（例: "ja", "en-US", "fr-FR" など）
  const browserLang = navigator.language.toLowerCase();

  // 3. ブラウザの言語に合わせて表示言語を判定
  // 注意：ブラウザで日本語は 'ja' と判定されるため、アプリ内の 'jp' に変換します
  if (browserLang.startsWith('ja')) return 'jp';
  if (browserLang.startsWith('en')) return 'en';
  if (browserLang.startsWith('es')) return 'es';
  if (browserLang.startsWith('fr')) return 'fr';
  if (browserLang.startsWith('pt')) return 'pt';

  // 4. どれにも当てはまらない場合（ドイツ語など）のデフォルト言語
  // グローバルなプロダクトの場合は 'en'（英語）をデフォルトにするのが一般的です
  return 'en'; 
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // useState の初期値に、先ほど作った判定関数をセットする
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  // 言語（language）が変更されるたびに、ブラウザの保存領域（localStorage）に記憶させる
  useEffect(() => {
    localStorage.setItem('app_language', language);
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: translations[language]
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