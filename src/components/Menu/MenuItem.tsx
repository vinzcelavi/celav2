import type React from 'react';
import { cn } from '../../utils/cn';
import MagneticFramer from '../MagneticFramer';

function MenuLink({ children, href, hasHover }: { children: React.ReactNode; href: string; hasHover?: boolean }) {
  return (
    <a
      href={href}
      className={cn(
        'flex text-sm font-bold tracking-wide uppercase transition-all duration-300',
        hasHover && 'hover:text-primary'
      )}
    >
      {children}
    </a>
  );
}

function MenuItem({
  children,
  href,
  isMagnetic,
  hasHover
}: { children: React.ReactNode; href: string; isMagnetic?: boolean; hasHover?: boolean }) {
  return (
    <li className="flex items-center">
      {isMagnetic ? (
        <MagneticFramer>
          <MenuLink href={href} hasHover={hasHover}>
            {children}
          </MenuLink>
        </MagneticFramer>
      ) : (
        <MenuLink href={href} hasHover={hasHover}>
          {children}
        </MenuLink>
      )}
    </li>
  );
}

export default MenuItem;
