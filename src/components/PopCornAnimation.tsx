// import splitbee from '@splitbee/web';
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import type React from 'react';
import { useRef, useState } from 'react';
import { isMobile } from 'react-device-detect';

const PopCornAnimation = ({ appIcons }: { appIcons: { id: number; name: string; image: string }[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(useTransform(x, [-100, 100], [-90, 90]), springConfig);
  // translate the tooltip
  const translateX = useSpring(useTransform(x, [-100, 100], [-100, 100]), springConfig);

  // Function that changes the icon according to mouse position x
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLElement) {
      const targetRect = event.target.getBoundingClientRect();
      const eventOffsetX = event.clientX - targetRect.left;
      const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2; // Reduce the effect to make it subtle
      x.set(offsetFromCenter);
    }
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLElement) {
      const touch = event.touches[0];
      const targetRect = event.target.getBoundingClientRect();
      const eventOffsetX = touch.clientX - targetRect.left;
      const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2; // Reduce the effect to make it subtle
      x.set(offsetFromCenter);
    }
  };

  return (
    <motion.span
      ref={containerRef}
      initial={!isMobile ? { opacity: 0 } : {}}
      whileHover={
        !isMobile
          ? {
              opacity: 1,
              transition: { duration: 0.2 }
            }
          : {}
      }
      onMouseMove={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleMouseMove(e)}
      onTouchStart={(e: React.TouchEvent<HTMLDivElement>) => handleTouchStart(e)}
      className="absolute z-20 inset-0 flex items-stretch justify-center"
    >
      {appIcons.map((item, _idx) => (
        <div
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="relative group grow"
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.span
                initial={{ opacity: 0, y: 0, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: -50,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 260,
                    damping: 10
                  }
                }}
                exit={{ opacity: 0, y: 0, scale: 0.6 }}
                style={{
                  rotate: rotate,
                  translateX: translateX
                }}
                className="absolute bottom-1/2 md:bottom-full left-0 w-[4rem] h-[4rem] md:w-[6rem] md:h-[6rem]"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full rounded-2xl md:rounded-[1.5rem] border-4 border-white/15"
                />
                <span className="absolute top-full left-[50%] translate-x-[-50%] flex mt-1 md:mt-2 py-1 px-2 md:py-2 md:px-4 text-sm md:text-xl rounded-md md:rounded-xl font-extrabold bg-slate-950/90 text-white capitalize">
                  {item.name}
                </span>
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      ))}
    </motion.span>
  );
};

export default PopCornAnimation;
