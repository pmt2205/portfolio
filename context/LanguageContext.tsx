"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { translations, Language } from "../data/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language | null;
    if (savedLang === "vi" || savedLang === "en") {
      setLanguageState(savedLang);
    } else {
      // Default browser language matching or fallback to English
      const browserLang = navigator.language.slice(0, 2);
      if (browserLang === "vi") {
        setLanguageState("vi");
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): any => {
    const keys = key.split(".");
    let current: any = translations[language];
    for (const k of keys) {
      if (current === undefined || current === null) return key;
      current = current[k];
    }
    return current !== undefined ? current : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
