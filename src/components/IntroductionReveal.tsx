import { useState } from 'react';
import { cn } from '../utils/cn';
import PopCornAnimation from './PopCornAnimation';
import reactLogo from '../assets/react.svg';
import nextLogo from '../assets/nextjs.svg';
import typescriptLogo from '../assets/typescript.svg';
import storybookLogo from '../assets/storybook.svg';
import styledComponentsLogo from '../assets/styled-components.svg';
import tailwindLogo from '../assets/tailwind.svg';
import figmaLogo from '../assets/figma.svg';
import framerLogo from '../assets/framer.svg';
import illustratorLogo from '../assets/ai.svg';
import photoshopLogo from '../assets/ps.svg';

const IntroductionReveal = () => {
  const text = "Bonjour, je suis développeur Front-End et Product Designer depuis plus de 10 ans.";
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const appIconsFrontEnd = [
    { name: 'React', icon: <img src={reactLogo} className="w-full" alt="React logo" /> },
    { name: 'NextJS', icon:  <img src={nextLogo} className="w-full" alt="NextJS logo" />},
    { name: 'TypeScript', icon: <img src={typescriptLogo} className="w-full" alt="TypeScript logo" /> },
    { name: 'Storybook', icon: <img src={storybookLogo} className="w-full" alt="Storybook logo" /> },
    { name: 'Styled Components', icon: <img src={styledComponentsLogo} className="w-full" alt="Styled Components logo" /> },
    { name: 'Tailwind', icon: <img src={tailwindLogo} className="w-full" alt="Tailwind logo" /> },
  ];

  const appIconsDesigner = [
    { name: 'Figma', icon: <img src={figmaLogo} className="w-full" alt="Figma logo" /> },
    { name: 'Framer', icon: <img src={framerLogo} className="w-full" alt="Framer logo" /> },
    { name: 'Illustrator', icon: <img src={illustratorLogo} className="w-full" alt="Illustrator logo" /> },
    { name: 'Photoshop', icon: <img src={photoshopLogo} className="w-full" alt="Photoshop logo" /> },
  ];

  return (
    <>
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
              <span className="relative z-10 select-none">{word}{"\u00A0"}</span>
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
    </>
  );
};

export default IntroductionReveal;