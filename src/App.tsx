import React from 'react';
/* Changed BrowserRouter to HashRouter for GitHub Pages compatibility */
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutCoach from './pages/AboutCoach';
import BioPage from './pages/BioPage'; 
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<AboutCoach />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* These routes are now correctly separated */}
            <Route path="/about" element={<AboutCoach />} />
            <Route path="/biopage" element={<BioPage />} /> 
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
