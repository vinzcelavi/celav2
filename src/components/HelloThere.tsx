import { motion, stagger, useAnimate } from 'framer-motion';
import { useEffect } from 'react';
import { useApp } from '../contexts/AppContext';
import { cn } from '../utils/cn';
import splitStringUsingRegex from '../utils/splitStringUsingRegex';
import Avatar from './Avatar';
const about =
  "With a real passion for design and digital experiences, I aim to create simple, elegant interfaces that are easy to use and pleasing to the eye. For me, each project is an opportunity to blend creativity and technical performance to design tailor-made solutions adapted to my customers needs. In the past, I've been lucky enough to work with companies like Axeptio, Swile and Teads, where I've honed my taste for minimalist, well-thought-out web interfaces. Whether I'm working for ambitious startups or more established companies, I make it a point of honor to take care of every detail of my creations, always keeping the end user at the center of my concerns. When I'm not behind my screen designing applications or websites, you'll probably find me on a squash court, drinking a good beer, or cracking jokes — more or less good, but always with panache! It's this balance between passion, hard work and lightness that keeps me going with enthusiasm on each new project.";

function HelloThere() {
  const [scope, animate] = useAnimate();
  const { helloThereIsOpen, setHelloThereIsOpen } = useApp();
  const staggerCharacters = stagger(0.01, { startDelay: 0 });

  useEffect(() => {
    if (scope.current) {
      document.body.classList.add('overflow-hidden');

      animate(
        'span',
        { opacity: 1 },
        {
          duration: 1,
          delay: staggerCharacters
        }
      );
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [scope.current, animate, staggerCharacters]);

  if (!helloThereIsOpen) return null;

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div
      onClick={() => {
        setHelloThereIsOpen(false);
        document.body.classList.remove('overflow-hidden');
      }}
      className="fixed z-[1000] inset-0 min-h-screen flex flex-col items-stretch cursor-zoom-out overflow-auto overscroll-contain"
    >
      <div
        className={cn(
          'fixed z-40 bottom-12 md:bottom-auto md:top-16 left-1/2 -translate-x-1/2 -ml-[0.875rem] flex items-center gap-2 text-light text-xl font-bold cursor-pointer transition-all duration-500'
        )}
      >
        <svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
          <path
            d="M12.6663 8.00016H3.33301M3.33301 8.00016L7.99967 12.6668M3.33301 8.00016L7.99967 3.3335"
            stroke="white"
            strokeOpacity="0.96"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Back</span>
      </div>

      <div className="fixed z-40 top-8 left-8 md:top-10 md:left-10 lg:left-12 w-[4.5rem] h-[4.5rem]">
        <Avatar isActive alt="avatar" />
      </div>

      {/* Top/Bottom dark to transparent gradient */}
      <div className="fixed z-30 top-1 left-1 right-1 h-36 rounded-md bg-gradient-to-b from-dark to-transparent select-none" />
      <div className="fixed z-30 bottom-1 left-1 right-1 h-40 rounded-md bg-gradient-to-t from-dark to-transparent select-none" />

      {/* Gradient border */}
      <div className="fixed z-0 inset-0 bg-gradient-to-b from-primary to-secondary select-none" />
      {/* Dark background */}
      <div className="fixed z-10 inset-1 bg-dark rounded-md select-none" />

      <p className="relative z-20 block px-8 py-32 pb-52 md:px-10 md:py-40 select-none">
        <span
          ref={scope}
          className="relative z-10 block mx-auto max-w-2xl text-[1.25rem] md:text-[2rem] font-medium text-white/80 leading-snug"
        >
          {splitStringUsingRegex(about).map((char, index) => (
            <motion.span key={`${char}-${index + 1}`} initial={{ opacity: 0 }} className="inline">
              {char}
            </motion.span>
          ))}
        </span>
      </p>
    </div>
  );
}

export default HelloThere;