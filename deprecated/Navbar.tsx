import { useTransform, motion, useScroll, AnimatePresence } from 'motion/react';
import FallingText from '../src/view/components/FallingText';
import logo from '../../assets/trademark/svgLogo.svg';
import { useState } from 'react';
import { useIsMobile } from '../src/hooks/useIsMobile';

const NavbarDesktop = () => {
  const { scrollY } = useScroll();

  const background = useTransform(
    scrollY,
    [0, 75],
    ['rgba(0, 183, 255, 0)', 'rgba(31, 31, 31, 1)']
  );

  const borderRadius = useTransform(scrollY, [0, 100], [0, 40]);
  const top = useTransform(scrollY, [0, 100], [0, 15]);

  return (
    <motion.div
      className='sticky z-10 w-[30px] h-full py-4 right-0 left-0 z-15 text-cadet_lavender-900 flex flex-col items-center justify-around px-6 font-extrabold text-xs tracking-[0.0200rem]'
      style={{
        background,
        borderRadius,
        top,
      }}
    >
      <div className='flex flex-col items-center content-center'>
        <img src={logo} className='h-[50px] w-[50px]' />
        <FallingText text='Bernardo Moschen' />
      </div>
      <ul className='flex flex-col items-center w-auto'>
        <FallingText text='Work' as={motion.li} />
        <FallingText text='About' as={motion.li} />
        <FallingText text='Contact' as={motion.li} />
      </ul>
    </motion.div>
  );
};

const NavbarMobile = () => {
  const [isToggled, setToggle] = useState(false);
  const navContainer = {
    visible: {
      //x: 0,
      opacity: 1,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
    hidden: {
      //x: -250,
      opacity: 0,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <button className='btn' onClick={() => setToggle(!isToggled)}>
        =
      </button>
      <AnimatePresence>
        {isToggled && (
          <motion.div
            className='navbar'
            initial='hidden'
            animate={isToggled ? 'visible' : 'hidden'}
            exit='hidden'
            variants={navContainer}
          >
            <NavbarMobileItems />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const NavbarMobileItems = () => {
  const items = ['Home', 'Products', 'Services', 'About'];

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
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
  };

  return (
    <>
      <motion.ul
        className='navList'
        initial='hidden'
        animate='visible'
        exit='hidden'
        variants={navList}
      >
        {items.map((item) => (
          <motion.li className='nav-item' variants={navItem} key={item}>
            <p>{item}</p>
          </motion.li>
        ))}
      </motion.ul>
    </>
  );
};

export function Navbar() {
  const { isMobile } = useIsMobile();

  return isMobile ? <NavbarMobile /> : <NavbarDesktop />;
}
