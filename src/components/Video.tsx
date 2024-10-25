import { useEffect, useRef, useState } from 'react';

function Video({ src }: { src: string }) {
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
    <div className="relative p-0.5 lg:p-1.5 lg:pb-0 -mb-1.5 flex flex-col items-center justify-end bg-white/30 shadow-3xl rounded-[6px] lg:rounded-[9px] border-[1px] border-white/20">
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        className="relative flex grow aspect-project-preview shadow-md rounded-[4px] lg:rounded-[6px]"
      />
    </div>
  );
}

export default Video;
