import Navbar from './components/Navbar/Navbar';
import Footer from './components/footerds/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
