import { cn } from '../utils/cn';

interface KeyboardKeyProps {
  children: React.ReactNode;
  keyValue?: string;
  keyPressed: boolean;
  className?: string;
}

function KeyboardKey({ children, keyPressed, className }: KeyboardKeyProps) {
  return (
    <button
      type="button"
      className={cn(
        'relative float-left m-[0.2rem] px-[0.2rem] py-[0.375rem] w-[2.25rem] h-auto box-border select-none text-center uppercase text-slate-200 bg-slate-700 border border-solid border-slate-600 shadow-[0_0.2em_0_0_rgba(71,85,105,1)] rounded-[0.25rem]',
        keyPressed && 'bg-slate-800 border-slate-800 top-[0.1em] shadow-[0_0.1em_0_0_rgba(71,85,105,1)]',
        className
      )}
    >
      <span className="text-xs">{children}</span>
    </button>
  );
}

export default KeyboardKey;
