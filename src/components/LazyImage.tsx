import { useEffect, useRef, useState } from 'react';
import { cn } from '../utils/cn';

interface LazyImageProps {
  src: string;
  alt: string;
  placeholder?: string;
  width?: number;
  height?: number;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, placeholder, alt, width, height }) => {
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
    <figure
      className={cn(
        `flex items-center justify-center w-[${width}px] h-[${height}px] bg-white lazy-image bg-cover bg-position-center bg-no-repeat`,
        imageLoaded ? 'loaded' : 'blurred'
      )}
      style={{
        backgroundImage: `url(${placeholder})`,
        backgroundSize: '100% 100%'
      }}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={handleImageLoad}
        className="relative aspect-project-preview"
      />
    </figure>
  );
};

export default LazyImage;
