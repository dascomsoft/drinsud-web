import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'; // Supprimez BrowserRouter de l'import
import AOS from 'aos';
import 'aos/dist/aos.css';

// Layout
import Layout from './components/common/Layout';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
// import About from './pages/About';
import Contact from './pages/Contact';
import Recrutement from './pages/Recrutement';
import Presentation from './pages/Presentation';
import Entreprise from './pages/Entreprise';
import Detail from './pages/Detail';
import ServiceDetail from './components/services/ServiceDetail';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    // SUPPRIMEZ le <Router> ici
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/recrutement" element={<Recrutement />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/entreprise" element={<Entreprise />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/services/:categoryId/:serviceSlug" element={<ServiceDetail />} />
      </Routes>
    </Layout>
  );
}

export default App;