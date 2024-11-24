import { useTransform, motion, useScroll } from 'motion/react';
import FallingText from '../components/FallingText';
import logo from '../../assets/trademark/svgLogo.svg';

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
      className='sticky z-10 w-[30px] h-full py-4 right-0 left-0 z-15 text-cadet_lavender-900 flex flex-col items-center justify-around px-6 font-extrabold text-xs tracking-[0.0200rem]'
      style={{
        background,
        borderRadius,
        top,
      }}
    >
      <div className='flex flex-col items-center content-center'>
        <img src={logo} className='h-[50px] w-[50px]' />
        <FallingText text='Bernardo Moschen' />
      </div>
      <ul className='flex flex-col items-center w-auto'>
        <FallingText text='Work' as={motion.li} />
        <FallingText text='About' as={motion.li} />
        <FallingText text='Contact' as={motion.li} />
      </ul>
    </motion.div>
  );
}
