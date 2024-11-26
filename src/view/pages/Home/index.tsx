import About from './About/About';
import { Hero3 } from './Hero/Hero2';

export function Home() {
  return (
    <div className='h-full'>
      {/* <Hero /> */}
      <Hero3 />
      <About />
    </div>
  );
}
