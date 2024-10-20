const appIconsFrontEnd = [
  { id: 1, name: 'React', image: `${import.meta.env.VITE_AWS_BUCKET_URL}/appicons/react.avif` },
  { id: 2, name: 'NextJS', image: `${import.meta.env.VITE_AWS_BUCKET_URL}/appicons/nextjs.avif` },
  {
    id: 3,
    name: 'TypeScript',
    image: `${import.meta.env.VITE_AWS_BUCKET_URL}/appicons/typescript.avif`
  },
  {
    id: 4,
    name: 'Storybook',
    image: `${import.meta.env.VITE_AWS_BUCKET_URL}/appicons/storybook.avif`
  },
  {
    id: 5,
    name: 'Styled Components',
    image: `${import.meta.env.VITE_AWS_BUCKET_URL}/appicons/styled-components.avif`
  },
  {
    id: 6,
    name: 'Tailwind',
    image: `${import.meta.env.VITE_AWS_BUCKET_URL}/appicons/tailwindcss.avif`
  }
];

const appIconsDesigner = [
  { id: 1, name: 'Figma', image: `${import.meta.env.VITE_AWS_BUCKET_URL}/appicons/figma.avif` },
  { id: 2, name: 'Framer', image: `${import.meta.env.VITE_AWS_BUCKET_URL}/appicons/framer.avif` },
  {
    id: 3,
    name: 'Illustrator',
    image: `${import.meta.env.VITE_AWS_BUCKET_URL}/appicons/illustrator.avif`
  },
  {
    id: 4,
    name: 'Photoshop',
    image: `${import.meta.env.VITE_AWS_BUCKET_URL}/appicons/photoshop.avif`
  }
];

export { appIconsFrontEnd, appIconsDesigner };
