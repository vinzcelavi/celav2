import { isMobile } from 'react-device-detect';
import { cn } from '../utils/cn';

function Avatar({ alt }: { alt: string }) {
  return (
    <div className="relative w-full h-full rounded-full p-[1px] group">
      <div className="relative z-10 flex w-full h-full rounded-full bg-slate-950 p-[2px]">
        <div
          style={{
            backgroundImage: `url(${import.meta.env.VITE_AWS_BUCKET_URL}/images/avatar.avif)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
          className="flex w-full h-full rounded-full"
        >
          <span className="sr-only">{alt}</span>
        </div>
      </div>
      <div
        className={cn(
          'absolute z-0 inset-0 rounded-full bg-gradient-to-br from-primary via-20% to-secondary transition-all duration-300 opacity-35 group-hover:opacity-100',
          isMobile && 'opacity-100'
        )}
      />
    </div>
  );
}

export default Avatar;
