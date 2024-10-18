import Menu from './Menu/Menu';
import WhoAmI from './WhoAmI';

function Header() {
  return (
    <header className="relative z-40 flex justify-between items-center px-6 py-6 md:px-10 md:py-10 lg:px-12 mb-10">
      <WhoAmI />
      <div className="hidden md:flex">
        <Menu />
      </div>
    </header>
  );
}

export default Header;
