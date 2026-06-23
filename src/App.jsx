import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';

// Importation des composants
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';
import Login from './pages/Login';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Engagements from './pages/Engagements';
import Realisations from './pages/Realisations';
import Contact from './pages/Contact';

// Protection de route : vérifie si l'admin est connecté
const ProtectedRoute = ({ children }) => {
  const isAuth = localStorage.getItem("isAdmin") === "true";
  return isAuth ? children : <Navigate to="/login" />;
};

const PublicLayout = () => (
  <div className="min-h-screen bg-white">
    <Navbar />
    <Outlet />
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes publiques */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/engagements" element={<Engagements />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Routes Admin */}
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;