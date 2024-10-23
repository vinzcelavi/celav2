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
        'relative pt-0.5 px-0.5 lg:pt-1.5 lg:px-1.5 lg:pb-0 flex flex-col items-center justify-end bg-white/30 rounded-[6px] lg:rounded-t-[9px] lg:rounded-b-none border-[1px] border-white/20 lg:border-b-0',
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
        className="relative flex grow aspect-project-preview shadow-xl rounded-[4px] lg:rounded-[6px] lg:rounded-b-none"
      />
    </figure>
  );
};

export default LazyImage;
