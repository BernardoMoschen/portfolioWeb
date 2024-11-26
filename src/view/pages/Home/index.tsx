import About from './About';
import Hero from './Hero';

export function Home() {
  return (
    <div className='h-full'>
      <Hero />
      <About />
    </div>
  );
}
