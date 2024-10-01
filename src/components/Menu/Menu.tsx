import { Suspense } from 'react';
import MenuItem from './MenuItem';
import MagneticFramer from '../MagneticFramer';
// Works also with SSR as expected
import CopyEmail from '../CopyEmail';

function Menu({ isShorten, hasEmail }: { isShorten?: boolean, hasEmail?: boolean }) {
  return (
    <ul className="flex items-center gap-4">
      <MenuItem href="https://www.linkedin.com/in/vincent-bianciotto/">
        {isShorten ? 'Li' : 'Linkedin'}
      </MenuItem>
      <MenuItem href="https://www.instagram.com/vinzcelavi/">
        {isShorten ? 'Ig' : 'Instagram'}
      </MenuItem>
      <MenuItem href="https://www.github.com/vinzcelavi/">
        {isShorten ? 'Gh' : 'Github'}
      </MenuItem>

      {hasEmail && (
        <li className="flex items-end">
          <Suspense fallback={<span>...</span>}>
            <MagneticFramer>
              <CopyEmail label="Email" />
            </MagneticFramer>
          </Suspense>
        </li>
      )}
    </ul>
  )
}

export default Menu;