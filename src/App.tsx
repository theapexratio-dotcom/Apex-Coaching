import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing from your new folders
import Hero from './components/Hero'; 
import AboutCoach from './pages/AboutCoach'; 
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ClientDashboard from './pages/ClientDashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Homepage */}
        <Route path="/" element={<Hero />} /> 
        
        {/* New Coach Page */}
        <Route path="/about" element={<AboutCoach />} />

        {/* Other Pages */}
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<ClientDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
