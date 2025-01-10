import { BrowserRouter as Router } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import AppRouter from './routes/AppRoutes';
import Footer from './components/Footer';
const App = () => {
  return (
    <Router>
      <Navbar/>
      <AppRouter/>
      <Footer/>
    </Router>
  );
};

export default App;
