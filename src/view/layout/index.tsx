import { Outlet } from 'react-router-dom';
import { motion } from 'motion/react';
import { ReactLenis } from 'lenis/react';
// import { AuroraBackground } from '../components/AuroraHero';
import NavbarBlur from './NavbarBlur';
import { MousePositionProvider } from '@/context/mousePositionProvider';

export default function Layout() {
  return (
    <ReactLenis root>
      <MousePositionProvider>
        <div className='h-full w-full  static overflow-visible '>
          <NavbarBlur />
          <motion.div
            className='bg-tron-background text-tron-beige'
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
            <Outlet />
          </motion.div>
        </div>
      </MousePositionProvider>
    </ReactLenis>
  );
}
