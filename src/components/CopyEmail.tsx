import React, { useState } from 'react';

interface EmailComponentProps {
  label: string;
  email: string;
}

const EmailComponent: React.FC<EmailComponentProps> = ({ label, email }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Réinitialiser l'état après 2 secondes
  };

  return (
    <span className="inline-flex translate-y-0.5 cursor-pointer items-center"> 
      {/* hover:text-[#232323]/80 */}
      <button onClick={copyToClipboard} className="text-sm font-bold tracking-wide uppercase inline-flex translate-y-0.5 cursor-pointer items-center">
        <span className="relative flex h-4 w-4 items-center justify-center">
          <svg
            width="16"
            height="16"
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
            width="16"
            height="16"
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
        <span className="transition-color ml-1 duration-150 text-inherit">{label}</span>
      </button>
    </span>
  );
};

export default EmailComponent;
