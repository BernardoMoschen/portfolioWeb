import { useScroll, motion, MotionValue, useTransform } from 'motion/react';
import { ReactNode, useRef } from 'react';

interface Props {
  children: string;
}

export default function ProgressText({ children }: Props) {
  return <ProgressParagraph>{children}</ProgressParagraph>;
}

interface ProgressParagraph {
  children: string;
}

function ProgressParagraph({ children }: ProgressParagraph) {
  const words = children.split(' ');

  const spanElement = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: spanElement,
    offset: ['start 0.9', 'start 0.25'],
  });

  return (
    <motion.p
      className='flex flex-wrap p-[40px]'
      ref={spanElement}
      style={{ opacity: scrollYProgress }}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;

        return (
          <ProgressWord key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </ProgressWord>
        );
      })}
    </motion.p>
  );
}

interface ProgressWord {
  children: ReactNode;
  range: [number, number];
  progress: MotionValue<number>;
}

function ProgressWord({ children, range, progress }: ProgressWord) {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className='mr-4 mt-4 relative'>
      <span className='absolute opacity-[0.3]'>{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
}
