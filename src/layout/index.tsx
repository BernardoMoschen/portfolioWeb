import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function Layout() {
  return (
    <div className='h-full w-full static overflow-visible'>
      <Navbar />
      <Outlet />
    </div>
  );
}
