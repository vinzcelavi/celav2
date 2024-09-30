import React from 'react';
import MagneticFramer from '../MagneticFramer';

function MenuItem({ children, href }: { children: React.ReactNode, href: string }) {
  return (
    <li className="flex items-end">
      <MagneticFramer>
        <a href={href} className="flex h-5 text-sm font-bold tracking-wide uppercase" target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      </MagneticFramer>
    </li>
  )
}

export default MenuItem;