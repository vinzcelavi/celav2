import IntroductionReveal from './components/IntroductionReveal';
import Menu from './components/Menu/Menu';

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
    <main className="relative w-full m-auto max-w-[140rem]">
      <header className="flex justify-between items-start h-14 md:h-16 lg:h-20">
        <div className="flex flex-col items-baseline gap-1">
          <h1 className="text-base h-5 font-semibold">Vincent Bianciotto</h1>
          <span className="text-base text-primary">Front-End Designer</span>
        </div>
        <Menu />
      </header>

      <IntroductionReveal />

      <div className="flex flex-col gap-2 pt-32 m-auto max-w-[140rem]">
        {/* <section className="grid grid-cols-2 gap-2 pt-32">
          <div className="flex flex-col items-end gap-2 pr-16">
            <h2 className="text-6xl font-bold">Work</h2>
          </div>
        </section> */}

        <section className="grid grid-cols-2 gap-2 py-32"> {/* pt-16 pb-32 */}
          <div className="flex flex-col items-end gap-2 pr-16">
            <h2 className="text-5xl font-bold">Taste</h2>
            <h3 className="text-xl font-light text-secondary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Landing Page</h3>
          </div>
          <div className="max-w-[40rem]">
            <p className="font-semibold">
              Taste is an innovative browser extension designed to take control of your online experience by acting as a personal consent manager.
            </p>
            <p className="text-slate-400">
              Say goodbye to the annoyance of cookie banners, as Taste seamlessly filters and manages cookies on websites, automating the entire consent process on your behalf.
            </p>
            <p className="text-slate-400">
              With Taste, you regain your browsing freedom, ensuring that your preferences are respected while you navigate the web effortlessly. It's all about giving you back control, so you can focus on what truly matters online.
            </p>
          </div>
        </section>
        <div className="flex flex-col gap-2 py-32">
          <div className="flex">
            <img src={tasteHero} className="w-full rounded-sm" alt="taste hero" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2">
            <img src={tasteJoinBeta} className="w-full rounded-sm" alt="taste join beta" />
            <img src={tasteCreators} className="w-full rounded-sm" alt="taste creators" />
            <img src={tasteBeingAble} className="w-full rounded-sm" alt="taste being able" />
          </div>
        </div>

        <section className="grid grid-cols-2 gap-2 py-32">
          <div className="flex flex-col items-end gap-2 pr-16">
            <h2 className="text-5xl font-bold">Gusto</h2>
            <h3 className="text-xl font-light text-primary">Design System</h3>
          </div>
          <div className="max-w-[40rem]">
            <p className="font-semibold">
              Gusto is a comprehensive design system crafted for Axeptio, providing a cohesive and intuitive foundation for creating digital experiences.
            </p>
            <p className="text-slate-400">
              Developed with a focus on scalability, consistency, and user-friendliness, Gusto streamlines the design and development process, ensuring that all components, from typography to UI elements, align seamlessly.
            </p>
            <p className="text-slate-400">
              It offers a versatile toolkit that empowers designers and developers to build interfaces efficiently, enhancing both the visual identity and functional integrity of Axeptio's digital products.
            </p>
          </div>
        </section>
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
      </div>
    </main>
  )
}

export default App
