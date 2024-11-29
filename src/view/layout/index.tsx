import { Outlet } from 'react-router-dom';
import { motion } from 'motion/react';
import { ReactLenis } from 'lenis/react';
// import { AuroraBackground } from '../components/AuroraHero';
import Navbar from './Navbar';

export default function Layout() {
  return (
    <ReactLenis root>
      <motion.div
        className='bg-tron-background'
        // className='bg-[#161616]'
        initial={{
          filter: 'blur(4px)',
        }}
        viewport={{ once: true }}
        whileInView={{
          filter: 'blur(0px)',
          transition: {
            duration: 0.75,
          },
        }}
      >
        <div className='h-svh w-full text-white'>
          <Navbar />
          <div className='py-[5%] px-[5%] h-full w-full'>
            <Outlet />
          </div>
        </div>
      </motion.div>
    </ReactLenis>
  );
}
