import { motion } from 'framer-motion';
import type React from 'react';
import { useCallback, useRef, useState } from 'react';
import { isMobile } from 'react-device-detect';
import type { MouseType } from '../types';
import getMouseCoordinates from '../utils/getMouseCoordinates';

const avatarMotion = {
  initial: {
    width: 72,
    height: 72
  },
  tap: {
    width: 144,
    height: 144
  },
  exit: {
    width: 72,
    height: 72
  }
};

function Avatar({ alt }: { alt: string }) {
  return (
    <div
      style={{
        backgroundImage: `url(${import.meta.env.VITE_AWS_BUCKET_URL}/images/avatar.avif})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      className="flex w-full h-full rounded-full outline outline-1 outline-offset-2 outline-white/10 group-hover:outline-white/70 transition-all duration-300"
    >
      <span className="sr-only">{alt}</span>
    </div>
  );
}

function WhoAmI() {
  const [mousePosition, setMousePosition] = useState<MouseType>({
    x: 0,
    y: 0
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  // Function that changes the icon according to mouse position x
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      setMousePosition(getMouseCoordinates(e.nativeEvent, containerRef.current));
    }
  }, []);

  return (
    <motion.div
      ref={containerRef}
      initial="initial"
      whileTap="tap"
      exit="exit"
      onMouseMove={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleMouseMove(e)}
      className="flex items-center select-none group hover:cursor-zoom-in"
    >
      <motion.div
        variants={avatarMotion}
        transition={{
          duration: 0.8,
          type: 'spring',
          stiffness: 200,
          damping: 30,
          ease: 'easeInOut'
        }}
      >
        <Avatar src={avatar} alt="avatar" />
      </motion.div>
      <div className="flex flex-col items-baseline pl-4">
        <h1 className="text-lg font-semibold leading-tight">Vincent Bianciotto</h1>
        <span className="text-base bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Front-End Designer
        </span>
      </div>

      {!isMobile && (
        <motion.span
          ref={tooltipRef}
          animate={{
            zIndex: 10,
            x: mousePosition.x + 20,
            y: mousePosition.y + 30
          }}
          className="absolute top-0 left-0 text-xs text-gray-400 font-semibold uppercase tracking-wider [text-shadow:_0_2px_5px_rgb(0_0_0_/_60%)] group-active:opacity-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          Hold and press
        </motion.span>
      )}
    </motion.div>
  );
}

export default WhoAmI;
