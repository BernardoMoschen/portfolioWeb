import { motion } from 'framer-motion';
import myLogo from '@/assets/trademark/svgLogo.svg';
import homeSvg from '@/assets/icons/home-2.svg';

const NavbarLogo = () => (
  <div className='flex flex-row items-center'>
    <img src={myLogo} className='h-16 w-16' />
    <div className={'text-xl font-semibold'}>bernardoMoschen</div>
  </div>
);

const NavbarMenu = () => {
  const navLinks = ['Home', 'About', 'Projects', 'Contact me'];

  return (
    <div className='rounded-full p-1'>
      <div className='rounded-full bg-g-primary gradient-primary p-[2px]'>
        <div className='w-full h-full  bg-[#1C1C1C] rounded-full'>
          <div className='grid grid-rows-1 grid-cols-4 r bg-g-square gap-10  py-3 px-4 rounded-full place-items-center '>
            {navLinks.map((link, i) =>
              i === 0 ? (
                <div className='bg-[#292929] py-3 px-6 rounded-full'>
                  <img className='h-5 w-5' src={homeSvg} />
                </div>
              ) : (
                <div className='text-white text-lg'>{link}</div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const NavbarCTA = () => (
  <div className='flex flex-row items-center'>
    <button className='text-white border-2 border-accent-primary  py-5 px-2 rounded-full min-h-[52px] min-w-[103px] text-lg'>
      Hire me
    </button>
  </div>
);

export default function Navbar() {
  const navbarVariants = {
    hidden: { y: -80 },
    visible: { y: 0 },
  };

  return (
    <motion.nav
      className={'w-full px-2 py-2 '}
      variants={navbarVariants}
      initial='hidden'
      animate='visible'
    >
      <div className='flex justify-between items-center '>
        <NavbarLogo />
        <NavbarMenu />
        <NavbarCTA />
      </div>
    </motion.nav>
  );
}

{
  /* <div
          className='md:hidden flex flex-col gap-1 cursor-pointer'
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            className='h-1 w-8 bg-white'
            animate={{ rotate: isOpen ? 45 : 0 }}
          />
          <motion.div
            className='h-1 w-8 bg-white'
            animate={{ opacity: isOpen ? 0 : 1 }}
          />
          <motion.div
            className='h-1 w-8 bg-white'
            animate={{ rotate: isOpen ? -45 : 0 }}
          />
        </div>
        <ul
          className={`${
            isOpen ? 'flex' : 'hidden'
          } text-md md:flex flex-col md:flex-row items-center gap-6 ${
            isScrolled ? 'text-secondary-dark`' : 'text-secondary-light'
          } `}
        >
          {navLinks.map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <a href={`#${item.toLowerCase()}`} className='hover:text-text'>
                {item}
              </a>
            </motion.li>
          ))}
          <motion.li whileHover={{ scale: 1.1 }}>
            <button className='px-4 py-2 bg-primary-light text-background-dark rounded-full'>
              Contact me
            </button>
          </motion.li>
        </ul> */
}
