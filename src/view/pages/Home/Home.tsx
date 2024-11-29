import { Container, Icon } from '@/view/components';
import { motion } from 'framer-motion';

export const Hero = () => (
  <section className='relative grid grid-cols-12 gap-4 grid-rows-'>
    <Container
      className='
        col-span-full
        md:col-span-12
        row-span-1
        md:row-span-full
        min-h-[100%]
        min-w-[100%]'
    >
      <div className='p-[5%]'>
        <h1 className='text-3xl md:text-2xl lg:text-2xl text-white'>
          Hi, I am <span className='text-red-600 text-4xl'>Bernardo</span>
        </h1>
        <h3 className='text-2xl md:text-4xl lg:text-4xl text-white'>
          FullStack Developer
        </h3>
      </div>
    </Container>
  </section>
);

const CTASection: React.FC = () => (
  <section className='flex flex-row justify-start mt-4'>
    <motion.div className='' initial='hidden' animate='visible'>
      <div className='gap-4 flex flex-col'>
        <div className='gap-x-4 flex'>
          <button className='bg-tron-linear text-white border-2 py-1 px-4 rounded-[20px]  '>
            Contact me
          </button>
          <button className='bg-tron-linear text-white border-2 py-1 px-4 rounded-[20px]  '>
            More about me
          </button>
        </div>
        <div className='flex flex-row gap-x-2 items-center'>
          <p className='pr-2'>Find me at</p>
          <a
            href='https://github.com/BernardoMoschen'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-tron-linear p-1 rounded-lg'
          >
            <Icon className='h-6 w-6' icon='Github' />
          </a>
          <a
            href='https://github.com/BernardoMoschen'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-tron-linear p-1 rounded-lg'
          >
            <Icon className='h-6 w-6 text-white' icon='LinkedIn' />
          </a>
        </div>
      </div>
    </motion.div>
  </section>
);

export const Home = () => (
  <>
    <Hero />
    <CTASection />
  </>
);
