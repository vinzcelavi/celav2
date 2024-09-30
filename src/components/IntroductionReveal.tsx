import { useState } from 'react';
import { cn } from '../utils/cn';
import PopCornAnimation from './PopCornAnimation';
import { appIconsFrontEnd, appIconsDesigner } from '../data/appIcons';

const IntroductionReveal = () => {
  const text = "Hello, I've been a Front-End Developer and Product Designer for over ten years.";
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex justify-center">
      <h2 className="font-extrabold !leading-[1.25] ~md/lg:~text-5xl/8xl text-white">
        {text.split(' ').map((word, index) => {
          const isKeyword = ['front-end', 'designer'].includes(word.toLowerCase());
          const isFrontEnd = word.toLowerCase() === 'front-end';
          const isDesigner = word.toLowerCase() === 'designer';

          return (
            <span
              key={`${word}-${index}`}
              onMouseOver={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={
                cn(
                  'relative z-0 inline-block whitespace-nowrap will-change-transform animate-word-reveal [animation-fill-mode:backwards]',
                  isKeyword && 'text-black z-10',
                )
              }
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="relative z-10">{word}{"\u00A0"}</span>
              {isFrontEnd ? <span className="absolute z-20 inset-0"><PopCornAnimation appIcons={appIconsFrontEnd} /></span> : null}
              {isDesigner ? <span className="absolute z-20 inset-0"><PopCornAnimation appIcons={appIconsDesigner} /></span> : null}
              {isKeyword && (
                <span
                  className={
                    cn(
                      'absolute z-0 top-0 left-[-4px] w-0 h-full border-l-2 border-r-2 rotate-[-0.75deg] origin-top-left animate-marker-animation duration-200',
                      isFrontEnd ? 'border-primary bg-primary' : 'border-secondary bg-secondary',
                      hoveredIndex === index && 'border-white bg-white'
                    )
                  }
                  style={{ animationDelay: `${index * 0.05}s` }}
                />
              )}
            </span>
          )
        })}
      </h2>
    </div>
  );
};

export default IntroductionReveal;