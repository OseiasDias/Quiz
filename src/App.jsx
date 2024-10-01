import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AngularPage from './pages/AngularPage';
import BootstrapPage from './pages/BootstrapPage';
import CssPage from './pages/CssPage';
import HtmlPage from './pages/HtmlPage';
import JavascriptPage from './pages/JavascriptPage';
import TailwindPage from './pages/TailwindPage';
import SassPage from './pages/SassPage';
import VuePage from './pages/VuePage';
import ReactPage from './pages/ReactPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/angularPage' element={<AngularPage />} />
        <Route path='/bootstrapPage' element={<BootstrapPage />} />
        <Route path='/cssPage' element={<CssPage />} />
        <Route path='/htmlPage' element={<HtmlPage />} />
        <Route path='/jsPage' element={<JavascriptPage />} />
        <Route path='/tailwindPage' element={<TailwindPage />} />
        <Route path='/sassPage' element={<SassPage />} />
        <Route path='/vuePage' element={<VuePage />} />
        <Route path='/reactPage' element={<ReactPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
