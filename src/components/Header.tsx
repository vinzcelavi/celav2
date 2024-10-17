import Menu from './Menu/Menu';
import WhoAmI from './WhoAmI';

function Header() {
  return (
    <header className="relative z-40 flex justify-between items-center px-8 py-8 md:py-10 lg:px-12">
      <WhoAmI />
      <menu className="hidden md:flex">
        <Menu />
      </menu>
    </header>
  );
}

export default Header;
