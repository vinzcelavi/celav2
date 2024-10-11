import { useEffect, useRef, useState } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, width, height }) => {
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
    <figure className={`lazy-image ${imageLoaded ? 'loaded' : 'blurred'}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={handleImageLoad}
        loading="lazy"
        className="image"
      />
    </figure>
  );
};

export default LazyImage;
