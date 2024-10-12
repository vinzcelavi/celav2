import { Suspense } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import IntroductionReveal from './components/IntroductionReveal';
import ProjectSection from './components/ProjectSection';
import projects from './data/projects';

function App() {
  return (
    <div className="relative w-full m-auto max-w-[140rem]">
      <Header />

      <main className="px-6 md:px-8 lg:px-12">
        <IntroductionReveal />

        <Suspense fallback={<span>loading...</span>}>
          <div className="flex flex-col gap-2">
            {projects.map((project) => (
              <ProjectSection key={project.title} {...project} />
            ))}
          </div>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
