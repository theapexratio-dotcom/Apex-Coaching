import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import AboutCoach from './components/AboutCoach';
import BioPage from './components/BioPage';
import MembershipPage from './components/MembershipPage';
import TransformationsPage from './components/TransformationsPage';
import LibraryPage from './components/LibraryPage';
import OnboardingPage from './components/OnboardingPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutCoach />} />
          <Route path="/biopage" element={<BioPage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/transformations" element={<TransformationsPage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
