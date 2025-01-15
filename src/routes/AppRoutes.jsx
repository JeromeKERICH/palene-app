
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Appointments from '../pages/Appointments';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';

import TermsAndConditions from '../pages/Terms';
import PrivacyPolicy from '../pages/privacy';

const AppRouter = () => {
  return ( 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="Terms" element={<TermsAndConditions/>}/>
      <Route path="privacypolicy" element={<PrivacyPolicy/>}/>
    </Routes>
  );
};

export default AppRouter;
