import splitbee from '@splitbee/web';
import { motion } from 'framer-motion';
import type React from 'react';
import { useState } from 'react';
import { cn } from '../utils/cn';

function decodeHtmlEntities(encodedString: string): string {
  return encodedString.replace(/&#(\d+);/g, (_match, dec) => String.fromCharCode(dec));
}

interface EmailComponentProps {
  label: string;
}

const EmailComponent: React.FC<EmailComponentProps> = ({ label }) => {
  const [copied, setCopied] = useState(false);
  const email = '&#118;&#105;&#110;&#99;&#101;&#110;&#116;&#64;&#99;&#101;&#108;&#97;&#118;&#105;&#46;&#102;&#114;';
  // ☝🏻 vincent@celavi.fr encoded as HTML entities

  const copyToClipboard = () => {
    navigator.clipboard.writeText(decodeHtmlEntities(email));
    setCopied(true);
    splitbee.track('Copy email');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.button
      type="button"
      initial="initial"
      whileHover="hover"
      exit="exit"
      onClick={copyToClipboard}
      className="flex items-center gap-0 py-1.5 px-2 rounded-full text-sm font-bold hover:bg-white/15 hover:gap-2 transition-all duration-150 group cursor-pointer"
    >
      <span className="relative hidden md:flex items-center justify-center w-5 h-5 md:w-4 md:h-4">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          preserveAspectRatio="none"
          className={cn(
            'absolute duration-150 group-hover:opacity-0 group-hover:scale-50',
            copied && 'transition-all opacity-0 scale-50'
          )}
          aria-hidden="true"
          aria-label="send icon"
        >
          <path d="M22.984.638a.5.5,0,0,0-.718-.559L1.783,10.819a1.461,1.461,0,0,0-.1,2.527h0l4.56,2.882a.25.25,0,0,0,.3-.024L18.7,5.336a.249.249,0,0,1,.361.342L9.346,17.864a.25.25,0,0,0,.062.367L15.84,22.3a1.454,1.454,0,0,0,2.19-.895Z" />
          <path d="M7.885,19.182a.251.251,0,0,0-.385.211c0,1.056,0,3.585,0,3.585a1,1,0,0,0,1.707.707l2.018-2.017a.251.251,0,0,0-.043-.388Z" />
        </svg>
        <svg
          width="24"
          height="24"
          viewBox="0 0 512 512"
          fill="currentColor"
          preserveAspectRatio="none"
          className={cn(
            'absolute duration-150 opacity-0 scale-50',
            copied
              ? 'transition-all scale-50 opacity-0'
              : 'opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100'
          )}
          aria-hidden="true"
          aria-label="copy icon"
        >
          <path d="M448 0H224C188.7 0 160 28.65 160 64v224c0 35.35 28.65 64 64 64h224c35.35 0 64-28.65 64-64V64C512 28.65 483.3 0 448 0zM464 288c0 8.822-7.178 16-16 16H224C215.2 304 208 296.8 208 288V64c0-8.822 7.178-16 16-16h224c8.822 0 16 7.178 16 16V288zM304 448c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V224c0-8.822 7.178-16 16-16h64V160H64C28.65 160 0 188.7 0 224v224c0 35.35 28.65 64 64 64h224c35.35 0 64-28.65 64-64v-64h-48V448z" />
        </svg>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#f1c40f"
          preserveAspectRatio="none"
          className={cn('absolute duration-150 opacity-0 scale-50', copied && 'transition-color opacity-100 scale-100')}
          aria-hidden="true"
          aria-label="tick icon"
        >
          <path d="M 20.292969 5.2929688 L 9 16.585938 L 4.7070312 12.292969 L 3.2929688 13.707031 L 9 19.414062 L 21.707031 6.7070312 L 20.292969 5.2929688 z" />
        </svg>
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
    </motion.button>
  );
};

export default EmailComponent;
