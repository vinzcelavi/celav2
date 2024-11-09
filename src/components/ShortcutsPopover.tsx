import { useEffect, useRef, useState } from 'react';
import { useLocale } from '../contexts/LocaleContext';
import { cn } from '../utils/cn';
import Icon from './Icon';
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

function ShortcutsPopover({ keyPressed }: { keyPressed: string }) {
  const { locale } = useLocale();
  const [i18n, setI18n] = useState<I18nStrings>(englishI18n);
  const [showPopover, setShowPopover] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    setShowPopover(!showPopover);
  };

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log('popoverRef.current', popoverRef.current);
    if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
      handleClose();
    }
  };

  useEffect(() => {
    if (locale === 'fr') {
      setI18n(frenchI18n);
    } else {
      setI18n(englishI18n);
    }
  }, [locale]);

  return (
    <>
      <button
        type="button"
        onClick={handleClose}
        className={cn(
          'fixed z-[60] top-10 left-10 flex items-center justify-center w-6 h-6 p-2 border-2 border-solid rounded-full cursor-pointer select-none hover:text-slate-700 hover:border-white transition-all duration-150',
          showPopover ? 'bg-white border-white text-slate-700' : 'bg-white/10 border-white/30 text-slate-500'
        )}
      >
        <Icon name="command" className="w-5 h-5" />
      </button>

      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div
        className={cn(
          'fixed z-50 inset-0 p-10 hidden lg:flex flex-col',
          showPopover ? 'pointer-events-auto' : 'pointer-events-none'
        )}
        onClick={showPopover ? handleClickOutside : undefined}
      >
        {showPopover && (
          <div
            ref={popoverRef}
            className="relative top-14 flex flex-col gap-6 max-w-[36rem] bg-[#020617e7] backdrop-blur-sm rounded-xl p-10 shadow-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold">{i18n.title}</h2>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-2">
                <span className="flex font-semibold text-slate-300">{i18n.escDescription}</span>
                <KeyboardKey keyValue="Escape" keyPressed={keyPressed === 'Escape'} className="text-xs">
                  esc
                </KeyboardKey>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="flex font-semibold text-slate-300">{i18n.arrowsDescription}</span>
                <div>
                  <KeyboardKey keyValue="ArrowLeft" keyPressed={keyPressed === 'ArrowLeft'}>
                    ◀
                  </KeyboardKey>
                  <KeyboardKey keyValue="ArrowRight" keyPressed={keyPressed === 'ArrowRight'}>
                    ▶
                  </KeyboardKey>
                </div>
              </div>
            </div>

            <div className="flex justify-start">
              <button
                type="button"
                onClick={handleClose}
                className="inline-flex px-[1.5rem] py-[0.5rem] text-base leading-normal font-bold bg-white text-slate-700 rounded-[0.25rem] cursor-pointer"
              >
                {i18n.closeButton}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ShortcutsPopover;
