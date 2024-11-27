import { Outlet } from 'react-router-dom';
import { motion } from 'motion/react';
import { ReactLenis } from 'lenis/react';
// import { AuroraBackground } from '../components/AuroraHero';
import Navbar from './Navbar';

export default function Layout() {
  return (
    <ReactLenis root>
      <motion.div
        className='bg-black'
        initial={{
          filter: 'blur(4px)',
          // transform: 'scale(1.5)',
        }}
        viewport={{ once: true }}
        whileInView={{
          filter: 'blur(0px)',
          // transform: 'scale(1)',
          transition: {
            duration: 0.75,
          },
        }}
      >
        {/* <AuroraBackground> */}
        <div className='h-full text-stone-300'>
          <Navbar />
          <Outlet />
        </div>
        {/* </AuroraBackground> */}
      </motion.div>
    </ReactLenis>
  );
}
