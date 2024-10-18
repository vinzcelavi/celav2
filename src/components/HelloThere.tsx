import { motion, stagger, useAnimate } from 'framer-motion';
import { useEffect } from 'react';
import { useApp } from '../contexts/AppContext';
import { cn } from '../utils/cn';
import { splitStringUsingRegex } from '../utils/splitStringUsingRegex';
import Avatar from './Avatar';
import Icon from './Icon';

const helloThere = [
  'With a real passion for design 💅 and computer science 👨‍💻, I love to create simple, elegant interfaces that are easy to use and pleasing to the eye. For me, each project is an opportunity to blend creativity and technical performance to design tailor-made solutions adapted to my customers needs.',
  "In the past, I've been lucky enough to work with companies and brands like Axeptio ✋, Swile 💳 and Teads 📺, where I've honed my taste for minimalist, well-thought-out web interfaces. Whether I'm working for ambitious startups or more established companies, I make it a point of honor to take care of every detail of my creations, always keeping the end user at the center of my concerns.",
  "When I'm not behind my screen designing applications or websites, you'll probably find me on a Squash 🏸 court, drinking beers 🍻, or cracking some jokes 🤡 — more or less good, but always with panache!"
];

function HelloThere() {
  const [scope, animate] = useAnimate();
  const { helloThereIsOpen, setHelloThereIsOpen } = useApp();
  const staggerCharacters = stagger(0.015, { startDelay: 0 });

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
      {/* Header container for the back button and the avatar container alignments */}
      <div className="fixed z-50 top-0 left-1/2 -translate-x-1/2 h-full w-full max-w-[140rem] pointer-events-none">
        {' '}
        <div
          className={cn(
            'fixed z-40 bottom-12 left-1/2 -translate-x-1/2 lg:bottom-auto lg:top-16 lg:left-[4.5rem] lg:-translate-x-0 flex items-center gap-2 text-light text-xl font-bold cursor-pointer transition-all duration-500'
          )}
        >
          <Icon name="arrow-left" />
          <span>Back</span>
        </div>
        <div className="w-[4.5rem] h-[4.5rem] fixed z-40 top-6 left-6 md:top-10 md:left-1/2 md:-translate-x-1/2 md:-ml-[18.75rem]">
          <Avatar isActive alt="avatar" />
        </div>
      </div>

      {/* Top/Bottom dark to transparent gradient */}
      <div className="fixed z-30 top-1 left-1 right-1 h-36 rounded-md bg-gradient-to-b from-dark to-transparent select-none" />
      <div className="fixed z-30 bottom-1 left-1 right-1 h-40 rounded-md bg-gradient-to-t from-dark to-transparent select-none" />

      {/* Gradient border */}
      <div className="fixed z-0 inset-0 bg-gradient-to-b from-primary to-secondary select-none" />
      {/* Dark background */}
      <div className="fixed z-10 inset-1 bg-dark rounded-md select-none" />

      <div className="relative z-20 block px-6 py-32 pb-52 md:px-10 md:py-40 select-none">
        <span ref={scope} className="relative z-10 block mx-auto max-w-2xl">
          {helloThere.map((paragraph, index) => (
            <p
              key={`${paragraph}-${index + 1}`}
              className="mb-12 text-[1.25rem] md:text-[2rem] font-medium text-white/80 leading-snug"
            >
              {splitStringUsingRegex(paragraph).map((char, index) => (
                <motion.span key={`${char}-${index + 1}`} initial={{ opacity: 0 }} className="inline">
                  {char}
                </motion.span>
              ))}
            </p>
          ))}
        </span>
      </div>
    </div>
  );
}

export default HelloThere;
