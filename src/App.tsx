import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 1. Tell the app where the files are located
import Hero from './components/Hero'; 
import AboutCoach from './AboutCoach'; 
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* 2. Create the web addresses (URLs) for each page */}
        <Route path="/" element={<Hero />} /> 
        <Route path="/about" element={<AboutCoach />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
