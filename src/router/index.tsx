import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home } from '../view/pages';
import Layout from '../view/layout/Layout';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path='/' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
