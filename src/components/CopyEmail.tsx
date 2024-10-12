import splitbee from '@splitbee/web';
import type React from 'react';
import { useState } from 'react';
import { cn } from '../utils/cn';

function decodeHtmlEntities(encodedString: string): string {
  return encodedString.replace(/&#(\d+);/g, (_match, dec) => String.fromCharCode(dec));
}

interface EmailComponentProps {
  label: string;
  huge?: boolean;
}

const EmailComponent: React.FC<EmailComponentProps> = ({ label, huge }) => {
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
    <span className="flex items-center cursor-pointer">
      <button
        type="button"
        onClick={copyToClipboard}
        className="text-sm font-bold tracking-wide uppercase inline-flex items-center cursor-pointer"
      >
        <span className={cn('relative hidden md:flex items-center justify-center', huge ? 'h-10 w-10' : 'h-4 w-4')}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            preserveAspectRatio="none"
            className={`absolute duration-150 ${copied ? 'transition-all scale-50 opacity-0' : 'transition-color opacity-100'}`}
            aria-hidden="true"
          >
            <path
              d="M4 2C2.895 2 2 2.895 2 4V17C2 17.552 2.448 18 3 18C3.552 18 4 17.552 4 17V4H17C17.552 4 18 3.552 18 3C18 2.448 17.552 2 17 2H4ZM8 6C6.895 6 6 6.895 6 8V20C6 21.105 6.895 22 8 22H20C21.105 22 22 21.105 22 20V8C22 6.895 21.105 6 20 6H8ZM8 8H20V20H8V8Z"
              style={{ height: '100%' }}
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#f1c40f"
            width="24"
            height="24"
            preserveAspectRatio="none"
            className={`absolute duration-150 ${!copied ? 'transition-all scale-50 opacity-0' : 'transition-color opacity-100'}`}
            aria-hidden="true"
          >
            <path d="M 20.292969 5.2929688 L 9 16.585938 L 4.7070312 12.292969 L 3.2929688 13.707031 L 9 19.414062 L 21.707031 6.7070312 L 20.292969 5.2929688 z" />
          </svg>
        </span>
        <span className={cn('transition-color ml-1 duration-150', huge ? 'text-3xl md:text-4xl lowercase' : 'text-sm')}>
          {label}
        </span>
      </button>
    </span>
  );
};

export default EmailComponent;
