import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// 1. Import your original homepage component (usually called Landing or Home)
import Landing from './components/Landing'; 
// 2. Import your new page
import AboutCoach from './AboutCoach'; 

function App() {
  return (
    <Router>
      <Routes>
        {/* This keeps your ORIGINAL website as the main page */}
        <Route path="/" element={<Landing />} /> 
        
        {/* This adds your NEW page at the /about link */}
        <Route path="/about" element={<AboutCoach />} />
      </Routes>
    </Router>
  );
}

export default App;
