import splitbee from '@splitbee/web';
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useApp } from '../contexts/AppContext';
import { useLocale } from '../contexts/LocaleContext';
import Avatar from './Avatar';

function WhoAmI() {
  const { locale } = useLocale();
  const [welcomeMessage, setWelcomeMessage] = useState<string>('Hello there!');
  const { helloThereIsOpen, setHelloThereIsOpen } = useApp();
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(useTransform(x, [-100, 100], [-35, 5]), springConfig);
  // translate the tooltip
  const translateX = useSpring(useTransform(x, [-100, 100], [10, 72]), springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLImageElement>) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  useEffect(() => {
    if (locale === 'en') {
      setWelcomeMessage('Hello there!');
    } else {
      setWelcomeMessage('Bonjour !');
    }
  }, [locale]);

  return (
    <>
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div
        onClick={() => {
          splitbee.track('Click on Avatar');
          setHelloThereIsOpen(!helloThereIsOpen);
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex items-center select-none group hover:cursor-zoom-in"
      >
        <div onMouseMove={handleMouseMove} className="relative flex items-center w-[4.5rem] h-[4.5rem]">
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 260,
                    damping: 10
                  }
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: 'nowrap'
                }}
                className="absolute z-50 flex text-xs flex-col items-center justify-center w-full -top-2 -left-1/2 -translate-x-1/2 -ml-6 pointer-events-none"
              >
                <div className="absolute z-30 top-0 left-0 px-1.5 py-0.5 font-bold text-sm rounded-sm bg-primary text-dark">
                  {welcomeMessage}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <Avatar className="w-[4.5rem] h-[4.5rem]" width={72} height={72} />
        </div>
        <div className="flex flex-col items-baseline pl-4">
          <h1 className="text-md md:text-lg font-semibold leading-tight">Vincent Bianciotto</h1>
          <span className="text-sm md:text-base bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Front-End Designer
          </span>
        </div>
      </div>
    </>
  );
}

export default WhoAmI;
