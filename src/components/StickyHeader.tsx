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

      if (currentScrollY < lastScrollY && currentScrollY >= 1000) {
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
        'fixed top-0 w-full z-50 bg-slate-950 transition-all duration-300 -translate-y-full',
        isVisible && 'translate-y-0'
      )}
    >
      <div className="flex justify-between items-center py-2 px-6 md:px-8 lg:px-12">
        <div className="flex items-center w-12 h-12">
          <Avatar alt="Vincent Bianciotto" />
        </div>

        <div className="hidden md:flex">
          <Menu isShorten isMagnetic hasEmail />
        </div>
      </div>
    </header>
  );
}

export default StickyHeader;
