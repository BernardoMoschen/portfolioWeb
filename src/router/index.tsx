import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Layout from '../view/layout/index';
import { Home } from '@/view/pages';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
