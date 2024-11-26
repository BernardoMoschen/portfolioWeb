import { motion, MotionValue, useTransform } from 'framer-motion';

interface Props {
  children: string;
  scrollProgress: MotionValue;
  direction?: 'left' | 'right';
  left?: string;
  velocity?: number;
}

export function ParallaxText({
  children,
  scrollProgress,
  direction = 'left',
  left,
  velocity = 1,
}: // baseVelocity = 25,
Props) {
  const dir = direction === 'left' ? -1 : 1;
  const x = useTransform(
    scrollProgress,
    [0, 1],
    [-150 * (dir * velocity), 250 * (dir * velocity)]
  );

  return (
    <motion.div
      className='text-cadet_brown-900 text-[90px] flex uppercase flex-nowrap whitespace-nowrap font-bold'
      style={{
        x,
        left,
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
      <span>{' - ‎'}</span>
      <span
        style={{
          display: 'block',
          marginRight: '30px',
        }}
      >
        {children}
      </span>
      <span>{' - ‎'}</span>
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
