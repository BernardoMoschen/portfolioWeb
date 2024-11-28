import { motion } from 'motion/react';

const TronSvg = () => (
  <svg
    width='200'
    height='60'
    viewBox='0 0 200 60'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect
      x='5'
      y='5'
      width='190'
      height='50'
      fill='none'
      stroke='url(#neon-gradient)'
      stroke-width='4'
      stroke-dasharray='480'
      stroke-dashoffset='480'
    >
      <animate
        attributeName='stroke-dashoffset'
        from='480'
        to='0'
        dur='2s'
        repeatCount='indefinite'
      />
    </rect>
    <defs>
      <linearGradient id='neon-gradient' x1='0%' y1='0%' x2='100%' y2='0%'>
        <stop
          offset='0%'
          style={{
            stopColor: '#00d9ff',
            stopOpacity: 1,
          }}
        />
        <stop
          offset='100%'
          style={{
            stopColor: '#ff4d00',
            stopOpacity: 1,
          }}
        />
      </linearGradient>
    </defs>
  </svg>
);

const TronBorder = () => (
  <motion.div
    initial={{
      borderImageSource: 'linear-gradient(90deg, transparent, transparent)',
    }}
    animate={{
      borderImageSource: 'linear-gradient(90deg, #00d9ff, #ff4d00)',
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      repeatType: 'reverse',
    }}
    className='tron-border'
    // style={{
    //   boxShadow: '0 0 10px #00d9ff, 0 0 20px #ff4d00',
    // }}
  >
    Build the Grid
  </motion.div>
);

export const Testing = () => (
  <>
    <div className='min-h-screen w-screen bg-black flex justify-center items-center'>
      <TronBorder />
    </div>
    <div className='min-h-screen w-screen bg-black flex justify-center items-center'>
      <TronSvg />
    </div>
  </>
);
