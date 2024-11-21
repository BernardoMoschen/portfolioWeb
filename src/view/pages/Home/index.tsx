import Hero from './components/Hero';

export function Home() {
  const boxCount = Array.from(Array(100).keys());
  console.log(boxCount.length);

  return (
    <>
      <div className='h-full'>
        <Hero />
        <>
          {boxCount.map((box, index) => (
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
