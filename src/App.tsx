import IntroductionReveal from './components/IntroductionReveal';
import Menu from './components/Menu/Menu';
import WhoAmI from './components/WhoAmI';
import Paragraph from './components/Paragraph';
import tasteHero from './assets/images/taste-hero.jpeg';
import tasteJoinBeta from './assets/images/taste-join-beta.jpeg';
import tasteCreators from './assets/images/taste-creators.jpeg';
import tasteBeingAble from './assets/images/taste-being-able.jpeg';

import gusto from './assets/images/gusto-min.png';
import button from './assets/images/button-min.png';
import input from './assets/images/input-min.png';
import dropdownMenu from './assets/images/dropdown-menu-min.png';

function App() {
  return (
    <div className="relative w-full m-auto max-w-[140rem]">
      <header className="flex justify-between items-start pb-6">
        <WhoAmI />
        <Menu />
      </header>

      <IntroductionReveal />

      <main className="flex flex-col gap-2 pt-32 m-auto max-w-[140rem]">
        <section>
          <div className="md:grid md:grid-cols-2 gap-2 py-12 md:py-32">
            <div className="flex flex-col items-start md:items-end gap-2 pb-16 md:pb-0 md:pr-16">
              <h2 className="text-5xl md:text-6xl font-bold">Taste</h2>
              <h3 className="text-2xl font-light text-secondary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Landing Page</h3>
            </div>
            <div className="max-w-[40rem]">
              <Paragraph bold white>
                Taste is an innovative browser extension designed to take control of your online experience by acting as a personal consent manager.
              </Paragraph>
              <Paragraph>
                Say goodbye to the annoyance of cookie banners, as Taste seamlessly filters and manages cookies on websites, automating the entire consent process on your behalf.
              </Paragraph>
              <Paragraph>
                With Taste, you regain your browsing freedom, ensuring that your preferences are respected while you navigate the web effortlessly. It's all about giving you back control, so you can focus on what truly matters online.
              </Paragraph>
            </div>
          </div>
          <div className="flex flex-col gap-2 py-32">
            <div className="flex">
              <img src={tasteHero} className="w-full rounded-sm" alt="taste hero" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
              <img src={tasteJoinBeta} className="w-full rounded-sm" alt="taste join beta" />
              <img src={tasteCreators} className="w-full rounded-sm" alt="taste creators" />
              <img src={tasteBeingAble} className="w-full rounded-sm" alt="taste being able" />
            </div>
          </div>
        </section>

        <section>
          <div className="md:grid md:grid-cols-2 gap-2 py-32">
            <div className="flex flex-col md:items-end gap-2 pb-16 md:pb-0 md:pr-16">
              <h2 className="text-6xl font-bold">Gusto</h2>
              <h3 className="text-2xl font-light text-primary">Design System</h3>
            </div>
            <div className="max-w-[40rem]">
              <Paragraph bold white>
                Gusto is a comprehensive design system crafted for Axeptio, providing a cohesive and intuitive foundation for creating digital experiences.
              </Paragraph>
              <Paragraph>
                Developed with a focus on scalability, consistency, and user-friendliness, Gusto streamlines the design and development process, ensuring that all components, from typography to UI elements, align seamlessly.
              </Paragraph>
              <Paragraph>
                It offers a versatile toolkit that empowers designers and developers to build interfaces efficiently, enhancing both the visual identity and functional integrity of Axeptio's digital products.
              </Paragraph>
            </div>
          </div>
          <div className="flex flex-col gap-2 py-32">
            <div className="flex">
              <img src={button} className="w-full rounded-sm" alt="button" />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2">
              <img src={input} className="w-full rounded-sm" alt="input" />
              <img src={gusto} className="w-full rounded-sm" alt="gusto" />
              <img src={dropdownMenu} className="w-full rounded-sm" alt="dropdown menu" />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
