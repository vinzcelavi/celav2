import { decodeHtmlEntities } from '../utils/decodeHtmlEntities';
import Icon from './Icon';
import MagneticFramer from './MagneticFramer';
import Menu from './Menu/Menu';
import Paragraph from './Paragraph';

function Footer() {
  const email = '&#118;&#105;&#110;&#99;&#101;&#110;&#116;&#64;&#99;&#101;&#108;&#97;&#118;&#105;&#46;&#102;&#114;';

  return (
    <footer className="flex flex-col m-auto md:items-center justify-center text-center px-8 py-16 max-w-[30rem]">
      <h2 className="text-5xl md:text-6xl font-extrabold mb-4">Get in touch</h2>
      <Paragraph bigger>
        For any specific request, or just for fun, you can contact me at{' '}
        <MagneticFramer>
          <a
            data-splitbee-event="Click on 'Mailto' footer"
            href={`mailto:${decodeHtmlEntities(email)}`}
            className="inline-flex bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent transition-all duration-300"
          >
            {decodeHtmlEntities(email)}
          </a>
        </MagneticFramer>{' '}
        or shoot me a dm and I'll be happy to get back to you.
      </Paragraph>

      <div className="py-6">
        <Menu />
      </div>

      <p className="text-base text-gray-500">
        Celavi © 2024 Vincent Bianciotto. <br className="block md:hidden" />
        <a
          data-splitbee-event="Click on 'Source code'"
          href="https://github.com/vinzcelavi/celav2/"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex gap-1 items-baseline text-white/80 hover:text-white transition-all duration-300"
        >
          <span className="flex w-4 h-4 translate-y-0.5">
            <Icon name="github" />
          </span>
          <span>Source code</span>
        </a>
        .
      </p>
    </footer>
  );
}

export default Footer;
