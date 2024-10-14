import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { cn } from '../utils/cn';
import Avatar from './Avatar';
import Menu from './Menu/Menu';

function StickyNotch() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isAboveThreshold = currentScrollY >= 400;
      const isNotAtBottom = window.innerHeight + window.scrollY < document.body.offsetHeight - 600;

      if (isAboveThreshold && isNotAtBottom) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        `fixed z-50 left-[50%] -translate-x-1/2 select-none scale-50 transition-all duration-300 ${isMobile ? 'bottom-0 translate-y-full' : 'top-0 -translate-y-full'}`,
        isMobile && isVisible && 'bottom-8 translate-y-0 scale-100',
        !isMobile && isVisible && 'top-8 translate-y-0 scale-100'
      )}
    >
      <div className="relative flex justify-between items-center gap-2 p-2 rounded-full bg-black shadow-[0_1px_2px_rgba(0,0,0,0.07),0_2px_4px_rgba(0,0,0,0.07),0_4px_8px_rgba(0,0,0,0.07),0_8px_16px_rgba(0,0,0,0.07),0_16px_32px_rgba(0,0,0,0.07),0_32px_64px_rgba(0,0,0,0.07)]">
        <motion.div
          initial="initial"
          whileHover="hover"
          whileTap="hover"
          exit="exit"
          className="flex items-center cursor-default group hover:gap-1"
        >
          <span className="flex w-8 h-8">
            <Avatar alt="Vincent Bianciotto" />
          </span>
          <motion.span
            className="inline-flex text-sm font-bold whitespace-nowrap bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent overflow-hidden"
            variants={{
              initial: { width: 0, scale: 0, opacity: 0 },
              hover: { width: 'auto', scale: 1, opacity: 1 },
              exit: { width: 0, scale: 0, opacity: 0 }
            }}
          >
            vinzcelavi
          </motion.span>
        </motion.div>

        <Menu />
      </div>
    </header>
  );
}

export default StickyNotch;
