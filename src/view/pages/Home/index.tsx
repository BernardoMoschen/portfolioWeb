import Hero from './components/Hero';

export function Home() {
  const boxCount = Array.from(Array(100).keys());
  console.log(boxCount.length);

  return (
    <>
      <div>
        <Hero />
        {boxCount.map((box, index) => (
          <div className='h-[100px] rounded-sm bg-cyan-200 w-3' key={index} />
        ))}
      </div>
    </>
  );
}
