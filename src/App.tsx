import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AboutCoach from './pages/AboutCoach';
import Biopage from './pages/biopage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Make AboutCoach the default home page */}
        <Route path="/" element={<AboutCoach />} />

        {/* About and Bio routes */}
        <Route path="/about" element={<AboutCoach />} />
        <Route path="/biopage" element={<Biopage />} />

        {/* Other Pages */}
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
