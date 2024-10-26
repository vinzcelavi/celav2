import { useEffect, useRef, useState } from 'react';
import { cn } from '../utils/cn';

interface LazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  onClick?: () => void;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, width, height, className, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  useEffect(() => {
    if (imgRef.current?.complete) {
      setImageLoaded(true);
    }
  }, []);

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <figure
      className={cn(
        'relative p-0.5 lg:p-1.5 lg:pb-0 -mb-2 flex flex-col items-center justify-end bg-white/30 rounded-[6px] lg:rounded-[9px] border border-white/20',
        className,
        imageLoaded ? 'loaded' : 'blurred'
      )}
      onClick={onClick}
    >
      <img
        ref={imgRef}
        src={src}
        onLoad={handleImageLoad}
        loading="lazy"
        alt={alt}
        width={width}
        height={height}
        className="relative flex grow aspect-project-preview shadow-xl rounded-[4px] lg:rounded-[6px]"
      />
    </figure>
  );
};

export default LazyImage;
