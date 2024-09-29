import { Suspense, lazy } from 'react';
import IntroductionReveal from './components/IntroductionReveal';
import MenuItem from './components/MenuItem';
import MagneticFramer from './components/MagneticFramer';

// Works also with SSR as expected
const CopyEmail = lazy(() => import('./components/CopyEmail'));

function App() {
  return (
    <main className="relative w-full">
      <header className="flex justify-between items-start h-14">
        <div className="flex flex-col items-baseline gap-1">
          <h1 className="text-base h-5 font-semibold">Vincent Bianciotto</h1>
          <span className="text-base text-primary">Front-End Designer</span>
        </div>
        <ul className="hidden gap-4 md:flex">
          <MenuItem href="https://www.linkedin.com/in/vincent-bianciotto/">
            Li
          </MenuItem>
          <MenuItem href="https://www.instagram.com/vinzcelavi/">
            Ig
          </MenuItem>
          <MenuItem href="https://twitter.com/vinzcelavi">
            X
          </MenuItem>
          <li className="flex items-end">
            <Suspense fallback={<span>...</span>}>
              <MagneticFramer>
                <CopyEmail label="Email" email="vincent@celavi.fr" />
              </MagneticFramer>
            </Suspense>
          </li>
        </ul>
      </header>
      <div className="flex justify-center">
        <IntroductionReveal />
      </div>
    </main>
  )
}

export default App
