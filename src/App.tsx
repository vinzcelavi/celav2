import { useEffect, Suspense } from 'react';
import splitbee from '@splitbee/web';
import Footer from './components/Footer';
import IntroductionReveal from './components/IntroductionReveal';
import Menu from './components/Menu/Menu';
import ProjectSection from './components/ProjectSection';
import WhoAmI from './components/WhoAmI';
import projects from './data/projects';

function App() {
  useEffect(() => {
    splitbee.init({
      token: 'YKTNWY0Y42M6',
      scriptUrl: '/bee.js',
      apiUrl: '/_hive'
    });
  }, []);

  return (
    <div className="relative w-full m-auto max-w-[140rem]">
      <header className="flex justify-between items-center pb-6">
        <WhoAmI />
        <div className="hidden md:flex">
          <Menu isShorten isMagnetic hasEmail />
        </div>
      </header>

      <IntroductionReveal />

      <Suspense fallback={<span>loading...</span>}>
        <main className="flex flex-col gap-2">
          {projects.map((project) => (
            <ProjectSection key={project.title} {...project} />
          ))}
        </main>
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;
