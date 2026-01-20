import React, { useState } from 'react';

// --- VIEW 1: ABOUT COACH ---
const AboutCoach = ({ onBack, onSeeBio }) => (
  <div style={{ backgroundColor: '#0a0a0a', color: 'white', minHeight: '100vh', padding: '40px', fontFamily: 'sans-serif' }}>
    <button onClick={onBack} style={{ color: '#a855f7', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>← BACK TO HUB</button>
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ fontSize: '3rem', textTransform: 'uppercase', fontStyle: 'italic' }}>Get To Know <span style={{ color: '#a855f7' }}>Your Coach</span></h1>
      <div onClick={onSeeBio} style={{ cursor: 'pointer', marginTop: '40px' }}>
        <div style={{ border: '1px solid #333', borderRadius: '20px', overflow: 'hidden', maxWidth: '400px', margin: '0 auto' }}>
          <img src="https://i.postimg.cc/N5xFfjPR/coach-rich-main.png" alt="Coach" style={{ width: '100%', display: 'block' }} />
        </div>
        <p style={{ color: '#a855f7', marginTop: '15px', fontWeight: 'bold' }}>CLICK TO READ FULL BIO</p>
      </div>
    </div>
  </div>
);

// --- VIEW 2: FULL BIO ---
const FullBio = ({ onBack }) => (
  <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', padding: '40px', fontFamily: 'sans-serif' }}>
    <button onClick={onBack} style={{ color: '#a855f7', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>← BACK</button>
    <div style={{ maxWidth: '800px', margin: '50px auto' }}>
      <h1 style={{ fontSize: '4rem', textTransform: 'uppercase' }}>The <span style={{ color: '#a855f7' }}>Foundation</span></h1>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#ccc' }}>
        I specialize in working with high-earning executives and busy professionals who demand the same excellence in their physical health as they do in their careers.
      </p>
    </div>
  </div>
);

// --- MAIN APP ---
export default function App() {
  const [view, setView] = useState('hub');

  if (view === 'about') return <AboutCoach onBack={() => setView('hub')} onSeeBio={() => setView('bio')} />;
  if (view === 'bio') return <FullBio onBack={() => setView('about')} />;

  return (
    <div style={{ minHeight: '100vh', fontFamily: 'sans-serif', backgroundColor: 'white' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '30px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ fontWeight: '900', fontSize: '1.5rem' }}>COACH RICH</div>
        <div>
          <button onClick={() => setView('about')} style={{ background: 'none', border: 'none', fontWeight: 'bold', cursor: 'pointer', textTransform: 'uppercase', fontSize: '12px' }}>About Coach</button>
        </div>
      </nav>

      <main style={{ textAlign: 'center', padding: '100px 20px' }}>
        <h1 style={{ fontSize: '5rem', fontWeight: '900', textTransform: 'uppercase', fontStyle: 'italic', lineHeight: '0.9' }}>
          THE APEX <br /> <span style={{ color: '#a855f7' }}>STANDARD.</span>
        </h1>
        <button onClick={() => setView('about')} style={{ marginTop: '40px', backgroundColor: 'black', color: 'white', padding: '20px 40px', borderRadius: '50px', fontWeight: 'bold', textTransform: 'uppercase', cursor: 'pointer', border: 'none' }}>
          Enter Hub
        </button>
      </main>
    </div>
  );
}
