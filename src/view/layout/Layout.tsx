import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className='pt-[120px] h-full w-full'>
        <Outlet />
      </div>
    </>
  );
}
