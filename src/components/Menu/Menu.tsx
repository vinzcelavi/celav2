import { Suspense } from 'react';
import MenuItem from './MenuItem';
import MagneticFramer from '../MagneticFramer';
// Works also with SSR as expected
import CopyEmail from '../CopyEmail';

function Menu({ isShorten, isMagnetic, hasEmail }: { isShorten?: boolean, isMagnetic?: boolean, hasEmail?: boolean }) {
  return (
    <ul className="flex items-center gap-4">
      <MenuItem href="https://www.linkedin.com/in/vincent-bianciotto/" isMagnetic={isMagnetic} hasHover={!isShorten}>
        {isShorten ? 'Li' : 'Linkedin'}
      </MenuItem>
      <MenuItem href="https://www.instagram.com/vinzcelavi/" isMagnetic={isMagnetic} hasHover={!isShorten}>
        {isShorten ? 'Ig' : 'Instagram'}
      </MenuItem>
      <MenuItem href="https://www.github.com/vinzcelavi/" isMagnetic={isMagnetic} hasHover={!isShorten}>
        {isShorten ? 'Gh' : 'Github'}
      </MenuItem>

      {hasEmail && (
        <li className="flex items-end">
          <Suspense fallback={<span>...</span>}>
            {isMagnetic ? (
              <MagneticFramer>
                <CopyEmail label="Email" />
              </MagneticFramer>
            ) : (
              <CopyEmail label="Email" />
            )}
          </Suspense>
        </li>
      )}
    </ul>
  )
}

export default Menu;