import Back from '../assets/svg/back.svg?react';
import Github from '../assets/svg/github.svg?react';
import Instagram from '../assets/svg/instagram.svg?react';
import Linkedin from '../assets/svg/linkedin.svg?react';

interface IconProps {
  name: string;
  className?: string;
}

const technos = {
  linkedin: <Linkedin />,
  instagram: <Instagram />,
  github: <Github />,
  back: <Back />
};

function Icon({ name, className = '' }: IconProps) {
  if (!technos[name as keyof typeof technos]) {
    console.warn(`Techno "${name}" not found`);
    return null;
  }

  return <span className={className}>{technos[name as keyof typeof technos]}</span>;
}

export default Icon;
