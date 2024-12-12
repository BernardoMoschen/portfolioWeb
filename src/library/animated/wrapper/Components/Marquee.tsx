import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface MarqueProps {
  marquee1: MarqueItem;
  marquee2: MarqueItem;
}

interface MarqueItem {
  from: number | string;
  to: number | string;
  items: Array<{
    name?: string;
    logo: ReactNode;
  }>;
}

export default function Marquee({ marquee1, marquee2 }: MarqueProps) {
  return (
    <div className='container mx-auto'>
      <MarqueeItem
        items={marquee1.items}
        from={marquee1.from}
        to={marquee1.to}
      />
      <MarqueeItem
        items={marquee2.items}
        from={marquee2.from}
        to={marquee2.to}
      />
    </div>
  );
}

export const MarqueeItem = ({ items, from, to }: MarqueItem) => (
  <div className='flex MyGradient py-4'>
    <motion.div
      initial={{ x: `${from}` }}
      animate={{ x: `${to}` }}
      transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      className='flex flex-shrink-0'
    >
      {items.map(({ logo, name }, index) => (
        <div className='flex flex-col items-center pr-10 md:pr-20 gap-7 md:text-2xl text-tron-beige font-medium'>
          <div className='h-20 w-20 md:h-32 md:w-44 md:mb-10' key={index}>
            {logo}
          </div>
          <span>{name}</span>
        </div>
      ))}
    </motion.div>
    <motion.div
      initial={{ x: `${from}` }}
      animate={{ x: `${to}` }}
      transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      className='flex flex-shrink-0'
    >
      {items.map(({ logo, name }, index) => (
        <div className='flex flex-col items-center pr-10 md:pr-20 gap-7 md:text-2xl text-tron-beige font-medium'>
          <div className='h-20 w-20 md:h-32 md:w-44 md:mb-10' key={index}>
            {logo}
          </div>
          <span>{name}</span>
        </div>
      ))}
    </motion.div>
  </div>
);
