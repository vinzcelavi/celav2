import type React from 'react';
import { cn } from '../../utils/cn';
import MagneticFramer from '../MagneticFramer';

function MenuLink({
  children,
  href,
  target,
  rel,
  hasHover
}: { children: React.ReactNode; href: string; target?: string; rel?: string; hasHover?: boolean }) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
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
  target,
  rel,
  isMagnetic,
  hasHover
}: {
  children: React.ReactNode;
  href: string;
  target?: string;
  rel?: string;
  isMagnetic?: boolean;
  hasHover?: boolean;
}) {
  return (
    <li className="flex items-center">
      {isMagnetic ? (
        <MagneticFramer>
          <MenuLink href={href} target={target} rel={rel} hasHover={hasHover}>
            {children}
          </MenuLink>
        </MagneticFramer>
      ) : (
        <MenuLink href={href} target={target} rel={rel} hasHover={hasHover}>
          {children}
        </MenuLink>
      )}
    </li>
  );
}

export default MenuItem;
