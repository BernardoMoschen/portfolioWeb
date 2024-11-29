import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from 'motion/react';
import { ReactNode, useEffect } from 'react';

interface Props {
  children?: ReactNode;
  className?: string;
  style?: Record<string, string>;
}

const colors = [
  'rgba(10, 15, 20)',
  'rgba(0, 61, 76)',
  'rgba(10, 15, 20, 0.5)',
  'rgba(0, 61, 76)',
];

function AuroraBackground({ children }: Props) {
  const color = useMotionValue(colors[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(115% 175% at 50% 0%, rgba(10, 15, 20) 50%, ${color}`;

  useEffect(() => {
    animate(color, colors, {
      ease: 'easeInOut',
      duration: 5,
      repeat: Infinity,
      repeatType: 'mirror',
    });
  }, [color]);

  return (
    <motion.section
      className='rounded-[29px]'
      style={{
        backgroundImage,
      }}
    >
      {children}
    </motion.section>
  );
}

export const Container = ({ children, className }: Props) => (
  <div
    className={'bg-accent-black border-2 border-accent-surface rounded-[30px] h-fit w-fit'.concat(
      ` ${className}`
    )}
    style={{
      background:
        'linear-gradient(to right,rgba(10, 15, 20, 0.5),rgba(0, 19, 26, 0.9), rgba(10, 15, 20, 0.5))',
    }}
  >
    <AuroraBackground>{children}</AuroraBackground>
  </div>
);
