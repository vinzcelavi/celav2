import { useEffect, useRef, useState } from 'react';
import { cn } from '../utils/cn';

interface LazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  classNameWrapper?: string;
  onClick?: () => void;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, width, height, className, classNameWrapper, onClick }) => {
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
        'relative p-[0.375rem] lg:pb-0 -mb-3 bg-white/30 rounded-[6px] lg:rounded-[9px] border border-white/20',
        classNameWrapper,
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
        className={cn('relative flex shadow-xl rounded-[4px] lg:rounded-[6px]', className)}
      />
    </figure>
  );
};

export default LazyImage;
