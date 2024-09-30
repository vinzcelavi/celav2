import { cn } from '../utils/cn';

function Paragraph({ children, bold, white }: { children: React.ReactNode, bold?: boolean, white?: boolean }) {
  return <p className={cn(`text-slate-400`, bold && `font-semibold`, white && `text-white`)}>{children}</p>;
}

export default Paragraph;