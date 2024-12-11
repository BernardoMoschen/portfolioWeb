import { motion, Variants } from 'framer-motion';

interface Props {
  isToggled: boolean;
}

const navContainer: Variants = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
    },
  },
  visible: {
    height: 'fit-content',
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      height: { velocity: 10 },
      duration: 0.5,
    },
  },
};

const navList = {
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.07,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const navItem = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  hidden: {
    y: -50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
};

export const NavItems = ({ isToggled }: Props) => {
  const items = ['Home', 'Products', 'Services', 'About'];

  return (
    <motion.div
      className='w-fit p-4 my-10  flex flex-col rounded-lg bg-accent-surface fixed top-7 right-2'
      initial='hidden'
      animate={isToggled ? 'visible' : 'hidden'}
      exit='hidden'
      variants={navContainer}
    >
      <motion.ul
        className='p-2'
        initial='hidden'
        animate='visible'
        exit='hidden'
        variants={navList}
      >
        {items.map((item, i) => (
          <motion.li
            className='list-none cursor-pointer text-white text-lg'
            variants={navItem}
            key={i}
          >
            <p>{item}</p>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};
