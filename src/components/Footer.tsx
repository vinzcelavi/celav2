import { useEffect, useState } from 'react';
import { useLocale } from '../contexts/LocaleContext';
import { decodeHtmlEntities } from '../utils/decodeHtmlEntities';
import Icon from './Icon';
import MagneticWrapper from './MagneticWrapper';
import Menu from './Menu/Menu';
import Paragraph from './Paragraph';

function Footer() {
  const { locale } = useLocale();
  const [contactTitle, setContactTitle] = useState<string>('Get in touch');
  const [requestText, setRequestText] = useState<string>(
    'For any specific request, or just for fun, you can contact me at '
  );
  const [contactText, setContactText] = useState<string>("or shoot me a dm and I'll be happy to get back to you. ");
  const email = '&#118;&#105;&#110;&#99;&#101;&#110;&#116;&#64;&#99;&#101;&#108;&#97;&#118;&#105;&#46;&#102;&#114;';

  useEffect(() => {
    if (locale === 'en') {
      setContactTitle('Get in touch');
      setRequestText('For any specific request, or just for fun, you can contact me at ');
      setContactText("or shoot me a dm and I'll be happy to get back to you.");
    } else {
      setContactTitle('Me contacter');
      setRequestText('Pour toute demande spécifique ou simplement pour le fun, vous pouvez me contacter à ');
      setContactText("ou m'envoyez un message sur les réseaux et je vous répondrai avec plaisir. ");
    }
  }, [locale]);

  return (
    <footer className="flex flex-col m-auto md:items-center justify-center text-center px-8 md:px-10 py-16 max-w-[30rem]">
      <h2 className="text-5xl md:text-6xl font-extrabold mb-4">{contactTitle}</h2>
      <Paragraph bigger>
        {requestText}
        <MagneticWrapper>
          <a
            data-splitbee-event="Click on 'Mailto' footer"
            href={`mailto:${decodeHtmlEntities(email)}`}
            className="inline-flex bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent transition-all duration-300"
          >
            {decodeHtmlEntities(email)}
          </a>
        </MagneticWrapper>{' '}
        {contactText}
      </Paragraph>

      <div className="py-6">
        <Menu />
      </div>

      <p className="text-base text-gray-500">
        Celavi © 2024 Vincent Bianciotto. <br className="block md:hidden" />
        {'\u00A0'}
        <a
          data-splitbee-event="Click on 'Source code'"
          href="https://github.com/vinzcelavi/celav2/"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex gap-1 items-baseline text-white/80 hover:text-white transition-all duration-300"
        >
          <span className="flex w-4 h-4 translate-y-[3px]">
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
