import { motion, MotionValue, useTransform } from 'framer-motion';

interface ParallaxProps {
  children: string;
  scrollProgress: MotionValue;
  baseVelocity?: number;
  direction?: 'left' | 'right';
}

export function ParallaxText({
  children,
  scrollProgress,
}: // baseVelocity = 25,
// direction = 'left',
ParallaxProps) {
  const x = useTransform(scrollProgress, [0, 1], [-250, 250]);

  return (
    <motion.div
      className='text-white text-[90px] flex uppercase flex-nowrap whitespace-nowrap font-bold'
      style={{
        x,
      }}
    >
      <span
        style={{
          display: 'block',
          marginRight: '30px',
        }}
      >
        {children}
      </span>
      <span> - </span>
      <span
        style={{
          display: 'block',
          marginRight: '30px',
        }}
      >
        {children}
      </span>
    </motion.div>
  );
}
