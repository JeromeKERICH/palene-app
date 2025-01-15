
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Appointments from '../pages/Appointments';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';
import PrivacyPolicy from "../pages/privacy";
import TermsAndConditions from '../pages/Terms';

const AppRouter = () => {
  return ( 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
      <Route path="Terms" element={<TermsAndConditions/>}/>
    </Routes>
  );
};

export default AppRouter;
