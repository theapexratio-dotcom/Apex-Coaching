import React, { useState } from 'react';

export default function App() {
  const [view, setView] = useState('hub');

  // VIEW 1: ABOUT PAGE
  if (view === 'about') {
    return (
      <div style={{ backgroundColor: '#0a0a0a', color: 'white', minHeight: '100vh', padding: '60px', fontFamily: 'sans-serif' }}>
        <button onClick={() => setView('hub')} style={{ color: '#a855f7', background: 'none', border: 'none', cursor: 'pointer', fontWeight: '900', letterSpacing: '2px' }}>← BACK TO HUB</button>
        <div style={{ textAlign: 'center', marginTop: '80px' }}>
          <h1 style={{ fontSize: '4rem', fontWeight: '900', fontStyle: 'italic', textTransform: 'uppercase' }}>Your <span style={{ color: '#a855f7' }}>Coach</span></h1>
          <div style={{ maxWidth: '400px', margin: '40px auto', border: '1px solid #333', borderRadius: '30px', overflow: 'hidden' }}>
            <img src="https://i.postimg.cc/N5xFfjPR/coach-rich-main.png" style={{ width: '100%' }} alt="Coach" />
          </div>
          <p style={{ fontSize: '1.2rem', color: '#888', maxWidth: '600px', margin: '20px auto' }}>Precision results for the executive schedule.</p>
        </div>
      </div>
    );
  }

  // VIEW 2: HUB (HOME)
  return (
    <div style={{ minHeight: '100vh', fontFamily: 'sans-serif', backgroundColor: 'white', color: 'black' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '30px 60px' }}>
        <div style={{ fontWeight: '900', fontSize: '1.5rem', letterSpacing: '-1px' }}>COACH RICH</div>
        <button onClick={() => setView('about')} style={{ background: 'none', border: 'none', fontWeight: '900', cursor: 'pointer', fontSize: '12px', letterSpacing: '2px' }}>ABOUT COACH</button>
      </nav>

      <main style={{ textAlign: 'center', padding: '120px 20px' }}>
        <h1 style={{ fontSize: '6rem', fontWeight: '900', fontStyle: 'italic', textTransform: 'uppercase', lineHeight: '0.8', letterSpacing: '-4px' }}>
          THE APEX <br /> <span style={{ color: '#a855f7' }}>STANDARD.</span>
        </h1>
        <button onClick={() => setView('about')} style={{ marginTop: '50px', backgroundColor: 'black', color: 'white', padding: '25px 50px', borderRadius: '100px', fontWeight: '900', cursor: 'pointer', border: 'none', letterSpacing: '2px' }}>
          ENTER Hub
        </button>
      </main>

      <section style={{ backgroundColor: 'black', color: 'white', padding: '100px 20px', textAlign: 'center', borderRadius: '60px 60px 0 0' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: '900', fontStyle: 'italic', marginBottom: '40px' }}>APPLY NOW</h2>
        <form action="https://formspree.io/f/mldevvwa" method="POST" style={{ maxWidth: '400px', margin: '0 auto' }}>
          <input name="email" type="email" placeholder="Work Email" required style={{ width: '100%', padding: '20px', borderRadius: '20px', border: '1px solid #333', backgroundColor: '#111', color: 'white', marginBottom: '20px' }} />
          <button type="submit" style={{ width: '100%', padding: '20px', borderRadius: '20px', border: 'none', backgroundColor: '#a855f7', color: 'white', fontWeight: '900', cursor: 'pointer' }}>SUBMIT</button>
        </form>
      </section>
    </div>
  );
}
