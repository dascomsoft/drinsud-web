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
import Blog from './pages/Blog';



// Pages admin (sans Layout)
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';



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
        <Route path="/blog" element={<Blog />} />

        {/* Routes admin (sans Layout) */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        {/* Routes admin (sans Layout) */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        
      </Routes>
    </Layout>
  );
}

export default App;















// import { useEffect } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// // Layout
// import Layout from './components/common/Layout';

// // Pages publiques
// import Home from './pages/Home';
// import Services from './pages/Services';
// import Contact from './pages/Contact';
// import Recrutement from './pages/Recrutement';
// import Presentation from './pages/Presentation';
// import Entreprise from './pages/Entreprise';
// import Detail from './pages/Detail';
// import ServiceDetail from './components/services/ServiceDetail';
// import Blog from './pages/Blog';

// // Pages admin (sans Layout)
// import AdminLogin from './pages/AdminLogin';
// import AdminDashboard from './pages/AdminDashboard';

// function App() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//     });
//   }, []);

//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Routes avec Layout */}
//         <Route element={<Layout />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/recrutement" element={<Recrutement />} />
//           <Route path="/presentation" element={<Presentation />} />
//           <Route path="/entreprise" element={<Entreprise />} />
//           <Route path="/detail/:id" element={<Detail />} />
//           <Route path="/services/:categoryId/:serviceSlug" element={<ServiceDetail />} />
//           <Route path="/blog" element={<Blog />} />
//         </Route>
        
//         {/* Routes admin (sans Layout) */}
//         <Route path="/admin/login" element={<AdminLogin />} />
//         <Route path="/admin/dashboard" element={<AdminDashboard />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;