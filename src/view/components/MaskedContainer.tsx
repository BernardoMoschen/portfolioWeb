import { useMousePositionContext } from '@/context/useMousePostionContext';
import { motion } from 'motion/react';
import { ReactNode, useState } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

export const MaskedContainer = ({ children, className }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePositionContext();
  const size = isHovered ? 350 : 40;

  return (
    <motion.div
      transition={{
        ease: 'backOut',
      }}
      animate={{
        WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
        WebkitMaskSize: `${size}px`,
      }}
      className={'mask w-full h-full '.concat(` ${className}`)}
    >
      <div
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        className={`${className}`}
      >
        {children}
      </div>
    </motion.div>
  );
};
