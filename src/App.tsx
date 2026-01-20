import React, { useState } from 'react';
// (Keep your other imports there too)
import React, { useState } from 'react';

const App = () => {
  // SETTINGS
  const formspreeId = "mldevvwa"; 
  const [showAccessRestricted, setShowAccessRestricted] = useState(false);

  // YOUR DIRECT IMAGE LINKS
  const images = {
    mainHero: "https://i.postimg.cc/N5xFfjPR/coach-rich-main.png",
    largeBio: "https://i.postimg.cc/LhLhwTkd/coach-rich-bio.png",
    transform1: "https://i.postimg.cc/cv4HKGVF/transformation-1.png",
    transform2: "https://i.postimg.cc/cv4HKGVD/transformation-2.png",
    transform3: "https://i.postimg.cc/ZCLnK5Ds/apex-ratio.png"
  };

  // 1. YOUR ACCESS RESTRICTED SCREEN
  if (showAccessRestricted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 font-sans">
        <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-xl border border-slate-100 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-orange-100">
            <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Access Restricted</h1>
          <p className="text-slate-600 mb-6">Contact the administrator for access.</p>
          <button onClick={() => setShowAccessRestricted(false)} className="text-xs text-blue-500 underline">Enter Site Preview</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="font-black text-2xl uppercase tracking-tighter">COACH RICH (V2)</div>
        <div className="space-x-6 text-xs font-bold uppercase tracking-widest">
          <a href="#bio">Bio</a>
          <a href="#transformation">Transformation</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-6xl font-black mb-6">THE APEX STANDARD.</h1>
          <p className="text-lg text-slate-600 mb-8">High-performance coaching for elite results.</p>
          <a href="#contact" className="bg-black text-white px-10 py-4 rounded-full font-bold">Inquire Now</a>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img src={images.mainHero} alt="Coach Rich" className="w-full" />
        </div>
      </section>

      {/* Bio Page Section */}
      <section id="bio" className="bg-slate-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-10">THE METHODOLOGY</h2>
          <img src={images.largeBio} alt="Bio" className="rounded-2xl shadow-lg mb-8" />
        </div>
      </section>

      {/* Transformation Row */}
      <section id="transformation" className="py-20 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-black mb-16">THE APEX RATIO</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <img src={images.transform1} alt="Stage 1" className="rounded-xl shadow-md h-96 w-full object-cover" />
          <img src={images.transform2} alt="Stage 2" className="rounded-xl shadow-md h-96 w-full object-cover" />
          <img src={images.transform3} alt="Apex" className="rounded-xl shadow-md h-96 w-full object-cover border-4 border-orange-500" />
        </div>
      </section>

      {/* Formspree Contact Form */}
      <section id="contact" className="py-20 bg-slate-900 text-white px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Coach Rich</h2>
          <form action={`https://formspree.io/f/${formspreeId}`} method="POST" className="space-y-4">
            <input type="email" name="email" placeholder="Email Address" className="w-full p-4 rounded-xl bg-slate-800 border-none" required />
            <textarea name="message" placeholder="Your Goals" rows={4} className="w-full p-4 rounded-xl bg-slate-800 border-none" required></textarea>
            <button type="submit" className="w-full bg-orange-600 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-orange-500 transition">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default App;
