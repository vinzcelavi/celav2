import splitbee from '@splitbee/web';
import { lazy, useEffect, useState } from 'react';
import Header from './components/Header';
import IntroductionReveal from './components/IntroductionReveal';
import { Toast, useToastControls } from './components/Toast';
import WorkSectionTitle from './components/WorkSectionTitle/WorkSectionTitle';
import { withLocaleFromContext } from './contexts/LocaleContext';
import projectsNotion from './data/projectsNotion.json';

const StickyMenu = lazy(() => import('./components/StickyMenu'));
const HelloThere = lazy(() => import('./components/HelloThere'));
const ProjectSection = lazy(() => import('./components/ProjectSection'));
const Footer = lazy(() => import('./components/Footer'));

function App({ locale }: { locale: string }) {
  const { show } = useToastControls();
  const [localeSwitchMessage, setLocaleSwitchMessage] = useState<string>('');

  useEffect(() => {
    splitbee.init({
      token: import.meta.env.VITE_SPLITBEE_TOKEN
    });
  }, []);

  useEffect(() => {
    if (locale === 'en') {
      setLocaleSwitchMessage('Switching to English');
    } else {
      setLocaleSwitchMessage('On passe en Français');
    }
    show('toast-language-toggle');
  }, [locale, show]);

  return (
    <div className="relative w-full m-auto max-w-[140rem]">
      <StickyMenu />
      <Header />

      <main className="px-6 md:px-10 lg:px-12">
        <IntroductionReveal />
        <WorkSectionTitle />

        <div className="flex flex-col gap-2">
          {projectsNotion
            .filter((project) => project.active)
            .map((project, index) => (
              <ProjectSection key={`${project.title}-${index}`} {...project} />
            ))}
        </div>
      </main>

      <Footer />
      <HelloThere />

      <Toast uniqueId="toast-language-toggle" config={{ duration: 3500 }}>
        {localeSwitchMessage}
      </Toast>
    </div>
  );
}

export default withLocaleFromContext(App);
