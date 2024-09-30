import { Suspense } from 'react';
import MenuItem from './MenuItem';
import MagneticFramer from '../MagneticFramer';
// Works also with SSR as expected
import CopyEmail from '../CopyEmail';

function Menu() {
  return (
    <ul className="hidden gap-4 md:flex">
      <MenuItem href="https://www.linkedin.com/in/vincent-bianciotto/">
        Li
      </MenuItem>
      <MenuItem href="https://www.instagram.com/vinzcelavi/">
        Ig
      </MenuItem>
      <MenuItem href="https://www.github.com/vinzcelavi/">
        Gh
      </MenuItem>
      <li className="flex items-end">
        <Suspense fallback={<span>...</span>}>
          <MagneticFramer>
            <CopyEmail label="Email" email="vincent@celavi.fr" />
          </MagneticFramer>
        </Suspense>
      </li>
    </ul>
  )
}

export default Menu;