import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home } from '../view/pages';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
