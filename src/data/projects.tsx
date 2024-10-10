const projects = [
  {
    active: true,
    title: 'Axeptio',
    subTitle: 'Website',
    paragraphs: [
      {
        id: 1,
        bold: true,
        white: true,
        bigger: true,
        text: "I designed Axeptio's website with a strong emphasis on creating an intuitive and user-friendly experience. My goal was to present Axeptio's solutions in a way that users could easily grasp, with a smooth and effortless navigation."
      },
      {
        id: 2,
        bold: false,
        white: false,
        bigger: false,
        text: "From a design perspective, I aimed for clarity and simplicity. I crafted a clean, modern look that reflects Axeptio's values of trust and transparency—key elements for a consent management system."
      },
      {
        id: 3,
        bold: false,
        white: false,
        bigger: false,
        text: 'On the development side, I focused on performance and cross-browser compatibility, making sure the website runs smoothly on both desktop and mobile devices.'
      }
    ],
    technos: ['figma', 'nextjs', 'typescript', 'styledComponents'],
    medias: [
      {
        id: 1,
        img: `${import.meta.env.VITE_AWS_BUCKET_URL}/images/axeptio-website-homepage-desktop.png`,
        alt: 'axeptio homepage desktop'
      },
      {
        id: 2,
        img: `${import.meta.env.VITE_AWS_BUCKET_URL}/images/axeptio-website-widget-desktop.png`,
        alt: 'axeptio widget'
      },
      {
        id: 3,
        img: `${import.meta.env.VITE_AWS_BUCKET_URL}/images/axeptio-website-homepage-mobile.png`,
        alt: 'axeptio homepage mobile'
      },
      { id: 4, video: `${import.meta.env.VITE_AWS_BUCKET_URL}/videos/screencast-widget.mp4`, alt: 'screencast widget' },
      {
        id: 5,
        img: `${import.meta.env.VITE_AWS_BUCKET_URL}/images/axeptio-website-pricing-desktop.png`,
        alt: 'axeptio pricing desktop'
      },
      {
        id: 6,
        img: `${import.meta.env.VITE_AWS_BUCKET_URL}/images/axeptio-website-compare-plans-desktop.png`,
        alt: 'axeptio compare plans desktop'
      },
      {
        id: 7,
        video: `${import.meta.env.VITE_AWS_BUCKET_URL}/videos/executive-team-slider.mp4`,
        alt: 'executive team slider'
      },
      {
        id: 8,
        img: `${import.meta.env.VITE_AWS_BUCKET_URL}/images/axeptio-website-contact-desktop.png`,
        alt: 'axeptio contact desktop'
      }
    ]
  },
  {
    active: true,
    title: 'Gusto',
    subTitle: 'Design System',
    paragraphs: [
      {
        id: 1,
        bold: true,
        white: true,
        bigger: true,
        text: 'Gusto is a comprehensive design system crafted for Axeptio, providing a cohesive and intuitive foundation for creating digital experiences.'
      },
      {
        id: 2,
        bold: false,
        white: false,
        bigger: false,
        text: 'Developed with a focus on scalability, consistency, and user-friendliness, Gusto streamlines the design and development process, ensuring that all components, from typography to UI elements, align seamlessly.'
      },
      {
        id: 3,
        bold: false,
        white: false,
        bigger: false,
        text: "It offers a versatile toolkit that empowers designers and developers to build interfaces efficiently, enhancing both the visual identity and functional integrity of Axeptio's digital products."
      }
    ],
    technos: ['figma', 'react', 'typescript', 'storybookFull', 'styledComponents'],
    medias: [
      { id: 1, img: `${import.meta.env.VITE_AWS_BUCKET_URL}/images/gusto-thumbnail.png`, alt: 'gusto thumbnail' },
      {
        id: 2,
        img: `${import.meta.env.VITE_AWS_BUCKET_URL}/images/gusto-typography.png`,
        alt: 'gusto typography'
      },
      {
        id: 3,
        img: `${import.meta.env.VITE_AWS_BUCKET_URL}/images/gusto-primary-button.png`,
        alt: 'gusto primary button'
      },
      {
        id: 4,
        img: `${import.meta.env.VITE_AWS_BUCKET_URL}/images/gusto-button.png`,
        alt: 'gusto button'
      },
      {
        id: 5,
        img: `${import.meta.env.VITE_AWS_BUCKET_URL}/images/gusto-checkbox-radio.png`,
        alt: 'gusto checkbox radio'
      }
    ]
  },
  {
    active: false,
    title: 'Taste',
    subTitle: 'Landing Page',
    paragraphs: [
      {
        id: 1,
        bold: true,
        white: true,
        bigger: true,
        text: 'Taste is an innovative browser extension designed to take control of your online experience by acting as a personal consent manager.'
      },
      {
        id: 2,
        bold: false,
        white: false,
        bigger: false,
        text: 'Say goodbye to the annoyance of cookie banners, as Taste seamlessly filters and manages cookies on websites, automating the entire consent process on your behalf.'
      },
      {
        id: 3,
        bold: false,
        white: false,
        bigger: false,
        text: "With Taste, you regain your browsing freedom, ensuring that your preferences are respected while you navigate the web effortlessly. It's all about giving you back control, so you can focus on what truly matters online."
      }
    ],
    technos: ['figma', 'typescript', 'react', 'styledComponents'],
    medias: [
      { id: 1, img: `${import.meta.env.VITE_AWS_BUCKET_URL}/images/taste-hero.png`, alt: 'taste hero' },
      {
        id: 2,
        video: `${import.meta.env.VITE_AWS_BUCKET_URL}/videos/taste-hero-animation.mp4`,
        alt: 'taste hero animation'
      },
      { id: 3, img: `${import.meta.env.VITE_AWS_BUCKET_URL}/images/taste-join-beta.png`, alt: 'taste join beta' },
      { id: 4, video: `${import.meta.env.VITE_AWS_BUCKET_URL}/videos/open-on-desktop.mp4`, alt: 'open on desktop' }
    ]
  }
];

export default projects;
