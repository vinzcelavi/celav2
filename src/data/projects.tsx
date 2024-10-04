import axeptioWebsiteHp from '../assets/images/axeptio-website-hp.png';
import axeptio from '../assets/images/axeptio-website.png';
import button from '../assets/images/button-min.png';
import dropdownMenu from '../assets/images/dropdown-menu-min.png';
import gusto from '../assets/images/gusto-min.png';
import input from '../assets/images/input-min.png';
import tasteBeingAble from '../assets/images/taste-being-able.jpeg';
import tasteCreators from '../assets/images/taste-creators.jpeg';
import tasteHero from '../assets/images/taste-hero.jpeg';
import tasteJoinBeta from '../assets/images/taste-join-beta.jpeg';
import screencastWidget from '../assets/videos/screencast-widget.mp4';

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
      { id: 1, img: axeptioWebsiteHp, alt: 'axeptio' },
      { id: 2, img: axeptio, alt: 'axeptio' },
      { id: 3, video: screencastWidget, alt: 'screencast widget' }
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
      { id: 1, img: button, alt: 'button' },
      { id: 2, img: input, alt: 'input' },
      { id: 3, img: gusto, alt: 'gusto' },
      { id: 4, img: dropdownMenu, alt: 'dropdown menu' }
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
      { id: 1, img: tasteHero, alt: 'taste hero' },
      { id: 2, img: tasteJoinBeta, alt: 'taste join beta' },
      { id: 3, img: tasteCreators, alt: 'taste creators' },
      { id: 4, img: tasteBeingAble, alt: 'taste being able' }
    ]
  }
];

export default projects;
