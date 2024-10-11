import Menu from './Menu/Menu';
import Paragraph from './Paragraph';

function Footer() {
  return (
    <footer className="flex flex-col m-auto md:items-center justify-center text-center py-16 max-w-[30rem]">
      <h2 className="text-5xl md:text-6xl font-extrabold mb-4">Get in Touch</h2>
      <Paragraph bigger>
        For any specific request, or just for fun, you can contact me at{' '}
        <a
          data-splitbee-event="Click on 'Mailto'"
          href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#118;&#105;&#110;&#99;&#101;&#110;&#116;&#64;&#99;&#101;&#108;&#97;&#118;&#105;&#46;&#102;&#114;"
          className="text-white/80 hover:text-white transition-all duration-300"
        >
          vincent@celavi.fr
        </a>{' '}
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
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z" />
            </svg>
          </span>
          <span>Source code</span>
        </a>
        .
      </p>
    </footer>
  );
}

export default Footer;
