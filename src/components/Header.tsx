import { useEffect, useState } from 'react';
import Menu from './Menu/Menu';
import WhoAmI from './WhoAmI';

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY === 0) {
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
      className={`sticky top-0 z-50 bg-background transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex justify-between items-center h-40 px-6 md:px-8 lg:px-12">
        <WhoAmI />
        <div className="hidden md:flex">
          <Menu isShorten isMagnetic hasEmail />
        </div>
      </div>
    </header>
  );
}

export default Header;
