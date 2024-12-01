import { Outlet } from 'react-router-dom';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import { ReactLenis } from 'lenis/react';
import { useRef } from 'react';
import { StaggeredGrowingText } from '../view/components/animated/text/StaggeredGrowingText';
import logo from '../../assets/trademark/svgLogo.svg';
import arrowDown from '../../assets/icons/arrow-down-com.svg';

interface LayoutSectionProps {
  scrollY: MotionValue<number>;
}

const ScrollButton = () => (
  <motion.div
    initial={{
      opacity: 0,
    }}
    animate={{
      opacity: 1,
    }}
    transition={{
      delay: 2.5,
    }}
    className='flex w-full  flex-col items-center justify-center'
  >
    <p className='text-white text-lg'>scroll down</p>
    <motion.img
      className='h-[30px] w-[30px]'
      animate={{
        transform: ['translateY(0%)', 'translateY(50%)', 'translateY(0%)'],
      }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
      src={arrowDown}
    />
  </motion.div>
);

export default function Layout() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <ReactLenis root>
      <div className='relative h-full w-full bg-black'>
        <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]'></div>
        <div className='absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]'>
          <div ref={container} className='relative h-[200vh]'>
            <motion.div
              className='h-full'
              initial={{
                filter: 'blur(4px)',
              }}
              viewport={{ once: true }}
              whileInView={{
                filter: 'blur(0px)',
                transition: {
                  duration: 0.75,
                },
              }}
            >
              <Cover scrollY={scrollYProgress} />
              <LayoutOutlet scrollY={scrollYProgress} />
            </motion.div>
          </div>{' '}
        </div>
      </div>
    </ReactLenis>
  );
}

const Cover = ({ scrollY }: LayoutSectionProps) => {
  const scale = useTransform(scrollY, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollY, [0, 1], [0, -5]);

  return (
    <motion.section
      style={{ scale, rotate }}
      className='sticky top-0 h-screen w-screen bg-black'
    >
      {/* <Navbar /> */}
      <motion.div
        className='flex flex-col justify-evenly h-svh py-[5%]'
        initial={{
          opacity: 0,
        }}
        viewport={{ once: true }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 2,
            ease: 'easeIn',
          },
        }}
      >
        <div className='flex flex-col justify-center items-center'>
          <img className='h=[250px] w-[250px]' src={logo} />
          <p className='flex flex-col items-center pl-7 w-full text-white px-5 md:px-20 pb-20 font-semibold text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl'>
            <StaggeredGrowingText childrenDelay={1}>
              Bernardo
            </StaggeredGrowingText>
            <StaggeredGrowingText childrenDelay={1.25}>
              Moschen
            </StaggeredGrowingText>
          </p>
        </div>
        <ScrollButton />
      </motion.div>
    </motion.section>
  );
};

const LayoutOutlet = ({ scrollY }: LayoutSectionProps) => {
  const scale = useTransform(scrollY, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollY, [0, 1], [-5, 0]);
  return (
    <motion.div
      style={{ scale, rotate }}
      transition={{
        delayChildren: 5,
      }}
      className='relative h-full w-screen bg-black px-[5%]'
    >
      <div className='pt-[120px] h-full w-full'>
        <Outlet />
      </div>
    </motion.div>
  );
};
