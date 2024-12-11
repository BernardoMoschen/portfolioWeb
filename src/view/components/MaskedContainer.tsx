import { useMaskedContainerContext } from '@/context/maskedContainer/MaskedContainerContext';
import { useMousePositionContext } from '@/context/mousePosition/MousePositionContext';
import { useIsMobile } from '@/hooks/useIsMobile';
import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

export const MaskedContainer = ({ children, className }: Props) => {
  const { x, y } = useMousePositionContext();
  const { isMobile } = useIsMobile();
  const { unmask } = useMaskedContainerContext();
  const size = unmask ? 350 : isMobile ? 40 : 55;

  return (
    <motion.div
      transition={{
        ease: 'backOut',
      }}
      animate={{
        WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
        WebkitMaskSize: `${size}px`,
      }}
      className={'mask min-h-full absolute z-10 pointer-events-none top-0 left-0 '.concat(
        `${className ?? ''} ${!unmask && ' mix-blend-difference'}`
      )}
    >
      {children}
    </motion.div>
  );
};
