import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState } from 'react';

const AppIconTooltip = ({
  items
}: {
  items: {
    id: number;
    name: string;
    image: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
  // translate the tooltip
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLImageElement>) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div className="flex flex-wrap">
      {items.map((item, _idx) => (
        <div
          className="relative -mr-2 group"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
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
                className="absolute z-50 w-full -top-12 flex text-xs flex-col items-center justify-center"
              >
                <div className="absolute z-30 left-1/2 -translate-x-1/2 py-2 px-4 font-bold text-base rounded-md bg-slate-950/90 text-light">
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <img
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={item.image}
            alt={item.name}
            className="relative object-cover !m-0 !p-0 object-top rounded-xl h-10 w-10 border-2 border-slate-800 group-hover:border-white group-hover:scale-125 group-hover:z-30 transition duration-150"
          />
        </div>
      ))}
    </div>
  );
};

export default AppIconTooltip;
