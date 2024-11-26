import { motion } from 'framer-motion';

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

  const buttonVariants = {
    hover: { scale: 1.1, boxShadow: '0px 4px 10px rgba(0,0,0,0.3)' },
  };

  return (
    <div className='h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-16 bg-transparent'>
      {/* Left Section */}
      <motion.div
        className='flex flex-col items-start max-w-lg space-y-4'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <motion.h1
          className='text-4xl md:text-6xl font-bold text-gray-800'
          variants={itemVariants}
        >
          Hello, I'm <span className='text-blue-500'>[Your Name]</span>
        </motion.h1>
        <motion.p
          className='text-lg md:text-xl text-gray-600'
          variants={itemVariants}
        >
          I’m a <span className='font-semibold'>[Your Profession]</span>{' '}
          passionate about creating innovative and impactful digital solutions.
        </motion.p>
        <div className='flex space-x-4'>
          <motion.a
            href='#portfolio'
            className='px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition'
            variants={buttonVariants}
            whileHover='hover'
          >
            View Work
          </motion.a>
          <motion.a
            href='#contact'
            className='px-6 py-3 bg-gray-300 text-gray-800 font-medium rounded-lg hover:bg-gray-400 transition'
            variants={buttonVariants}
            whileHover='hover'
          >
            Hire Me
          </motion.a>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className='relative mt-10 md:mt-0'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className='w-72 h-72 md:w-96 md:h-96 bg-blue-100 rounded-full flex items-center justify-center shadow-lg'>
          <img
            src='https://via.placeholder.com/150'
            alt='Profile'
            className='w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white'
          />
        </div>
      </motion.div>
    </div>
  );
}
