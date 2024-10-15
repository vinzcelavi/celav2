import splitbee from '@splitbee/web';
import { useApp } from '../contexts/AppContext';
import Avatar from './Avatar';

function WhoAmI() {
  const { helloThereIsOpen, setHelloThereIsOpen } = useApp();

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div
      onClick={() => {
        splitbee.track('Click on Avatar');
        setHelloThereIsOpen(!helloThereIsOpen);
      }}
      className="flex items-center select-none group hover:cursor-zoom-in"
    >
      <div className="flex items-center w-[4.5rem] h-[4.5rem]">
        <Avatar alt="Vincent Bianciotto" />
      </div>
      <div className="flex flex-col items-baseline pl-4">
        <h1 className="text-lg font-semibold leading-tight">Vincent Bianciotto</h1>
        <span className="text-base bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Front-End Designer
        </span>
      </div>
    </div>
  );
}

export default WhoAmI;
