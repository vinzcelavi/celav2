import tasteHero from '../assets/images/taste-hero.jpeg';
import tasteJoinBeta from '../assets/images/taste-join-beta.jpeg';
import tasteCreators from '../assets/images/taste-creators.jpeg';
import tasteBeingAble from '../assets/images/taste-being-able.jpeg';

import gusto from '../assets/images/gusto-min.png';
import button from '../assets/images/button-min.png';
import input from '../assets/images/input-min.png';
import dropdownMenu from '../assets/images/dropdown-menu-min.png';

const projects = [
  {
    title: 'Taste',
    subTitle: 'Landing Page',
    paragraphs: [
      { bold: true, white: true, text: 'Taste is an innovative browser extension designed to take control of your online experience by acting as a personal consent manager.' },
      { bold: false, white: false, text: 'Say goodbye to the annoyance of cookie banners, as Taste seamlessly filters and manages cookies on websites, automating the entire consent process on your behalf.' },
      { bold: false, white: false, text: 'With Taste, you regain your browsing freedom, ensuring that your preferences are respected while you navigate the web effortlessly. It\'s all about giving you back control, so you can focus on what truly matters online.' }, 
    ],
    images: [
      { img: tasteHero, alt: 'taste hero' },
      { img: tasteJoinBeta, alt: 'taste join beta' },
      { img: tasteCreators, alt: 'taste creators' },
      { img: tasteBeingAble, alt: 'taste being able' }
    ],
  },
  {
    title: 'Gusto',
    subTitle: 'Design System',
    paragraphs: [
      { bold: true, white: true, text: 'Gusto is a comprehensive design system crafted for Axeptio, providing a cohesive and intuitive foundation for creating digital experiences.' },
      { bold: false, white: false, text: 'Developed with a focus on scalability, consistency, and user-friendliness, Gusto streamlines the design and development process, ensuring that all components, from typography to UI elements, align seamlessly.' },
      { bold: false, white: false, text: 'It offers a versatile toolkit that empowers designers and developers to build interfaces efficiently, enhancing both the visual identity and functional integrity of Axeptio\'s digital products.' },
    ],
    images: [
      { img: button, alt: 'button' },
      { img: input, alt: 'input' },
      { img: gusto, alt: 'gusto' },
      { img: dropdownMenu, alt: 'dropdown menu' }
    ],
  },
]

export default projects;