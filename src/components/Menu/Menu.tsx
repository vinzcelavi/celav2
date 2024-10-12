import { isMobile } from 'react-device-detect';
import CopyEmail from '../CopyEmail';
import MagneticFramer from '../MagneticFramer';
import MenuItem from './MenuItem';

function Menu({ isShorten, isMagnetic, hasEmail }: { isShorten?: boolean; isMagnetic?: boolean; hasEmail?: boolean }) {
  return (
    <ul className="flex items-center justify-center gap-4">
      <MenuItem
        data-splitbee-event="Click on Linkedin"
        href="https://www.linkedin.com/in/vincent-bianciotto/"
        target="_blank"
        rel="noreferrer noopener"
        isMagnetic={isMagnetic}
        hasHover={!isShorten}
      >
        {isShorten ? 'Li' : 'Linkedin'}
      </MenuItem>
      <MenuItem
        data-splitbee-event="Click on Instagram"
        href="https://www.instagram.com/vinzcelavi/"
        target="_blank"
        rel="noreferrer noopener"
        isMagnetic={isMagnetic}
        hasHover={!isShorten}
      >
        {isShorten ? 'Ig' : 'Instagram'}
      </MenuItem>
      <MenuItem
        data-splitbee-event="Click on Github"
        href="https://www.github.com/vinzcelavi/"
        target="_blank"
        rel="noreferrer noopener"
        isMagnetic={isMagnetic}
        hasHover={!isShorten}
      >
        {isShorten ? 'Gh' : 'Github'}
      </MenuItem>

      {hasEmail && !isMobile && (
        <li className="flex items-end">
          {isMagnetic ? (
            <MagneticFramer>
              <CopyEmail label="Email" />
            </MagneticFramer>
          ) : (
            <CopyEmail label="Email" />
          )}
        </li>
      )}
    </ul>
  );
}

export default Menu;
