import { Suspense, lazy } from 'react';
import IntroductionReveal from './components/IntroductionReveal';
// import PopCornAnimation from './components/PopCornAnimation';

// Works also with SSR as expected
const CopyEmail = lazy(() => import('./components/CopyEmail'));


function App() {
  return (
    <main className="relative w-full">
      <div className="flex justify-between">
        <div>
          <h1 className="text-base">Vincent Bianciotto</h1>
          <span className="text-base text-primary">Montpellier, France</span>
        </div>
        <ul className="flex gap-2">
          <li className="flex items-end"><a className="flex h-4 text-sm font-bold tracking-wide uppercase" href="https://www.linkedin.com/in/vincent-bianciotto/">li</a></li>
          <li className="flex items-end"><a className="flex h-4 text-sm font-bold tracking-wide uppercase" href="https://www.instagram.com/vinzcelavi/">ig</a></li>
          <li className="flex items-end"><a className="flex h-4 text-sm font-bold tracking-wide uppercase" href="https://twitter.com/vinzcelavi">tw</a></li>
          <li className="flex items-end">
            <Suspense fallback={<p>Loading card component...</p>}>
              <CopyEmail label="Email" email="vincent@celavi.fr" />
            </Suspense>
          </li>
        </ul>
      </div>
      <div className="flex justify-center">
        <IntroductionReveal />

        {/* <PopCornAnimation /> */}
      </div>
    </main>
  )
}

export default App
