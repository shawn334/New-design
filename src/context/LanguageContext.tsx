import React, { createContext, useState, useContext, ReactNode } from 'react';
import { SITE_CONTENT } from '../constants';

type Language = 'en' | 'zh';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof SITE_CONTENT['en'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en');

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: SITE_CONTENT[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
