import { useEffect, useState } from 'react';
import { useLocale } from '../contexts/LocaleContext';
import KeyboardKey from './KeyboardKey';

interface I18nStrings {
  title: string;
  escDescription: string;
  arrowsDescription: string;
  closeButton: string;
}

const frenchI18n: I18nStrings = {
  title: 'Raccourcis clavier',
  escDescription: 'Appuyez sur ESC pour fermer',
  arrowsDescription: 'Utilisez les flèches gauche/droite pour naviguer',
  closeButton: "D'accord, j'ai compris"
};

const englishI18n: I18nStrings = {
  title: 'Keyboard shortcuts',
  escDescription: 'Press ESC to close',
  arrowsDescription: 'Use left/right arrows to swipe',
  closeButton: 'Alright, got it'
};

function ShortcutsModal({ keyPressed }: { keyPressed: string }) {
  const { locale } = useLocale();
  const [i18n, setI18n] = useState<I18nStrings>(englishI18n);
  const [showOnFirstRender, setShowOnFirstRender] = useState(true);

  const handleClose = () => {
    setShowOnFirstRender(false);
    localStorage.setItem('shortcutsModalShown', 'true');
  };

  useEffect(() => {
    // Check localStorage for the "shown" flag
    const hasShownBefore = localStorage.getItem('shortcutsModalShown');

    if (locale === 'fr') {
      setI18n(frenchI18n);
    } else {
      setI18n(englishI18n);
    }

    if (hasShownBefore) {
      // Show the component since it's the first render
      setShowOnFirstRender(false);
      // Set the "shown" flag in localStorage to prevent future displays
      localStorage.setItem('shortcutsModalShown', 'true');
    }
  }, [locale]);

  return (
    showOnFirstRender && (
      <div className="fixed z-50 inset-0 hidden lg:flex flex-col items-center justify-center bg-[#020617e7]">
        <div className="py-16 max-w-[40rem]">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8">{i18n.title}</h2>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="flex min-w-[24rem] font-semibold text-slate-300">{i18n.escDescription}</span>
              <KeyboardKey keyValue="Escape" keyPressed={keyPressed === 'Escape'} className="text-xs">
                esc
              </KeyboardKey>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex min-w-[24rem] font-semibold text-slate-300">{i18n.arrowsDescription}</span>
              <div>
                <KeyboardKey keyValue="ArrowLeft" keyPressed={keyPressed === 'ArrowLeft'} className="text-xs">
                  ◀
                </KeyboardKey>
                <KeyboardKey keyValue="ArrowRight" keyPressed={keyPressed === 'ArrowRight'} className="text-xs">
                  ▶
                </KeyboardKey>
              </div>
            </div>

            <div className="flex justify-start mt-8">
              <button
                type="button"
                onClick={handleClose}
                className="inline-flex px-[1.5rem] py-[0.5rem] text-base leading-normal font-bold bg-white text-slate-700 rounded-[0.25rem] cursor-pointer"
              >
                {i18n.closeButton}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default ShortcutsModal;
