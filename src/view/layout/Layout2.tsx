import { Outlet } from 'react-router-dom';
import { motion } from 'motion/react';
import { ReactLenis } from 'lenis/react';

export default function Layout2() {
  return (
    <ReactLenis root>
      <div className='relative h-[200vh]'>
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
          <Outlet />
        </motion.div>
      </div>
    </ReactLenis>
  );
}
