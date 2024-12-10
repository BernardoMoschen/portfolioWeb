import { useState } from 'react';
import { motion } from 'motion/react';
import { useMousePositionContext } from '@/context/useMousePostionContext';

export const Testing = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePositionContext();
  const size = isHovered ? 400 : 40;

  return (
    <section className='h-screen'>
      <motion.div
        transition={{
          type: 'tween',
          ease: 'backOut',
          duration: 0.5,
        }}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        className={'w-full h-full mask'}
      >
        <div
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className='flex flex-col items-center text-8xl uppercase tracking-tighter'
        >
          <div>Debugging</div>
          <div className='text-tron-secondary font-Protest'>nightmares</div>
          <div>since</div>
          <div>2020</div>
        </div>
      </motion.div>
      <DefaultBlock />
    </section>
  );
};

const DefaultBlock = () => (
  <div className=' flex flex-col items-center text-8xl uppercase tracking-tighter  text-tron-beige'>
    <div>Empowering</div>
    <div className='text-tron-secondary font-Protest'>dreams</div>
    <div>since</div>
    <div>2020</div>
  </div>
);
