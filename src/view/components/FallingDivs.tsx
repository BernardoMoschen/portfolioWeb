import { useAnimation, motion } from 'motion/react';
import { useEffect } from 'react';

export function FallingDivs() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      y: 190, // Fall into the box
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 12,
        delay: i * 0.3, // Staggered animation
      },
    }));
  }, [controls]);

  const items = [
    { logo: '🔥', tooltip: 'Fire' },
    { logo: '🌊', tooltip: 'Water' },
    { logo: '🍃', tooltip: 'Earth' },
    { logo: '⚡', tooltip: 'Electricity' },
  ];

  return (
    <div>
      <div className='w-80 h-60 bg-gray-800 rounded-lg relative '>
        {items.map((item, index) => (
          <motion.div
            key={index}
            className='absolute w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center'
            initial={{ y: -200 }} // Start above the container
            custom={index}
            animate={controls}
            style={{
              left: `${20 + index * 60}px`, // Staggered left alignment
            }}
          >
            {/* Tooltip with Logo */}
            <div className='relative'>
              <span className='text-2xl'>{item.logo}</span>
              <div className='absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 hover:opacity-100 transition-opacity'>
                {item.tooltip}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
