import { AnimatePresence, motion } from 'framer-motion';
import { Icon, Logo } from '../components';
import { useState } from 'react';
import { NavbarItems } from './NavbarItems';

const NavbarMobile = ({
  setToggle,
  isToggled,
}: {
  isToggled: boolean;
  setToggle: (v: boolean) => void;
}) => (
  <div className='md:hidden w-7 h-7'>
    <button
      className='text-tron-secondary text-3xl'
      onClick={() => setToggle(!isToggled)}
    >
      <Icon icon='MenuGrid' />
    </button>
    <AnimatePresence mode='popLayout'>
      {isToggled && <NavbarItems isToggled={isToggled} />}
    </AnimatePresence>
  </div>
);
const NavbarLogo = () => (
  <div className='flex flex-row items-center h-12 md:h-16 w-12 md:w-16'>
    <Logo className='w-full h-full' />
  </div>
);

const NavbarMenu = () => {
  const navLinks = ['Home', 'About', 'Projects', 'Contact me'];
  return (
    <div className='grid grid-rows-1 grid-cols-4 gap-1 lg:gap-2 py-1 place-items-center '>
      {navLinks.map((link) => (
        <div key={link} className='text-tron-primary tracking-tighter '>
          {link}
        </div>
      ))}
    </div>
  );
};

export default function NavbarBlur() {
  const [isToggled, setToggle] = useState(false);
  const navbarVariants = {
    hidden: { y: -80 },
    visible: { y: 0 },
  };

  return (
    <motion.nav
      className='w-full fixed top-0 bottom-auto left-0 right-0 backdrop-blur-sm  z-[10000] flex  flex-col py-2'
      variants={navbarVariants}
      initial='hidden'
      animate='visible'
    >
      <div className='flex justify-between items-center  ml-auto mr-auto min-w-[600px] md:min-w-[1200px]'>
        <>
          <NavbarLogo />
        </>
        <>
          <NavbarMenu />
          <NavbarMobile isToggled={isToggled} setToggle={setToggle} />
        </>
      </div>
    </motion.nav>
  );
}
