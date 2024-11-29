import { Container } from '@/view/components';

export const Home = () => (
  <div className='relative grid grid-cols-12 gap-4 grid-rows-'>
    <Container
      className='
        col-span-full
        md:col-span-8
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


    {/* <Container
      className={`
        hidden
        md:grid
        absolute
        col-span-4
        md:col-span-5
        row-start-1
        row-span-4
        md:row-span-4
        col-start-8
        md:col-start-7
        h-[80%]
        w-[80%]
        self-center
      `}
    >
      <img className='h-full w-full object-cover rounded-[30px]' src={myself} />
    </Container>
    <Container
      className='hidden
        md:grid col-span-7 col-start-6 md:col-span-2 md:col-start-10
        row-span-3
        md:mt-[15px]
        md:mb-[10px]
    min-h-[100%] min-w-[100%]'
    /> */}
  </div>
);
