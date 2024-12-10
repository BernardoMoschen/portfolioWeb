import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home } from '../view/pages';
import Layout from '../view/layout/index';
import { Testing } from '@/view/pages/testing/Testing';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/testing' element={<Testing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
