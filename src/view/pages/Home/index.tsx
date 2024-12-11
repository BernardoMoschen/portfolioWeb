import { FC } from 'react';
import { About, Hero, Work } from './components';
import { MaskedContainer } from '@/view/components/MaskedContainer';

// const CTASection: FC = () => (
//   <section className='flex flex-row justify-start mt-4 p-2 z-20'>
//     <motion.div className='' initial='hidden' animate='visible'>
//       <div className='gap-4 flex flex-col'>
//         <div className='gap-x-4 flex'>
//           <button className='bg-tron-linear text-white border-2 py-1 px-4 rounded-[20px]  '>
//             Contact me
//           </button>
//           <button className='bg-tron-linear text-white border-2 py-1 px-4 rounded-[20px]  '>
//             More about me
//           </button>
//         </div>
//         <div className='flex flex-row gap-x-2 items-center'>
//           <p className='pr-2'>Find me at</p>
//           <a
//             href='https://github.com/BernardoMoschen'
//             target='_blank'
//             rel='noopener noreferrer'
//             className='bg-tron-linear p-1 rounded-lg'
//           >
//             <Icon className='h-6 w-6' icon='Github' />
//           </a>
//           <a
//             href='https://www.linkedin.com/in/bernardomoschen/'
//             target='_blank'
//             rel='noopener noreferrer'
//             className='bg-tron-linear p-1 rounded-lg'
//           >
//             <Icon className='h-6 w-6 text-white' icon='LinkedIn' />
//           </a>
//         </div>
//       </div>
//     </motion.div>
//   </section>
// );

// const headline = 'Dream it. Build it. Scale it.';
// const targetRef = useRef(null);
// const { scrollYProgress } = useScroll({
//   target: targetRef,
//   offset: ['center center', 'center end'],
// });
// console.log(headline, scrollYProgress);

export const Home: FC = () => (
  <>
    <div>
      <Hero />
      <About />
      <Work />
    </div>
    <MaskedContainer>
      <header className='h-screen relative overflow-hidden backdrop-blur-3xl'>
        <div className=' flex h-full flex-col items-center justify-center'>
          <div className='flex flex-col items-center text-6xl font-semibold md:text-8xl uppercase tracking-tighter  '>
            <h6 className='text-sm uppercase tracking-wider m-2 text-tron-primary font-bold'>
              Bernardo Moschen
            </h6>
            <div>Debugging</div>
            <div className='text-tron-background font-semibold font-Protest'>
              nightmares
            </div>
            <div>since</div>
            <div>2020</div>
          </div>
        </div>
      </header>
      <About />
      <Work />
    </MaskedContainer>
  </>
);
