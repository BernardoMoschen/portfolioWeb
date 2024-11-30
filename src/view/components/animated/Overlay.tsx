import { motion } from 'framer-motion';
import noise from '@/assets/black-noise.png';

// NOTE: Father needs an overflow of hidden will be required on a wrapping
// element to see expected results

export const FuzzyOverlay = () => (
  <motion.div
    initial={{ transform: 'translateX(-10%) translateY(-10%)' }}
    animate={{
      transform: 'translateX(10%) translateY(10%)',
    }}
    transition={{
      repeat: Infinity,
      duration: 0.2,
      ease: 'linear',
      repeatType: 'mirror',
    }}
    style={{
      backgroundImage: `url(${noise})`,
    }}
    className='pointer-events-none absolute -inset-[100%] opacity-[15%]'
  />
);

