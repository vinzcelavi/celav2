import { cn } from '../utils/cn';

function Paragraph({
  children,
  bold,
  white,
  bigger
}: {
  children: React.ReactNode;
  bold?: boolean;
  white?: boolean;
  bigger?: boolean;
}) {
  return (
    <p className={cn('text-slate-400', bold && 'font-semibold', white && 'text-white', bigger && 'text-lg md:text-xl')}>
      {children}
    </p>
  );
}

export default Paragraph;
