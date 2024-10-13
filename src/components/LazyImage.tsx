import { useEffect, useRef, useState } from 'react';
import { cn } from '../utils/cn';

interface LazyImageProps {
  src: string;
  alt: string;
  placeholder: string;
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
    <figure className={cn(`w-[${width}px] h-[${height}px] lazy-image bg-cover`, imageLoaded ? 'loaded' : 'blurred')}>
      <span
        className="absolute z-10 inset-0 bg-cover bg-position-center bg-no-repeat blur-[10px]"
        style={{
          backgroundImage: `url(${placeholder})`
        }}
      />
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={handleImageLoad}
        className="relative z-20 image"
      />
    </figure>
  );
};

export default LazyImage;
