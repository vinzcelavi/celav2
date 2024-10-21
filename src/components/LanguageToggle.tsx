import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLocale } from '../contexts/LocaleContext';
import Icon from './Icon';

function LanguageToggle() {
  const { locale, setLocale } = useLocale();
  const [isMounted, setIsMounted] = useState(false);
  const [availableLanguage, setAvailableLanguage] = useState<string>('Français');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (locale === 'en') {
      setAvailableLanguage('Français');
    } else {
      setAvailableLanguage('English');
    }
  }, [locale]);

  if (!isMounted) return null;

  return (
    <motion.button
      type="button"
      initial="initial"
      whileHover="hover"
      exit="exit"
      onClick={() => setLocale(locale === 'en' ? 'fr' : 'en')}
      className="flex items-center gap-0 px-3 py-1.5 rounded-full text-base font-bold hover:bg-white/15 md:hover:gap-2 transition-all duration-150 group cursor-pointer"
    >
      <Icon name="language" className="relative flex items-center justify-center w-5 h-5" />
      <motion.span
        className="inline-flex text-md overflow-hidden"
        variants={{
          initial: { width: 0, scale: 0, opacity: 0 },
          hover: { width: 'auto', scale: 1, opacity: 1 },
          exit: { width: 0, scale: 0, opacity: 0 }
        }}
      >
        {availableLanguage}
      </motion.span>
    </motion.button>
  );
}

export default LanguageToggle;
