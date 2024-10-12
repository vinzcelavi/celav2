import { AnimatePresence, motion } from 'framer-motion';
import { wrap } from 'popmotion';
import type React from 'react';
import { useCallback, useRef, useState } from 'react';
import type { MouseType } from '../types';
import getMouseCoordinates from '../utils/getMouseCoordinates';

const PopCornAnimation = ({ appIcons }: { appIcons: { name: string; icon: React.ReactNode }[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const iconIndex = wrap(0, appIcons.length, currentIndex);

  const [mousePosition, setMousePosition] = useState<MouseType>({
    x: 0,
    y: 0
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  // Function that changes the icon according to mouse position x
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (boxRef.current) {
      setMousePosition(getMouseCoordinates(e.nativeEvent, boxRef.current));
    }
  }, []);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      whileHover={{
        opacity: 1,
        transition: { duration: 0.2 }
      }}
      onMouseMove={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleMouseMove(e)}
      onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
      onClick={() => {
        setCurrentIndex(currentIndex + 1);
      }}
      className="absolute inset-0 flex items-center justify-center cursor-pointer"
    >
      <motion.div
        ref={boxRef}
        animate={{
          x: mousePosition.x - 64,
          y: mousePosition.y - 64
        }}
      >
        <AnimatePresence initial={false} mode="popLayout">
          {appIcons[iconIndex] && (
            <motion.div
              key={iconIndex}
              className="absolute w-[8rem]"
              initial={{
                zIndex: 0,
                scale: 0,
                rotate: -45
              }}
              animate={{
                zIndex: 1,
                scale: 1,
                rotate: 0
              }}
              exit={{
                zIndex: 0,
                scale: 0,
                rotate: -145
              }}
              transition={{
                duration: 0.2,
                type: 'spring',
                stiffness: 200,
                damping: 15,
                ease: 'easeInOut'
              }}
            >
              {appIcons[iconIndex].icon}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default PopCornAnimation;
