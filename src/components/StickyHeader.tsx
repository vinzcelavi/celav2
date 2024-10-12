import { useEffect, useState } from 'react';
import { cn } from '../utils/cn';
import Avatar from './Avatar';
import Menu from './Menu/Menu';

function StickyHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < lastScrollY;
      const isAboveThreshold = currentScrollY >= 400;
      const isNotAtBottom = window.innerHeight + window.scrollY < document.body.offsetHeight - 200;

      if (isScrollingUp && isAboveThreshold && isNotAtBottom) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        'fixed top-0 left-[50%] -translate-x-1/2 z-50 transition-all duration-300 -translate-y-full scale-50',
        isVisible && 'translate-y-0 scale-100'
      )}
    >
      <div className="relative top-4 flex justify-between items-center gap-4 p-2 pr-6 rounded-full bg-slate-950">
        <div className="flex items-center w-12 h-12">
          <Avatar alt="Vincent Bianciotto" />
        </div>

        <Menu isShorten isMagnetic hasEmail />
      </div>
    </header>
  );
}

export default StickyHeader;
