import {
  motion,
  useVelocity,
  useTransform,
  useSpring,
  MotionValue,
} from 'motion/react';
import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  scrollProgress: MotionValue<number>;
}

export const VelocityText: FC<Props> = ({ children, scrollProgress }) => {
  const scrollVelocity = useVelocity(scrollProgress);

  const skewXRaw = useTransform(
    scrollVelocity,
    [-0.5, 0.5],
    ['45deg', '-45deg']
  );
  const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });

  const xRaw = useTransform(scrollProgress, [0, 1], [0, -4000]);
  const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });

  return (
    <div className='text-white sticky top-0 flex items-center overflow-hidden'>
      <motion.p
        style={{ skewX, x }}
        className='origin-bottom-left whitespace-nowrap text-5xl font-black uppercase leading-[0.85] md:text-7xl md:leading-[0.85]'
      >
        {children}
      </motion.p>
    </div>
  );
};
