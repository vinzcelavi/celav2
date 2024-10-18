import Back from '../assets/svg/back.svg?react';
import Copy from '../assets/svg/copy.svg?react';
import Github from '../assets/svg/github.svg?react';
import Instagram from '../assets/svg/instagram.svg?react';
import Linkedin from '../assets/svg/linkedin.svg?react';
import Send from '../assets/svg/send.svg?react';
import Tick from '../assets/svg/tick.svg?react';

interface IconProps {
  name: string;
  className?: string;
}

const technos = {
  linkedin: <Linkedin />,
  instagram: <Instagram />,
  github: <Github />,
  back: <Back />,
  copy: <Copy />,
  send: <Send />,
  tick: <Tick />
};

function Icon({ name, className = '' }: IconProps) {
  if (!technos[name as keyof typeof technos]) {
    console.warn(`Techno "${name}" not found`);
    return null;
  }

  return <span className={className}>{technos[name as keyof typeof technos]}</span>;
}

export default Icon;
