import { type ReactNode, createContext, useContext, useEffect, useState } from 'react';

interface LocaleContextType {
  locale: string;
  setLocale: (value: string) => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LocaleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const userLang = navigator.languages?.[0] || navigator.language || '';
  const defaultLocale = userLang.split('-')[0] === 'fr' ? 'fr' : 'en'; // Default to 'en' if no language detected

  const [locale, setLocale] = useState<string>(() => {
    // Check localStorage for a saved locale
    // Avoid error from server side environment
    // https://github.com/pmndrs/jotai/discussions/2639
    try {
      return localStorage.getItem('user-locale') || defaultLocale;
    } catch (error) {
      return defaultLocale;
    }
  });

  useEffect(() => {
    // Save the locale to localStorage whenever it changes
    if (import.meta.env?.MODE !== 'production') {
      localStorage.setItem('user-locale', locale);
    }
  }, [locale]);

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within an LocaleProvider');
  }
  return context;
};

export default LocaleContext;
