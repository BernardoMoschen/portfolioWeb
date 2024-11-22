import { useRef } from 'react';
import { ImageRevealSquare } from '../../../components/ImageRevealSquare';
import { ParallaxText } from '../../../components/ParallaxText';
import { StaggeredGrowingText } from '../../../components/StaggeredGrowingText';
import { motion, useScroll } from 'motion/react';

export default function Hero() {
  const heroContainer = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroContainer,
    offset: ['start end', 'end start'],
  });

  return (
    <div className='w-full text-darkRed-200'>
      <motion.p
        initial={{
          opacity: 0,
        }}
        viewport={{ once: true }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1.5,
          },
        }}
        className='font-semibold text-xl  text-center p-8'
      >
        Full Stack Developer based in Brasil
      </motion.p>
      <p className='w-full px-5 md:px-20 pb-20 font-semibold text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl justify-start'>
        <StaggeredGrowingText>Creative</StaggeredGrowingText>
        <StaggeredGrowingText childrenDelay={0.25}>
          Developer
        </StaggeredGrowingText>
      </p>
      <div className='flex justify-end w-full px-5 md:px-20 mb-20 font-semibold relative'>
        <ImageRevealSquare imageUrl='https://images.unsplash.com/photo-1566545455366-bcae28fd3929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1956&q=80' />
      </div>
      <div ref={heroContainer} className='overflow-hidden w-full'>
        <ParallaxText
          scrollProgress={scrollYProgress}
          direction='right'
          left='-115%'
        >
          FullStack Developer
        </ParallaxText>
        <ParallaxText scrollProgress={scrollYProgress} left='-15%' velocity={3}>
          Coding ideas into reality
        </ParallaxText>
      </div>
    </div>
  );
}
