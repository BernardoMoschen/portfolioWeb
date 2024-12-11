import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from 'motion/react';
import { ReactNode, useEffect } from 'react';

interface Props {
  children: ReactNode;
  colorSet?: string[];
}
const colors = ['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C'];

export function AuroraBackground({ children, colorSet = colors }: Props) {
  const color = useMotionValue(colorSet[0]);
  const backgroundImage = useMotionTemplate`repeating-radial-gradient(90% 175% at 50% 0%, #020617 50%, ${color}`;

  useEffect(() => {
    animate(color, colorSet, {
      ease: 'easeInOut',
      duration: 5,
      repeat: Infinity,
      repeatType: 'mirror',
    });
  }, [color, colorSet]);

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
