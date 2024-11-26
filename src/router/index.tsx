import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home } from '../view/pages';
import Layout2 from '../view/layout/Layout2';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout2 />}>
          <Route path='/' element={<Home />} />
        </Route>
        {/* <Route path='/projects' element={<Projects />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
