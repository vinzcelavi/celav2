import { useEffect, useRef, useState } from 'react';

// Lazy image loader component
const LazyImage = ({ src, alt }: { src: string; alt: string }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  // Function to trigger when image is fully loaded
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // Check if the image is already cached
  useEffect(() => {
    if (imgRef.current?.complete) {
      // If the image is already cached, mark it as loaded
      setImageLoaded(true);
    }
  }, []);

  return (
    <div className={`lazy-image ${imageLoaded ? 'loaded' : 'blurred'}`}>
      <img ref={imgRef} src={src} alt={alt} onLoad={handleImageLoad} className="image" />
    </div>
  );
};

export default LazyImage;
