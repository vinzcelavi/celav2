import IntroductionReveal from './components/IntroductionReveal';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer';
import WhoAmI from './components/WhoAmI';
import ProjectSection from './components/ProjectSection';
import projects from './data/projects';

function App() {
  return (
    <div className="relative w-full m-auto max-w-[140rem]">
      <header className="flex justify-between items-start pb-6">
        <WhoAmI />
        <Menu />
      </header>

      <IntroductionReveal />

      <main className="flex flex-col gap-2 py-16 md:py-32 m-auto max-w-[140rem]">
        {projects.map((project, index) => (
          <ProjectSection key={index} {...project} />
        ))}
      </main>

      <Footer />
    </div>
  )
}

export default App
