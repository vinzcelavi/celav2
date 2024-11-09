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
        'relative m-0.5 w-8 h-8 box-border select-none text-base text-center uppercase text-slate-200 bg-slate-500/50 backdrop-blur-sm rounded-md',
        keyPressed && 'bg-slate-600/50',
        className
      )}
    >
      <span className="relative top-[0.05rem] font-semibold">{children}</span>
    </button>
  );
}

export default KeyboardKey;
