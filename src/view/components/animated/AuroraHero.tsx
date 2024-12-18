import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from 'motion/react';
import { ReactNode, useEffect } from 'react';

interface Props {
  children: ReactNode;
}
const colors = ['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C'];

export function AuroraBackground({ children }: Props) {
  const color = useMotionValue(colors[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(115% 175% at 50% 0%, #020617 50%, ${color}`;

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
      style={{
        backgroundImage,
      }}
    >
      {children}
    </motion.section>
  );
}
