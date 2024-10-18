import splitbee from '@splitbee/web';
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState } from 'react';
import { useApp } from '../contexts/AppContext';
import Avatar from './Avatar';

function WhoAmI() {
  const { helloThereIsOpen, setHelloThereIsOpen } = useApp();
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(useTransform(x, [-100, 100], [-35, 5]), springConfig);
  // translate the tooltip
  const translateX = useSpring(useTransform(x, [-100, 100], [10, 72]), springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLImageElement>) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <>
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div
        onClick={() => {
          splitbee.track('Click on Avatar');
          setHelloThereIsOpen(!helloThereIsOpen);
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex items-center select-none group hover:cursor-zoom-in"
      >
        <div onMouseMove={handleMouseMove} className="relative flex items-center w-[4.5rem] h-[4.5rem]">
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 260,
                    damping: 10
                  }
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: 'nowrap'
                }}
                className="absolute z-50 w-full -top-2 -left-1/2 -translate-x-1/2 -ml-6 flex text-xs flex-col items-center justify-center pointer-events-none"
              >
                <div className="absolute z-30 top-0 left-0 px-1.5 py-0.5 font-bold text-sm rounded-sm bg-primary text-dark">
                  Hello there!
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <Avatar alt="Vincent Bianciotto" />
        </div>
        <div className="flex flex-col items-baseline pl-4">
          <h1 className="text-lg font-semibold leading-tight">Vincent Bianciotto</h1>
          <span className="text-base bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
            Front-End Designer
          </span>
        </div>
      </div>
    </>
  );
}

export default WhoAmI;
