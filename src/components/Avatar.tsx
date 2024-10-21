import { cn } from '../utils/cn';

function Avatar({
  width,
  height,
  isActive,
  className
}: { width: number; height: number; isActive?: boolean; className?: string }) {
  return (
    <div className={cn('relative rounded-full p-[1px] group', className)}>
      <img
        src={`${import.meta.env.VITE_AWS_BUCKET_URL}/images/avatar.avif`}
        width={width}
        height={height}
        loading="lazy"
        className="relative z-10 w-full h-full flex p-[2px] rounded-full bg-slate-950"
        alt="Vincent Bianciotto"
      />
      <div
        className={cn(
          'absolute z-0 inset-0 rounded-full bg-gradient-to-b from-primary via-20% to-secondary transition-all duration-300 opacity-35 group-hover:opacity-100',
          isActive && 'opacity-100'
        )}
      />
    </div>
  );
}

export default Avatar;
