import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage_80 from './pages/HomePage_80';
import ErrorPage_80 from './pages/ErrorPage_80';
import SharedLayout_80 from './pages/SharedLayout_80';

import P1Page_80 from './pages/P1Page_80';
import P2Page_80 from './pages/P2Page_80';
import P3Page_80 from './pages/P3Page_80';
import P4Page_80 from './pages/P4Page_80';
import P5Page_80 from './pages/P5Page_80';
import P6Page_80 from './pages/P6Page_80';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout_80 />}>
          <Route index element={<HomePage_80 />} />
          <Route path='p1_80' element={<P1Page_80/>}/>
          <Route path='p2_80' element={<P2Page_80/>}/>
          <Route path='p3_80' element={<P3Page_80/>}/>
          <Route path='p4_80' element={<P4Page_80/>}/>
          <Route path='p5_80' element={<P5Page_80/>}/>
          <Route path='p6_80' element={<P6Page_80/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
