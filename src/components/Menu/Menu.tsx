import CopyEmail from '../CopyEmail';
import Icon from '../Icon';
import MenuItem from './MenuItem';

function Menu() {
  return (
    <menu>
      <ul className="flex items-center justify-center">
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
            <Icon name={name} className="flex w-5 h-5" />
          </MenuItem>
        ))}

        <li>
          <CopyEmail label="Email" />
        </li>
      </ul>
    </menu>
  );
}

export default Menu;
