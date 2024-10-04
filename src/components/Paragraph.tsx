import { cn } from '../utils/cn';

function Paragraph({
  children,
  bold,
  white,
  big,
  bigger
}: {
  children: React.ReactNode;
  bold?: boolean;
  white?: boolean;
  big?: boolean;
  bigger?: boolean;
}) {
  return (
    <p
      className={cn(
        'text-slate-400',
        bold && 'font-semibold',
        white && 'text-white',
        big && 'text-lg md:text-xl',
        bigger && 'text-xl md:text-2xl'
      )}
    >
      {children}
    </p>
  );
}

export default Paragraph;
