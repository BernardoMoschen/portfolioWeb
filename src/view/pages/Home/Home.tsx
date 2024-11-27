import { Container } from '@/view/components';

// export const Home = () => (
//   <div className='flex flex-col md:flex-row gap-4 items-center'>
//     <Container className='p-[90px]'>
//       <h1 className='text-2xl md:text-4xl lg:text-6xl text-white'>
//         Hi, i am <span className='text-red-600'>Bernardo</span>
//       </h1>
//       <h3 className='text-6xl md:text-6xl lg:text-8xl text-white'>
//         FullStack Developer
//       </h3>
//     </Container>
//     {/* mt-[10%] md:mt-[10%] */}
//     <Container className='h-[350px] w-[350px]' />
//   </div>
// );

export const Home = () => (
  <div className='grid grid-cols-12 grid-rows-2 '>
    <Container className='col-span-full md:col-span-8 min-h-[100%] min-w-[100%]'>
      <div className='p-[5%]'>
        <h1 className='text-3xl md:text-2xl lg:text-2xl text-white'>
          Hi, i am <span className='text-red-600'>Bernardo</span>
        </h1>
        <h3 className='text-2xl md:text-4xl lg:text-8xl text-white'>
          FullStack Developer
        </h3>
      </div>
    </Container>
    <Container className='mt-[25%] min-h-[100%] min-w-[100%] col-start-6 col-span-full md:col-span-2 md:col-start-10' />
  </div>
);
