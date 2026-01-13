import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutCoach from './pages/AboutCoach';
import BioPage from './pages/BioPage'; // You must import the BioPage file here
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
            
            {/* FIX: Now they point to two DIFFERENT pages */}
            <Route path="/about" element={<AboutCoach />} />
            <Route path="/biopage" element={<BioPage />} /> 
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
