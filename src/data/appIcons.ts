const appIconsFrontEnd = [
  { id: 1, name: 'React', image: `${import.meta.env.VITE_AWS_BUCKET_URL}/svg/react.svg` },
  { id: 2, name: 'NextJS', image: `${import.meta.env.VITE_AWS_BUCKET_URL}/svg/nextjs.svg` },
  {
    id: 3,
    name: 'TypeScript',
    image: `${import.meta.env.VITE_AWS_BUCKET_URL}/svg/typescript.svg`
  },
  {
    id: 4,
    name: 'Storybook',
    image: `${import.meta.env.VITE_AWS_BUCKET_URL}/svg/storybook-rough.svg`
  },
  {
    id: 5,
    name: 'Styled Components',
    image: `${import.meta.env.VITE_AWS_BUCKET_URL}/svg/styled-components.svg`
  },
  {
    id: 6,
    name: 'Tailwind',
    image: `${import.meta.env.VITE_AWS_BUCKET_URL}/svg/tailwindcss.svg`
  }
];

const appIconsDesigner = [
  { id: 1, name: 'Figma', image: `${import.meta.env.VITE_AWS_BUCKET_URL}/svg/figma.svg` },
  { id: 2, name: 'Framer', image: `${import.meta.env.VITE_AWS_BUCKET_URL}/svg/framer.svg` },
  {
    id: 3,
    name: 'Illustrator',
    image: `${import.meta.env.VITE_AWS_BUCKET_URL}/svg/illustrator.svg`
  },
  {
    id: 4,
    name: 'Photoshop',
    image: `${import.meta.env.VITE_AWS_BUCKET_URL}/svg/photoshop.svg`
  }
];

export { appIconsFrontEnd, appIconsDesigner };
