import splitbee from '@splitbee/web';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { cn } from '../utils/cn';
import { decodeHtmlEntities } from '../utils/decodeHtmlEntities';
import Icon from './Icon';

interface EmailComponentProps {
  label: string;
}

const EmailComponent: React.FC<EmailComponentProps> = ({ label }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = '&#118;&#105;&#110;&#99;&#101;&#110;&#116;&#64;&#99;&#101;&#108;&#97;&#118;&#105;&#46;&#102;&#114;';
  // ☝🏻 vincent@celavi.fr encoded as HTML entities

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(decodeHtmlEntities(email));
    setCopied(true);
    splitbee.track('Copy email');
    setTimeout(() => setCopied(false), 2000);
  };

  // Prevent Hydration failed error
  if (!isMounted) return null;

  if (isMobile) {
    return (
      <a
        data-splitbee-event="Click on 'Mailto' notch on mobile"
        href={`mailto:${decodeHtmlEntities(email)}`}
        className="flex items-center gap-0 py-1.5 px-2 rounded-full text-base font-bold hover:bg-white/15 transition-all duration-150 group cursor-pointer"
      >
        <Icon name="send" className="relative flex items-center justify-center w-5 h-5" />
      </a>
    );
  }

  return (
    <motion.a
      initial="initial"
      whileHover="hover"
      exit="exit"
      // biome-ignore lint/a11y/useValidAnchor: <explanation>
      onClick={copyToClipboard}
      className="flex items-center gap-0 px-3 py-1.5 rounded-full text-base font-bold hover:bg-white/15 md:hover:gap-2 transition-all duration-150 group cursor-pointer"
    >
      <span className="relative flex items-center justify-center w-5 h-5">
        <Icon
          name="send"
          className={cn(
            'absolute duration-150 group-hover:opacity-0 group-hover:scale-50',
            copied && 'transition-all opacity-0 scale-50'
          )}
        />
        <Icon
          name="copy"
          className={cn(
            'absolute duration-150 opacity-0 scale-50',
            copied
              ? 'transition-all scale-50 opacity-0'
              : 'opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100'
          )}
        />
        <Icon
          name="tick"
          className={cn(
            'absolute duration-150 opacity-0 scale-50 text-primary',
            copied && 'transition-color opacity-100 scale-100'
          )}
        />
      </span>
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
};

export default EmailComponent;
