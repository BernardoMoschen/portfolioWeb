import { MotionValue, useScroll, useTransform, motion } from 'motion/react';
import { useRef } from 'react';

export function Projects() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <div ref={container} className='relative h-[200vh]'>
      <Section1 scrollY={scrollYProgress} />
      <Section2 scrollY={scrollYProgress} />
      <Section3 scrollY={scrollYProgress} />
    </div>
  );
}

interface SectionProps {
  scrollY: MotionValue<number>;
};

const Section1 = ({ scrollY }: SectionProps) => {
  const scale = useTransform(scrollY, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollY, [0, 1], [0, -5]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className='sticky top-0 re h-screen w-screen'
    >
      <img
        className='h-screen w-screen'
        src='https://images.unsplash.com/photo-1566545455366-bcae28fd3929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1956&q=80'
      />
    </motion.div>
  );
};

const Section2 = ({ scrollY }: SectionProps) => {
  const scale = useTransform(scrollY, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollY, [0, 1], [-5, 0]);
  return (
    <motion.div
      style={{ scale, rotate }}
      className='relative h-screen w-screen bg-violet-400'
    />
  );
};

const Section3 = ({ scrollY }: SectionProps) => {
  const scale = useTransform(scrollY, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollY, [0, 1], [-5, 0]);
  return (
    <motion.div
      style={{ scale, rotate }}
      className='relative h-screen w-screen bg-red-600'
    />
  );
};
