import { useState, ComponentProps } from 'react';
import { motion } from 'framer-motion';

const gradient = (direction: string, size: number, mask: boolean) =>
  `repeating-linear-gradient(to ${direction}, ` +
  `black 0px, ` +
  `black ${mask ? 0 : size / 2}px, ` +
  `transparent ${mask ? 0 : size / 2}px, ` +
  `transparent ${mask ? size : size / 2}px, ` +
  `black ${mask ? size : size / 2}px, ` +
  `black ${size}px` +
  ')';

const hiddenMask = `${gradient('right', 30, true)}, ${gradient(
  'bottom',
  30,
  true
)}`;
const visibleMask = `${gradient('right', 30, false)}, ${gradient(
  'bottom',
  30,
  false
)}`;

interface Props extends ComponentProps<'img'> {
  imageUrl: string;
}

export function ImageRevealSquare({ imageUrl, ...imageProps }: Props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  return (
    <motion.div
      className='block w-full md:w-1/2'
      initial={false}
      animate={
        isLoaded && isInView
          ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
          : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
      }
      transition={{ duration: 1, ease: [0.32, 0.74, 0.5, -0.16] }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsInView(true)}
    >
      <img
        src={imageUrl}
        alt=''
        {...imageProps}
        onLoad={() => setIsLoaded(true)}
      />
    </motion.div>
  );
}
