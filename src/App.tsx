import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// This looks into your components folder for the original site
import Hero from './components/Hero'; 
// This looks for your new page
import AboutCoach from './AboutCoach'; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Your original homepage stays exactly here */}
        <Route path="/" element={<Hero />} /> 
        
        {/* Your new updates are live at this link */}
        <Route path="/about" element={<AboutCoach />} />
      </Routes>
    </Router>
  );
}

export default App;
