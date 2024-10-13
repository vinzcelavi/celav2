import { motion } from 'framer-motion';
import type React from 'react';

function MenuLink({
  children,
  href,
  label,
  target,
  rel
}: { children: React.ReactNode; href: string; label?: string; target?: string; rel?: string }) {
  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      initial="initial"
      whileHover="hover"
      exit="exit"
      className="flex items-center py-1.5 px-2 rounded-full text-sm font-bold hover:bg-white/15 hover:gap-1 transition-all duration-150"
    >
      <span>{children}</span>
      <motion.span
        className="inline-flex text-md overflow-hidden"
        variants={{
          initial: { width: 0, scale: 0, opacity: 0 },
          hover: { width: 'auto', scale: 1, opacity: 1 },
          exit: { width: 0, scale: 0, opacity: 0 }
        }}
      >
        {label}
      </motion.span>
    </motion.a>
  );
}

function MenuItem({
  children,
  href,
  target,
  label,
  rel
}: {
  children: React.ReactNode;
  href: string;
  target?: string;
  label?: string;
  rel?: string;
}) {
  return (
    <li>
      <MenuLink href={href} label={label} target={target} rel={rel}>
        {children}
      </MenuLink>
    </li>
  );
}

export default MenuItem;
