import About from './About';
import Hero from './Hero';
import Tech from './Tech';

export function Home() {
  return (
    <div className='flex flex-col'>
      <Hero />
      <About />
      <Tech />
    </div>
  );
}
