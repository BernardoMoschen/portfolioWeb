import { Container } from '@/view/components';


export const Hero = () => (
  <div className='relative grid grid-cols-12 gap-4 grid-rows-'>
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
  </div>
);

export const Home = () => (
  <>
    <Hero />
  </>
);
