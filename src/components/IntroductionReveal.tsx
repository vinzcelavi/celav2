import { appIconsDesigner, appIconsFrontEnd } from '../data/appIcons';
import { cn } from '../utils/cn';
import PopCornAnimation from './PopCornAnimation';

const IntroductionReveal = () => {
  const text = "Hello, I've been a Front-End Developer and Product Designer for over ten years.";

  return (
    <div className="relative z-50 flex flex-col justify-center mb-20 md:mb-40">
      <h1 className="font-extrabold text-5xl text-intro leading-[1.25] text-white">
        {text.split(' ').map((word, index) => {
          const isKeyword = ['front-end', 'designer'].includes(word.toLowerCase());
          const isFrontEnd = word.toLowerCase() === 'front-end';
          const isDesigner = word.toLowerCase() === 'designer';

          return (
            <span
              key={word}
              className={cn(
                'relative z-0 inline-block whitespace-nowrap will-change-transform animate-word-reveal [animation-fill-mode:backwards]',
                isKeyword && 'text-black z-10'
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="relative z-10">
                {word}
                {'\u00A0'}
              </span>
              {(isFrontEnd || isDesigner) && (
                <PopCornAnimation appIcons={isFrontEnd ? appIconsFrontEnd : appIconsDesigner} />
              )}
              {isKeyword && (
                <span
                  className={cn(
                    'absolute z-0 top-0 left-[-4px] w-0 h-full border-l-2 border-r-2 rotate-[-0.75deg] origin-top-left animate-marker-animation duration-200',
                    isFrontEnd ? 'border-primary bg-primary' : 'border-secondary bg-secondary'
                  )}
                  style={{ animationDelay: `${index * 0.05}s` }}
                />
              )}
            </span>
          );
        })}
      </h1>
    </div>
  );
};

export default IntroductionReveal;
