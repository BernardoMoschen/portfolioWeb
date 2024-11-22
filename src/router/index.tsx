import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home, Projects } from '../view/pages';
import Layout from '../view/layout/Layout';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path='/' element={<Home />} />
        </Route>
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}
