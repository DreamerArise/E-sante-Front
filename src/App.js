import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PatientProfile from './pages/PatientProfile';
import DoctorProfile from './pages/DoctorProfile';
import HospitalManagement from './pages/HospitalManagement';
import AppointmentManagement from './pages/AppointmentManagement';
import Login from './pages/Login';
import Register from './pages/Register';
import Privacy from './pages/Privacy'; // Ajout de l'import pour Privacy
import Terms from './pages/Terms'; // Ajout de l'import pour Terms
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <Router>
      <div>
        <Header />
        <IconButton onClick={handleSidebarOpen} style={{ position: 'absolute', top: 12, left: -10 }}>
          <MenuIcon />
        </IconButton>
        <Sidebar open={sidebarOpen} onClose={handleSidebarClose} />
        <main style={{ marginTop: '80px' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/patient-profile" element={<PatientProfile />} />
            <Route path="/doctor-profile" element={<DoctorProfile />} />
            <Route path="/hospital-management" element={<HospitalManagement />} />
            <Route path="/appointment-management" element={<AppointmentManagement />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/privacy" element={<Privacy />} /> {/* Ajout de la route pour Privacy */}
            <Route path="/terms" element={<Terms />} /> {/* Ajout de la route pour Terms */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;



