import { Suspense } from 'react';
import Menu from './Menu/Menu';
import MagneticFramer from './MagneticFramer';
import CopyEmail from './CopyEmail';

function Footer() {
  return (
    <footer className="flex flex-col md:items-center justify-center py-16">
      <Suspense fallback={<span>...</span>}>
        <MagneticFramer>
          <CopyEmail label="vincent@celavi.fr" huge />
        </MagneticFramer>
      </Suspense>

      <div className="py-6">
        <Menu />
      </div>

      <p className="text-base text-gray-500">
        Celavi © 2024 Vincent Bianciotto.{' '}
        <a href="https://github.com/vinzcelavi/celav2-fr/blob/main/mit.md" className="text-white/80 hover:text-white transition-all duration-300">
          MIT licence
        </a>
        .{' '}
        <a href="https://github.com/vinzcelavi/celav2-fr/blob/main/" className="text-white/80 hover:text-white transition-all duration-300">
          Source code
        </a>
        .
      </p>
    </footer>
  )
}

export default Footer; 