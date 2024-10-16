import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity
} from 'framer-motion';
import { useRef } from 'react';
import { cn } from '../../utils/cn';
import { wrap } from '../../utils/wrap';
import WorkTitleOutline from './work-title-outline.svg?react';
import WorkTitle from './work-title.svg?react';

function TitleWork({ textOutline = false, reverse = false }: { textOutline?: boolean; reverse?: boolean }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    stiffness: 300,
    damping: 50
  });
  const skewVelocity = useSpring(scrollVelocity, {
    stiffness: 100,
    damping: 30
  });

  const skewVelocityFactor = useTransform(skewVelocity, [-2000, 2000], [-8, 8]);

  const velocityFactor = useTransform(smoothVelocity, [0, 350], [0, 1], {
    clamp: false
  });
  const x = useTransform(baseX, (v) => `${wrap(-300, 300, v)}%`);
  const directionFactor = useRef<number>(1);

  useAnimationFrame((_t, delta) => {
    let moveBy = directionFactor.current * -4 * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = reverse ? -1 : 1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = reverse ? 1 : -1;
    }
    if (velocityFactor.get() !== 0) {
      moveBy += directionFactor.current * moveBy * velocityFactor.get();
      baseX.set(baseX.get() + moveBy);
    }
  });

  return (
    <div className="relative -mx-12 font-black text-slate-900 overflow-hidden">
      <motion.h2
        style={{ x }}
        className={cn('relative flex items-center flex-nowrap -ml-[21rem]', reverse && '-ml-[64rem]')}
      >
        {Array(12)
          .fill(null)
          .map((_, index) => (
            <motion.span
              key={`${index + 1}-work-outline`}
              style={{ skew: skewVelocityFactor }}
              className="shrink-0 w-[22rem] md:w-[42rem]"
            >
              {textOutline ? <WorkTitleOutline /> : <WorkTitle />}
            </motion.span>
          ))}
        <span className="sr-only">Work.</span>
      </motion.h2>
    </div>
  );
}

export default TitleWork;
