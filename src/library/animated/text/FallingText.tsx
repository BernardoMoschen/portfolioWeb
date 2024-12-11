import { ElementType } from 'react';
import { motion, MotionProps } from 'framer-motion';

interface Props extends MotionProps {
  text: string;
  className?: string;
  as?: ElementType;
}

export default function FallingText({
  text,
  as: Component = motion.div,
  className,
  ...motionProps
}: Props) {
  return (
    <Component
      initial={{
        opacity: 0,
        y: -50,
      }}
      viewport={{ once: true }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
        },
      }}
      className={'text-2xl my-0 mx-4 w-auto h-auto rounded-[5px] '.concat(
        className ?? ''
      )}
      {...motionProps}
    >
      {text}
    </Component>
  );
}
