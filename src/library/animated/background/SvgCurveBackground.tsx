import { motion, Transition } from 'framer-motion';

// NOTE: Father needs an overflow of hidden will be required on a wrapping
// element to see expected results

const transition: Transition = {
  repeat: Infinity,
  duration: 2,
  ease: 'linear',
  repeatType: 'loop',
};

export const SvgCurveBackground = () => (
  <motion.div
    transition={transition}
    className='pointer-events-none absolute -inset-[100%] opacity-[15%]'
  >
    <svg
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      width='100%'
      height='100%'
      preserveAspectRatio='none'
      viewBox='0 0 900 200'
    >
      <g mask='url("#SvgjsMask1037")' fill='none'>
        <motion.path
          transition={transition}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          d='M-66.37 393.77C96.95 389.43 229.7 151.26 541.16 152.97 852.61 154.68 952.19 635.82 1148.68 669.04'
          stroke='rgba(0, 217, 255, 0.8509803921568627)'
          stroke-width='2'
        />
        <motion.path
          transition={transition}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          d='M-162.65 229.87C-18.85 227.38 97.16 41.3 382.15 45.07 667.14 48.84 742.8 525.91 926.95 565.36'
          stroke='rgba(0, 217, 255, 0.8509803921568627)'
          stroke-width='2'
        />
        <motion.path
          transition={transition}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          d='M-225.24 451C-74.22 445.88 50.47 210.05 329.15 210.2 607.83 210.35 719.54 551.02 883.54 565.87'
          stroke='rgba(0, 217, 255, 0.8509803921568627)'
          stroke-width='2'
        />
        <motion.path
          transition={transition}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          d='M-233.39 311.7C-134.72 311.98-39.17 381.7 155.05 381.7 349.27 381.7 341.92 309.71 543.48 311.7 745.04 313.69 812.28 582.63 931.92 597.46'
          stroke='rgba(0, 217, 255, 0.8509803921568627)'
          stroke-width='2'
        />
        <motion.path
          transition={transition}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          d='M-100.31 268.99C69.23 267.05 212.88 75.27 550.61 78.59 888.33 81.91 991.2 594.63 1201.52 629.98'
          stroke='rgba(0, 217, 255, 0.8509803921568627)'
          stroke-width='2'
        />
      </g>
      <defs>
        <mask id='SvgjsMask1037'>
          <rect width='1440' height='560' fill='#ffffff'></rect>
        </mask>
      </defs>
    </svg>
  </motion.div>
);
