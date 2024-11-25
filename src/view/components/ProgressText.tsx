import { useScroll, motion } from 'motion/react';
import { ReactNode, useEffect, useRef } from 'react';

interface Props {
  children: ReactNode;
}

export default function ProgressText({ children }: Props) {
  const pElement = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: pElement,
    offset: ['start 0.9', 'start 0.25'],
  });

  useEffect(() => {
    scrollYProgress.on('change', (e) => console.log(e));
  }, []);

  return (
    <motion.p ref={pElement} style={{ opacity: scrollYProgress }}>
      {children}
    </motion.p>
  );
}
