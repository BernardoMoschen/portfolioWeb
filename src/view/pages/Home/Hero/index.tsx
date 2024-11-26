import { motion } from 'framer-motion';

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
//           <motion.a
//             href='#portfolio'
//             className='px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition'
//             variants={buttonVariants}
//             whileHover='hover'
//           >
//             View Work
//           </motion.a>
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
{
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
}
// );

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  // const buttonVariants = {
  //   hover: { scale: 1.1, boxShadow: '0px 4px 10px rgba(0,0,0,0.3)' },
  // };
  return (
    <div
      className='h-screen  px-8 md:px-16 bg-transparent 
      flex flex-col md:flex-row items-center justify-evenly
      '
    >
      {/* Left Section */}
      <motion.div
        className='flex flex-col items-start max-w-lg space-y-4'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <motion.h1 className='text-1xl md:text-6xl ' variants={itemVariants}>
          BRING YOUR
          <span className='text-500 text-secondary-light'>IDEAS</span>
          TO REALITY
        </motion.h1>
      </motion.div>
    </div>
  );
}
