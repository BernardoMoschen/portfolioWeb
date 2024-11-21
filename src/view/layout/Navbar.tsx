import { useTransform, motion, useScroll } from 'motion/react';
import FallingText from '../components/FallingText';

export default function Navbar() {
  const { scrollY } = useScroll();

  const background = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 183, 255, 0)', 'rgba(60, 0, 0, 0.9)']
  );
  const height = useTransform(scrollY, [0, 100], [120, 60]);

  return (
    <motion.div
      className='w-full h-15 fixed top-0 right-0 left-0 z-15 text-white flex flex-row items-center justify-around px-6 font-bold text-xs tracking-[0.0200rem]'
      style={{
        background,
        height,
      }}
    >
      <FallingText text='Bernardo Moschen' />
      <ul className='flex items-center w-auto'>
        <FallingText text='Work' as={motion.li} />
        <FallingText text='About' as={motion.li} />
        <FallingText text='Contact' as={motion.li} />
      </ul>
    </motion.div>
  );
}
