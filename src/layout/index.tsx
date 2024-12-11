import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function Layout() {
  return (
    <div className='h-auto w-auto static overflow-visible bg-tron-background'>
      <Navbar />
      <Outlet />
    </div>
  );
}
