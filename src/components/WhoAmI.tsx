import { motion } from 'framer-motion';
import avatar from '../assets/avatar.png';

const avatarMotion = {
  initial: {
    width: 72,
  },
  hover: {
    width: 144,
  },
  tap: {
    width: 144,
  },
  exit: {
    width: 72,
  }
};

function Avatar({ src, alt }: { src: string, alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="flex w-full h-full rounded-full outline outline-1 outline-offset-2 outline-white/10 group-hover:outline-white/70 transition-all duration-300"
    />
  );
}

function WhoAmI() {
  return (
    <motion.div initial="initial" whileTap="tap" exit="exit" className="flex items-center select-none group hover:cursor-zoom-in">
      <motion.div
        variants={avatarMotion}
        transition={{
          duration: 0.8,
          type: 'spring',
          stiffness: 200,
          damping: 30,
          ease: 'easeInOut',
        }}
      >
        <Avatar src={avatar} alt="avatar" />
      </motion.div>
      <div className="flex flex-col items-baseline pl-4">
        <h1 className="text-lg font-semibold leading-tight">Vincent Bianciotto</h1>
        <span className="text-base text-primary">Front-End Designer</span>
      </div>
    </motion.div>
  );
}

export default WhoAmI;