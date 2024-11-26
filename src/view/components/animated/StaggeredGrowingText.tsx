import { motion, Variants } from 'framer-motion';

interface Props {
  children: string;
  childrenDelay?: number;
  childrenStagger?: number;
  className?: string;
}

const childVariants: Variants = {
  hidden: {
    y: '+100%',
    scale: 0.75,
    transition: {
      type: 'spring',
      damping: 0,
      stiffness: 0,
    },
  },
  visible: {
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      damping: 50,
      stiffness: 200,
    },
  },
};

export function StaggeredGrowingText({
  children,
  childrenDelay = 0,
  childrenStagger = 0.055,
}: Props) {
  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        ease: 'easeOut',
        staggerChildren: childrenStagger,
        delayChildren: i * childrenDelay,
      },
    }),
  };

  return (
    <motion.div
      className='flex overflow-hidden'
      variants={containerVariants}
      viewport={{ once: true }}
      whileInView='visible'
      initial='hidden'
    >
      <div>
        {children.split('').map((lt, i) => (
          <motion.span
            key={i}
            variants={childVariants}
            className='inline-block'
          >
            {lt === ' ' ? '\u00A0' : lt}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};
