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
      className='text-white text-3xl'
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
  <div className='flex flex-row items-center'>
    <div className='bg-accent-black border-2 border-accent-surface rounded-full mr-2 h-12 md:h-16 w-12 md:w-16'>
      <Logo className='w-full h-full' />
    </div>
    <div className={'text-lg md:text-xl font-semibold'}>bernardoMoschen</div>
  </div>
);

const NavbarMenu = () => {
  const navLinks = ['Home', 'About', 'Projects', 'Contact me'];

  return (
    <div className='md:grid hidden  rounded-full p-1'>
      <div className='rounded-full bg-g-primary gradient-primary p-[2px]'>
        <div className='w-full h-full bg-accent-black rounded-full'>
          <div className='grid grid-rows-1 grid-cols-4 r bg-g-square gap-1 lg:gap-10 py-1 md:py-3 px-2 md:px-4 rounded-full place-items-center '>
            {navLinks.map((link, i) =>
              i === 0 ? (
                <div className='bg-accent-surface py-3 px-6 rounded-full '>
                  <Icon className='h-5 w-5' icon='Home' />
                </div>
              ) : (
                <div className='text-white text-sm md:text-lg'>{link}</div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const NavbarCTA = () => (
  <div className='md:flex hidden flex-row items-center'>
    <button className='text-white border-2 border-accent-primary  py-5 px-2 rounded-full min-h-[52px] min-w-[103px] text-lg'>
      Hire me
    </button>
  </div>
);

export default function Navbar() {
  const [isToggled, setToggle] = useState(false);
  const navbarVariants = {
    hidden: { y: -80 },
    visible: { y: 0 },
  };

  return (
    <div className='flex w-full flex-col'>
      <motion.nav
        className=' px-2 py-2'
        variants={navbarVariants}
        initial='hidden'
        animate='visible'
      >
        <div className='flex justify-between items-center '>
          <>
            <NavbarLogo />
          </>
          <>
            <NavbarMenu />
            <NavbarCTA />
            <NavbarMobile isToggled={isToggled} setToggle={setToggle} />
          </>
        </div>
      </motion.nav>
    </div>
  );
}
