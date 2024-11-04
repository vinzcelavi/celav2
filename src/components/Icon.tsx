import { useEffect, useState } from 'react';
import ArrowDown from '../assets/svg/arrow-down.svg?react';
import ArrowLeft from '../assets/svg/arrow-left.svg?react';
import ArrowRight from '../assets/svg/arrow-right.svg?react';
import ArrowUp from '../assets/svg/arrow-up.svg?react';
import Command from '../assets/svg/command.svg?react';
import Copy from '../assets/svg/copy.svg?react';
import Github from '../assets/svg/github.svg?react';
import Instagram from '../assets/svg/instagram.svg?react';
import Language from '../assets/svg/language.svg?react';
import Linkedin from '../assets/svg/linkedin.svg?react';
import Minus from '../assets/svg/minus.svg?react';
import Plus from '../assets/svg/plus.svg?react';
import Send from '../assets/svg/send.svg?react';
import Tick from '../assets/svg/tick.svg?react';

interface IconProps {
  name: string;
  className?: string;
}

const icons = {
  language: <Language />,
  linkedin: <Linkedin />,
  instagram: <Instagram />,
  github: <Github />,
  command: <Command />,
  'arrow-left': <ArrowLeft />,
  'arrow-right': <ArrowRight />,
  'arrow-up': <ArrowUp />,
  'arrow-down': <ArrowDown />,
  copy: <Copy />,
  send: <Send />,
  tick: <Tick />,
  plus: <Plus />,
  minus: <Minus />
};

function Icon({ name, className = '' }: IconProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!icons[name as keyof typeof icons]) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  // Prevent Hydration failed error
  if (!isMounted) return null;

  return <span className={className}>{icons[name as keyof typeof icons]}</span>;
}

export default Icon;
