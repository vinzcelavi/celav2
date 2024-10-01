import React, { useState } from 'react';
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
    console.log('email', decodeHtmlEntities(email));
    navigator.clipboard.writeText(decodeHtmlEntities(email));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <span className="flex items-center cursor-pointer">
      <button onClick={copyToClipboard} className="text-sm font-bold tracking-wide uppercase inline-flex items-center cursor-pointer">
        <span className={cn('relative flex items-center justify-center', huge ? 'h-12 w-12 translate-y-0.5' : 'h-4 w-4')}>
          <svg
            width={huge ? 42 : 16}
            height={huge ? 42 : 16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`absolute duration-150 ${!copied ? `transition-all scale-50 opacity-0` : `transition-color opacity-100`}`}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.00004 1.33337C4.31814 1.33337 1.33337 4.31814 1.33337 8.00004C1.33337 11.6819 4.31814 14.6667 8.00004 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00004C14.6667 4.31814 11.6819 1.33337 8.00004 1.33337ZM10.516 6.75555C10.7492 6.47059 10.7072 6.05057 10.4222 5.81742C10.1372 5.58427 9.71722 5.62627 9.48407 5.91124L6.95055 9.00776L6.13811 8.19532C5.87776 7.93497 5.45565 7.93497 5.1953 8.19532C4.93495 8.45567 4.93495 8.87778 5.1953 9.13813L6.52864 10.4715C6.66182 10.6047 6.84513 10.6753 7.03325 10.6659C7.22137 10.6565 7.39674 10.568 7.51601 10.4222L10.516 6.75555Z"
              fill="#f1c40f"
            ></path>
          </svg>
          <svg
            width={huge ? 42 : 16}
            height={huge ? 42 : 16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`absolute duration-150 ${copied ? 'transition-all scale-50 opacity-0' : 'transition-color opacity-100'}`}
          >
            <path
              d="M10 6V3.5C10 2.67157 9.32843 2 8.5 2H3.5C2.67157 2 2 2.67157 2 3.5V8.5C2 9.32843 2.67157 10 3.5 10H6M7.5 6H12.5C13.3284 6 14 6.67157 14 7.5V12.5C14 13.3284 13.3284 14 12.5 14H7.5C6.67157 14 6 13.3284 6 12.5V7.5C6 6.67157 6.67157 6 7.5 6Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </span>
        <span className={cn('transition-color ml-1 duration-150 text-inherit', huge ? 'text-3xl md:text-4xl lowercase' : 'text-sm')}>{label}</span>
      </button>
    </span>
  );
};

export default EmailComponent;
