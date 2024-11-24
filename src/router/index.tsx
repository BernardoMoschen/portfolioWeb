import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home } from '../view/pages';
import Layout from '../view/layout/Layout';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
        </Route>
        {/* <Route path='/projects' element={<Projects />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
