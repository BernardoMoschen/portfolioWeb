import { useTransform, motion, useScroll } from 'motion/react';

export default function Navbar() {
  const { scrollY } = useScroll();

  const background = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 183, 255, 0)', 'rgba(0, 183, 255, 1)']
  );
  const height = useTransform(scrollY, [0, 100], [120, 60]);

  return (
    <motion.div
      className='w-full h-15 fixed top-0 right-0 left-0 z-15 bg-[rgba(0,183,255,0)] text-[rgba(21,21,21,1)] flex flex-row items-center justify-around px-6 font-bold text-xs tracking-[0.0200rem]'
      style={{
        background,
        height,
      }}
    >
      <div className='text-2xl bg-amber-950 w-auto h-auto rounded-[30px] mr-auto text-white text-center'>
        Bernardo Moschen
      </div>
      <ul className='flex items-center w-auto'>
        <li className='text-2xl my-0 mx-4 bg-amber-500 w-auto h-auto rounded-[5px] '>
          Work
        </li>
        <li className='text-2xl my-0 mx-4 bg-amber-500 w-auto h-auto rounded-[5px]'>
          About
        </li>
        <li className='text-2xl my-0 mx-4 bg-amber-500 w-auto h-auto rounded-[5px]'>
          Contact
        </li>
      </ul>
    </motion.div>
  );
}
