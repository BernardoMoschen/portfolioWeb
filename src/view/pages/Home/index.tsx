import Hero from './components/Hero';

export function Home() {
  const boxCount = Array.from(Array(100).keys());

  return (
    <>
      <div className='h-full'>
        <Hero />
        <>
          {boxCount.map((_box, index) => (
            <div
              className='w-[30%] h-[100px] m-[1.5%] rounded-[10px] bg-cyan-200 inline-block'
              key={index}
            />
          ))}
        </>
      </div>
    </>
  );
}
