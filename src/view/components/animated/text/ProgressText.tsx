import { useScroll, motion, MotionValue, useTransform } from 'motion/react';
import { useRef } from 'react';

interface Props {
  children: string;
}

export function ProgressText({ children }: Props) {
  return <ProgressParagraph>{children}</ProgressParagraph>;
}

interface ProgressParagraph {
  children: string;
}

function ProgressParagraph({ children }: ProgressParagraph) {
  const words = children.split(' ');

  const pElement = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: pElement,
    offset: ['start 0.9', 'start 0.25'],
  });

  return (
    <p className='flex flex-wrap p-4' ref={pElement}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <ProgressWord key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </ProgressWord>
        );
      })}
    </p>
  );
}

interface ProgressWord {
  children: string;
  range: [number, number];
  progress: MotionValue<number>;
}

function ProgressWord({ children, range, progress }: ProgressWord) {
  const characters = children.split('');
  const amount = range[1] - range[0];
  const step = amount / children.length;

  return (
    <span className='mr-2.5 mt-2 relative'>
      {characters.map((char, i) => {
        const start = range[0] + step * i;
        const end = range[0] + step * (i + 1);
        return (
          <ProgressChar range={[start, end]} progress={progress} key={i}>
            {char}
          </ProgressChar>
        );
      })}
    </span>
  );
}

function ProgressChar({ children, range, progress }: ProgressWord) {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span>
      <span className='absolute opacity-[0.3]'>{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
}
