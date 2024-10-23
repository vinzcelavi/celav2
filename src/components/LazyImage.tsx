import { useEffect, useRef, useState } from 'react';
import { cn } from '../utils/cn';

interface LazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, width, height, onClick }) => {
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
        `flex items-center justify-center w-[${width}px] h-[${height}px] bg-white lazy-image bg-cover bg-position-center bg-no-repeat`,
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
        className="relative aspect-project-preview"
      />
    </figure>
  );
};

export default LazyImage;
