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

export { appIconsFrontEnd, appIconsDesigner };