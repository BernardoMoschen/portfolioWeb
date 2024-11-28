import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home } from '../view/pages';
import Layout from '../view/layout/index';
import { Testing } from '@/view/pages/Testing/Testing';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
        </Route>
        <Route path='/testing' element={<Testing />} />
      </Routes>
    </BrowserRouter>
  );
}
