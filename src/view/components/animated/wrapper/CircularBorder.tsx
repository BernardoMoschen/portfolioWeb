import { useTime, useTransform, motion } from 'motion/react';
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

export const ContainerBorder = ({ children }: Props) => {
  const time = useTime();
  const rotate = useTransform(time, [0, 3000], [0, 360], {
    clamp: false,
  });
  const rotatingBg = useTransform(
    rotate,
    (r) =>
      `conic-gradient(from ${r}deg, rgba(10, 15, 20, 0.5),rgba(0, 19, 26, 0.9),blue, rgba(10, 15, 20, 0.5))`
  );

  return (
    <div className='relative'>
      <div className='relative w-full h-full bg-black z-20'>{children}</div>
      <motion.div
        className='absolute -inset-[1px] rounded-md '
        style={{ background: rotatingBg }}
      />
    </div>
  );
};
