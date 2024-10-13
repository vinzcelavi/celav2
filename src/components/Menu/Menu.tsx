import { isMobile } from 'react-device-detect';
import AppIcon from '../AppIcon';
import CopyEmail from '../CopyEmail';
import MenuItem from './MenuItem';

function Menu() {
  return (
    <ul className="flex items-center justify-center gap-1">
      {[
        { name: 'linkedin', href: 'https://www.linkedin.com/in/vincent-bianciotto/' },
        { name: 'instagram', href: 'https://www.instagram.com/vinzcelavi/' },
        { name: 'github', href: 'https://www.github.com/vinzcelavi/' }
      ].map(({ name, href }) => (
        <MenuItem
          key={name}
          data-splitbee-event={`Click on ${name.charAt(0).toUpperCase() + name.slice(1)}`}
          href={href}
          label={name.charAt(0).toUpperCase() + name.slice(1)}
          target="_blank"
          rel="noreferrer noopener"
        >
          <span className="flex w-4 h-4">
            <AppIcon name={name} />
          </span>
        </MenuItem>
      ))}

      {!isMobile && (
        <li className="flex items-end">
          <CopyEmail label="Email" />
        </li>
      )}
    </ul>
  );
}

export default Menu;
