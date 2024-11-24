import { useTransform, motion, useScroll } from 'motion/react';
import FallingText from '../components/FallingText';

export default function Navbar() {
  const { scrollY } = useScroll();

  const background = useTransform(
    scrollY,
    [0, 75],
    ['rgba(0, 183, 255, 0)', 'rgba(31, 31, 31, 1)']
  );

  const borderRadius = useTransform(scrollY, [0, 100], [0, 40]);
  const top = useTransform(scrollY, [0, 100], [0, 15]);

  return (
    <motion.div
      className='sticky z-10 w-full h-[40px] py-4 right-0 left-0 z-15 text-cadet_lavender-900 flex flex-row items-center justify-around px-6 font-extrabold text-xs tracking-[0.0200rem]'
      style={{
        background,
        borderRadius,
        top,
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
