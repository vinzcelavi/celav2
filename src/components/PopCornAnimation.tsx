import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';

interface Position {
  x: number;
  y: number;
}

interface Offset {
  left: number;
  top: number;
  width: number;
  height: number;
}

function getRelativeCoordinates(event: MouseEvent, referenceElement: HTMLElement): Position {
  const position: Position = {
    x: event.pageX,
    y: event.pageY
  };

  const offset: Offset = {
    left: referenceElement.offsetLeft,
    top: referenceElement.offsetTop,
    width: referenceElement.clientWidth,
    height: referenceElement.clientHeight
  };

  let reference: HTMLElement | null = referenceElement.offsetParent as HTMLElement;

  while (reference) {
    offset.left += reference.offsetLeft;
    offset.top += reference.offsetTop;
    reference = reference.offsetParent as HTMLElement;
  }

  return {
    x: position.x - offset.left,
    y: position.y - offset.top,
  };
}

const PopCornAnimation = ({ appIcons }: { appIcons: { name: string, icon: React.ReactNode }[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const iconIndex = wrap(0, appIcons.length, currentIndex);

  const [mousePosition, setMousePosition] = useState<Position>({
    x: 0,
    y: 0,
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  // Function that changes the icon according to mouse position x
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (boxRef.current) {
      setMousePosition(getRelativeCoordinates(e.nativeEvent, boxRef.current));
    }
  }, []);;

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      whileHover={{
        opacity: 1,
        transition: { duration: 0.2 },
      }}
      onMouseMove={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleMouseMove(e)}
      onClick={() => setCurrentIndex(currentIndex + 1)}
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
                rotate: -45,
              }}
              animate={{ 
                zIndex: 1, 
                scale: 1,
                rotate: 0
              }}
              exit={{ 
                zIndex: 0, 
                scale: 0,
                rotate: -145,
              }}
              transition={{
                duration: 0.2,
                type: 'spring',
                stiffness: 200,
                damping: 15,
                ease: 'easeInOut',
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
