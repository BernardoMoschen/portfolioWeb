import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Navbar2 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarVariants = {
    hidden: { y: -80 },
    visible: { y: 0 },
  };

  return (
    <motion.nav
      className={`sticky z-50 top-0 w-full bg-opacity-70 backdrop-blur-md px-6 py-4 ${
        isScrolled ? 'bg-gray-800' : 'bg-transparent'
      } text-white transition-all`}
      variants={navbarVariants}
      initial='hidden'
      animate='visible'
    >
      <div className='flex justify-between items-center'>
        <div className='text-2xl font-bold'>Brand</div>
        <div
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
          } md:flex flex-col md:flex-row items-center gap-6 text-white`}
        >
          {['Home', 'About', 'Services', 'Contact'].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <a href={`#${item.toLowerCase()}`} className='hover:text-red-400'>
                {item}
              </a>
            </motion.li>
          ))}
          <motion.li whileHover={{ scale: 1.1 }}>
            <button className='px-4 py-2 bg-red-500 text-white rounded-full'>
              Get Started
            </button>
          </motion.li>
        </ul>
      </div>
    </motion.nav>
  );
};

export { Navbar2 };
