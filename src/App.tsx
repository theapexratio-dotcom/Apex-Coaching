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
            {/* Setting AboutCoach as the default landing page */}
            <Route path="/" element={<AboutCoach />} />
            
            {/* Other Main Pages */}
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* About Page Aliases - Both links will work now */}
            <Route path="/about" element={<AboutCoach />} />
            <Route path="/biopage" element={<AboutCoach />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
