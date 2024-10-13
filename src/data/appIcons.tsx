import figmaLogo from '../assets/svg/figma.svg';
import framerLogo from '../assets/svg/framer.svg';
import illustratorLogo from '../assets/svg/illustrator.svg';
import nextLogo from '../assets/svg/nextjs.svg';
import photoshopLogo from '../assets/svg/photoshop.svg';
import reactLogo from '../assets/svg/react.svg';
import storybookLogo from '../assets/svg/storybook-rough.svg';
import styledComponentsLogo from '../assets/svg/styled-components.svg';
import tailwindLogo from '../assets/svg/tailwindcss.svg';
import typescriptLogo from '../assets/svg/typescript.svg';

const appIconsFrontEnd = [
  { name: 'React', icon: <img src={reactLogo} className="w-full" alt="React logo" /> },
  { name: 'NextJS', icon: <img src={nextLogo} className="w-full" alt="NextJS logo" /> },
  { name: 'TypeScript', icon: <img src={typescriptLogo} className="w-full" alt="TypeScript logo" /> },
  { name: 'Storybook', icon: <img src={storybookLogo} className="w-full" alt="Storybook logo" /> },
  {
    name: 'Styled Components',
    icon: <img src={styledComponentsLogo} className="w-full" alt="Styled Components logo" />
  },
  { name: 'Tailwind', icon: <img src={tailwindLogo} className="w-full" alt="Tailwind logo" /> }
];

const appIconsDesigner = [
  { name: 'Figma', icon: <img src={figmaLogo} className="w-full" alt="Figma logo" /> },
  { name: 'Framer', icon: <img src={framerLogo} className="w-full" alt="Framer logo" /> },
  { name: 'Illustrator', icon: <img src={illustratorLogo} className="w-full" alt="Illustrator logo" /> },
  { name: 'Photoshop', icon: <img src={photoshopLogo} className="w-full" alt="Photoshop logo" /> }
];

export { appIconsFrontEnd, appIconsDesigner };
