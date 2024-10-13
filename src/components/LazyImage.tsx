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
  const imgRef = useRef<HTMLImageElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleImageLoad = () => {
    if (imgRef.current) {
      setImageLoaded(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the video is visible
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);

      if (imgRef.current.complete) {
        setImageLoaded(true);
      }
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <figure
      className={cn(
        `w-[${width}px] h-[${height}px] bg-white/20 lazy-image bg-cover`,
        imageLoaded ? 'loaded' : 'blurred'
      )}
    >
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
        onLoad={isVisible ? handleImageLoad : undefined}
        className="relative z-20 image"
      />
    </figure>
  );
};

export default LazyImage;
