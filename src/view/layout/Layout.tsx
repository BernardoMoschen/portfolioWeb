import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Layout() {
  return (
    <motion.div
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
      <Navbar />
      <div className='pt-[120px] h-full w-full'>
        <Outlet />
      </div>
    </motion.div>
  );
}
