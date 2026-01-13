import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutCoach from './pages/AboutCoach';
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
            {/* This line below makes the Coach page the default Home screen */}
            <Route path="/" element={<AboutCoach />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutCoach />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
 
