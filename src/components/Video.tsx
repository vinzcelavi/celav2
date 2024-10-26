import { useEffect, useRef, useState } from 'react';
import { cn } from '../utils/cn';

interface VideoProps {
  src: string;
  className?: string;
  classNameWrapper?: string;
}

function Video({ src, className, classNameWrapper }: VideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the video is visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isVisible) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, [isVisible]);

  return (
    <div
      className={cn(
        'relative flex flex-col items-center justify-end p-[0.375rem] lg:pb-0 -mb-2 bg-white/30 shadow-3xl rounded-[6px] lg:rounded-[9px] border border-white/20',
        classNameWrapper
      )}
    >
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        className={cn('relative flex grow aspect-project-preview shadow-md rounded-[4px] lg:rounded-[6px]', className)}
      />
    </div>
  );
}

export default Video;
