import { motion, useAnimation, useInView } from 'framer-motion';
import './a.css';
import { useEffect, useState } from 'react';

// const oldHero = () => (
//   <motion.div
//     className='flex flex-col items-start max-w-lg space-y-4'
//     variants={containerVariants}
//     initial='hidden'
//     animate='visible'
//   >
//     <motion.h1
//       className='text-3xl md:text-6xl font-bold text-text-dark'
//       variants={itemVariants}
//     >
//       Hello,
//       <br />
//       I'm <span className='text-500 text-secondary-dark'>Bernardo Moschen</span>
//     </motion.h1>
//     <motion.p
//       className='text-lg md:text-xl text-text-dark'
//       variants={itemVariants}
//     >
//       I’m a{' '}
//       <span className='font-semibold text-secondary-dark'>
//         FullStack Developer
//       </span>{' '}
//       passionate about creating innovative and impactful digital solutions.
//     </motion.p>
//     {/* <div className='flex space-x-4'>
//           <motion.as
//             href='#portfolio'
//             className='px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition'
//             variants={buttonVariants}
//             whileHover='hover'
//           >
//             View Work
//           </motion.as>
//           <motion.a
//             href='#contact'
//             className='px-6 py-3 bg-gray-300 text-gray-800 font-medium rounded-lg hover:bg-gray-400 transition'
//             variants={buttonVariants}
//             whileHover='hover'
//           >
//             Hire Me
//           </motion.a>
//         </div> */}
//   </motion.div>
//  Right Section
/* <motion.div
  className='relative mt-10 md:mt-0'
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
>
  <div className='w-72 h-72 md:w-96 md:h-96 bg-blue-100 rounded-full flex items-center  justify-center shadow-lg'>
    <ImageRevealSquare
      imageUrl={myselfImg}
      alt='Bernardo Moschen'
      className='w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white flex justify-center'
    />
  </div>
</motion.div>; */
// );

export default function Hero() {
  // Intersection Observer for inView animations
  const [hasAnimated, setHasAnimated] = useState(false); // Tracks if the animation has triggered
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
    setHasAnimated(true);
  }, [controls, hasAnimated]);

  // Use the useInView hook to detect visibility

  // Variants for framer-motion animations
  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay: 0.3 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut', delay: 0.6 },
    },
    hover: { scale: 1.1, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  return (
    <div className='relative flex items-center justify-center h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black'>
      {/* Animated Background */}
      <div className='absolute inset-0 bg-gradient-radial from-transparent via-white/10 to-transparent animate-gradient-motion'></div>

      {/* Hero Content */}
      <div className='z-10 text-center'>
        <motion.h1
          className='text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500'
          variants={headingVariants}
          initial='hidden'
          animate={controls}
        >
          Unlock Your Full{' '}
          <span className='animate-text-shimmer'>Potential</span>
        </motion.h1>
        <motion.p
          className='mt-4 text-lg text-gray-300'
          variants={textVariants}
          initial='hidden'
          animate={controls}
        >
          Empowering creativity and innovation to shape a better tomorrow.
        </motion.p>
        <motion.div
          className='flex justify-center mt-8 gap-4'
          variants={buttonVariants}
          initial='hidden'
          animate={controls}
        >
          <motion.button
            className='px-6 py-3 text-lg font-semibold text-white bg-pink-500 rounded-full hover:bg-pink-600'
            variants={buttonVariants}
            whileHover='hover'
          >
            Get Started
          </motion.button>
          <motion.button
            className='px-6 py-3 text-lg font-semibold text-white border-2 border-gray-300 rounded-full hover:bg-gray-700'
            variants={buttonVariants}
            whileHover='hover'
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
// export default function Hero() {
//   const containerVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 1, staggerChildren: 0.3 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 1 } },
//   };

//   return (
//     <div className='h-screen w-full px-4 grid grid-cols-12 grid-flow-row auto-rows-max'>
//       <motion.div
//         className='col-span-8 row-span-1'
//         variants={containerVariants}
//         initial='hidden'
//         animate='visible'
//       >
//         <motion.h1
//           className='text-8xl md:text-8xl text-500 text-white'
//           variants={itemVariants}
//         >
//           Bernardo.
//         </motion.h1>
//       </motion.div>
//       <div className='bg-stone-500 col-span-4'></div>
//       <motion.div
//         className=''
//         variants={containerVariants}
//         initial='hidden'
//         animate='visible'
//       >
//         <div className='px-4 py-4'>
//           <motion.h1
//             className='text-4xl md:text-6xl w-full'
//             variants={itemVariants}
//           >
//             About me
//           </motion.h1>
//           <motion.h2
//             className='text-lg md:text-1xl w-full'
//             variants={itemVariants}
//           >
//             I work with React Ecosystem,
//             loreIpsumloreIpsumloreIpsumloreIpsumloreIpsumloreIpsum.
//           </motion.h2>
//         </div>
//       </motion.div>
//     </div>
//   );
// }
