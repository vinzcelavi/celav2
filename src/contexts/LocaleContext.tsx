import { type ReactNode, createContext, memo, useCallback, useContext, useEffect, useMemo, useState } from 'react';

interface LocaleContextType {
  locale: string;
  setLocale: (value: string) => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

const defaultLocale = 'en';
const storageKey = 'user-locale';

export const LocaleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // The server always renders 'en', so the first client render must too,
  // otherwise hydration fails and the whole root is re-rendered on the client.
  const [locale, setLocaleState] = useState<string>(defaultLocale);

  useEffect(() => {
    // Detect the user's locale once hydrated: saved choice first, then browser language
    try {
      const userLang = navigator.languages?.[0] || navigator.language || '';
      const detectedLocale = userLang.split('-')[0] === 'fr' ? 'fr' : 'en';
      setLocaleState(localStorage.getItem(storageKey) || detectedLocale);
    } catch (error) {
      // localStorage can throw (private mode, blocked storage): keep the default
    }
  }, []);

  const setLocale = useCallback((value: string) => {
    setLocaleState(value);
    try {
      localStorage.setItem(storageKey, value);
    } catch (error) {
      // Ignore: the choice just won't persist
    }
  }, []);

  const contextValue = useMemo(() => {
    return { locale, setLocale };
  }, [locale, setLocale]);

  return <LocaleContext.Provider value={contextValue}>{children}</LocaleContext.Provider>;
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within an LocaleProvider');
  }
  return context;
};

const withLocaleFromContext = (Component: React.FC<{ locale: string }>) => {
  const ComponentMemo = memo(Component);

  return () => {
    const { locale } = useLocale();
    return <ComponentMemo locale={locale} />;
  };
};

export { withLocaleFromContext };
export default LocaleContext;
