import Menu from './Menu/Menu';
import WhoAmI from './WhoAmI';

function Header() {
  return (
    <header className="flex justify-between items-center p-6 md:p-8 lg:p-12">
      <WhoAmI />
      <div className="hidden md:flex">
        <Menu isShorten isMagnetic hasEmail />
      </div>
    </header>
  );
}

export default Header;
