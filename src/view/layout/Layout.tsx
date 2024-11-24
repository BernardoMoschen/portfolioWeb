import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import { ReactLenis } from 'lenis/react';
import { useRef } from 'react';
import { StaggeredGrowingText } from '../components/StaggeredGrowingText';
import logo from '../../assets/trademark/svgLogo.svg';

interface LayoutSectionProps {
  scrollY: MotionValue<number>;
}

export default function Layout() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <ReactLenis root>
      <div ref={container} className='relative h-[200vh]'>
        <motion.div
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
      className='sticky top-0 h-screen w-screen flex flex-col items-center justify-center'
    >
      <img className='h=[250px] w-[250px]' src={logo} />
      <p className='flex flex-col items-center pl-7 w-full text-white px-5 md:px-20 pb-20 font-semibold text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl'>
        <StaggeredGrowingText>Bernardo</StaggeredGrowingText>
        <StaggeredGrowingText childrenDelay={0.25}>
          Moschen
        </StaggeredGrowingText>
      </p>
    </motion.section>
  );
};

const LayoutOutlet = ({ scrollY }: LayoutSectionProps) => {
  const scale = useTransform(scrollY, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollY, [0, 1], [-5, 0]);
  return (
    <motion.div
      style={{ scale, rotate }}
      className='relative h-screen w-screen bg-violet-400'
    >
      <Navbar />
      <div className='pt-[120px] h-full w-full'>
        <Outlet />
      </div>
    </motion.div>
  );
};


