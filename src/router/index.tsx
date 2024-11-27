import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home } from '../view/pages';
import Layout from '../view/layout/index';
import { TronPortfolio } from '@/view/pages/Tron/Tron';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
        </Route>
        <Route path='/tron' element={<TronPortfolio />} />
        {/* <Route path='/projects' element={<Projects />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
