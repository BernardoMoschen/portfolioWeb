import { Outlet } from 'react-router-dom';
import { motion } from 'motion/react';
import { ReactLenis } from 'lenis/react';
import { AuroraBackground } from '../components/AuroraHero';
import { Navbar2 } from './Navbar2';

export default function Layout2() {
  return (
    <ReactLenis root>
      <motion.div
        className='h-full'
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
        <AuroraBackground>
          <Navbar2 />
          <Outlet />
        </AuroraBackground>
      </motion.div>
    </ReactLenis>
  );
}
