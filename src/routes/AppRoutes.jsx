
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Appointments from '../pages/Appointments';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';

const AppRouter = () => {
  return ( 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
};

export default AppRouter;
