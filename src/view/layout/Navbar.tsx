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
      <div
        id='logo'
        className='bg-amber-950 w-[30px] h-[30px] rounded-[30px] mr-auto'
      />
      <ul className='flex items-center'>
        <li className='my-0 mx-4 bg-amber-500 w-[30px] h-[10px] rounded-[5px] '>
          1
        </li>
        <li className='my-0 mx-4 bg-amber-500 w-[30px] h-[10px] rounded-[5px]'>
          2
        </li>
        <li className='my-0 mx-4 bg-amber-500 w-[30px] h-[10px] rounded-[5px]'>
          3
        </li>
      </ul>
    </motion.div>
  );
}
