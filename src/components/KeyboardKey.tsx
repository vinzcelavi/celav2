import { cn } from '../utils/cn';

interface KeyboardKeyProps {
  children: React.ReactNode;
  keyValue: string;
  keyPressed: boolean;
  onClick: () => void;
}

function KeyboardKey({ children, onClick, keyValue, keyPressed }: KeyboardKeyProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'relative float-left m-[0.2em] px-[0.4em] py-[0.2em] w-[3.3em] h-full box-border cursor-pointer select-none text-center bg-white/30 text-slate-500 border border-solid border-white/25 border-b-white/90 shadow-[0_0.2em_0_0.05em_#ffffff90] rounded-[0.3em]',
        keyValue === 'Escape' && 'text-left',
        keyPressed && 'bg-white/60 top-[0.2em] shadow-[0_0_0_0.05em_#ffffff]'
      )}
    >
      <span className="text-xs">{children}</span>
    </button>
  );
}

export default KeyboardKey;
