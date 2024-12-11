import { Outlet } from 'react-router-dom';
import NavbarBlur from './NavbarBlur';

export default function Layout() {
  return (
    <div className='h-full w-full static overflow-visible'>
      <NavbarBlur />
      <Outlet />
    </div>
  );
}
