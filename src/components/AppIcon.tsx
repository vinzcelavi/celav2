import Figma from '../assets/svg/figma.svg?react';
import Framer from '../assets/svg/framer.svg?react';
import Github from '../assets/svg/github.svg?react';
import Illustrator from '../assets/svg/illustrator.svg?react';
import Instagram from '../assets/svg/instagram.svg?react';
import Linkedin from '../assets/svg/linkedin.svg?react';
import Nextjs from '../assets/svg/nextjs.svg?react';
import Photoshop from '../assets/svg/photoshop.svg?react';
import React from '../assets/svg/react.svg?react';
import StorybookFull from '../assets/svg/storybook-full.svg?react';
import Storybook from '../assets/svg/storybook.svg?react';
import StyledComponents from '../assets/svg/styled-components.svg?react';
import TailwindCSS from '../assets/svg/tailwindcss.svg?react';
import TypeScript from '../assets/svg/typescript.svg?react';

interface AppIconProps {
  name: string;
  className?: string;
}

const technos = {
  illustrator: <Illustrator />,
  figma: <Figma />,
  framer: <Framer />,
  nextjs: <Nextjs />,
  photoshop: <Photoshop />,
  react: <React />,
  typescript: <TypeScript />,
  storybook: <Storybook />,
  storybookFull: <StorybookFull />,
  styledComponents: <StyledComponents />,
  tailwindCSS: <TailwindCSS />,
  linkedin: <Linkedin />,
  instagram: <Instagram />,
  github: <Github />
};

function AppIcon({ name, className = '' }: AppIconProps) {
  if (!technos[name as keyof typeof technos]) {
    console.warn(`Techno "${name}" not found`);
    return null;
  }

  return <div className={className}>{technos[name as keyof typeof technos]}</div>;
}

export default AppIcon;
