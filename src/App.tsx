import splitbee from '@splitbee/web';
import { useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import HelloThere from './components/HelloThere';
import IntroductionReveal from './components/IntroductionReveal';
import ProjectSection from './components/ProjectSection';
import StickyNotch from './components/StickyNotch';
import WorkSectionTitle from './components/WorkSectionTitle/WorkSectionTitle';
import projects from './data/projects';

function App() {
  useEffect(() => {
    splitbee.init({
      token: import.meta.env.VITE_SPLITBEE_TOKEN
    });
  }, []);

  return (
    <div className="relative w-full m-auto max-w-[140rem]">
      <StickyNotch />
      <Header />

      <main className="px-8 lg:px-12">
        <IntroductionReveal />
        <WorkSectionTitle />

        <div className="flex flex-col gap-2">
          {projects.map((project) => (
            <ProjectSection key={project.title} {...project} />
          ))}
        </div>
      </main>

      <Footer />
      <HelloThere />
    </div>
  );
}

export default App;
