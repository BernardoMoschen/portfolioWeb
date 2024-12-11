import { Outlet } from 'react-router-dom';
import NavbarBlur from './NavbarBlur';
// import { AuroraBackground } from '../components/AuroraHero';

export default function Layout() {
  return (
    // <div className='h-full w-full  static overflow-visible '>
    // <NavbarBlur />
    <Outlet />
    // </div>
  );
}
 
    /* <motion.div
            className='bg-tron-background text-tron-beige relative'
            initial={{
              filter: 'blur(4px)',
            }}
            viewport={{ once: true }}
            whileInView={{
              filter: 'blur(0px)',
              transition: {
                duration: 0.75,
              },
            }}
          > */
  
