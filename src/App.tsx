import React, { useState } from 'react';

const App = () => {
  // SETTINGS & LINKS
  const formspreeId = "mldevvwa"; 
  const [showAccessRestricted, setShowAccessRestricted] = useState(false);

  // Direct Image Links (Converted for code compatibility)
  const images = {
    mainHero: "https://i.postimg.cc/N5xFfjPR/coach-rich-main.png",
    largeBio: "https://i.postimg.cc/LhLhwTkd/coach-rich-bio.png",
    transform1: "https://i.postimg.cc/cv4HKGVF/transformation-1.png",
    transform2: "https://i.postimg.cc/cv4HKGVD/transformation-2.png",
    transform3: "https://i.postimg.cc/ZCLnK5Ds/apex-ratio.png"
  };

  // 1. ACCESS RESTRICTED SCREEN (The version you sent)
  if (showAccessRestricted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-slate-50 font-sans">
        <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg border border-slate-100">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-orange-100">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Access Restricted</h1>
            <p className="text-slate-600 mb-4">You are not registered to use this application.</p>
            <button onClick={() => setShowAccessRestricted(false)} className="text-xs text-slate-400 underline">Preview Mode</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="font-black text-2xl uppercase tracking-tighter">Coach Rich</div>
        <div className="space-x-6 text-xs font-bold uppercase tracking-widest">
          <a href="#bio" className="hover:text-orange-600 transition">Bio</a>
          <a href="#transformation" className="hover:text-orange-600 transition">Apex Ratio</a>
          <a href="#contact" className="hover:text-orange-600 transition">Contact</a>
        </div>
      </nav>

      <main>
        {/* HERO - Main Picture */}
        <section className="max-w-7xl mx-auto px-6 py-12 md:flex items-center gap-12">
          <div className="flex-1 mb-10 md:mb-0">
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">THE APEX <br/><span className="text-orange-600">STANDARD.</span></h1>
            <p className="text-lg text-slate-600 mb-8 max-w-md">No excuses. Just high-level coaching for those ready to lead.</p>
            <a href="#contact" className="bg-black text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-orange-600 transition shadow-xl">Inquire Now</a>
          </div>
          <div className="flex-1 shadow-2xl rounded-3xl overflow-hidden border-4 border-white">
            <img src={images.mainHero} alt="Main" className="w-full object-cover" />
          </div>
        </section>

        {/* BIO SECTION - Large Bio Picture */}
        <section id="bio" className="bg-slate-50 py-24 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-black mb-12 uppercase tracking-tighter">The Vision</h2>
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl mb-12">
              <img src={images.largeBio} alt="Bio" className="w-full object-cover" />
            </div>
          </div>
        </section>

        {/* TRANSFORMATION - The 3 in a row */}
        <section id="transformation" className="py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-16">THE APEX RATIO TRANSFORMATION</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-lg"><img src={images.transform1} alt="1" className="w-full h-[500px] object-cover" /></div>
            <div className="rounded-2xl overflow-hidden shadow-lg"><img src={images.transform2} alt="2" className="w-full h-[500px] object-cover" /></div>
            <div className="rounded-2xl overflow-hidden shadow-lg"><img src={images.transform3} alt="Apex" className="w-full h-[500px] object-cover" /></div>
          </div>
        </section>

        {/* FORMSPREE CONTACT */}
        <section id="contact" className="py-24 px-6 bg-slate-900 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-black mb-8 uppercase">Direct Message</h2>
            <form action={`https://formspree.io/f/${formspreeId}`} method="POST" className="grid gap-4">
              <input type="email" name="email" placeholder="Your Email" className="p-4 rounded-xl bg-slate-800 border-none" required />
              <textarea name="message" placeholder="Message..." rows={4} className="p-4 rounded-xl bg-slate-800 border-none" required></textarea>
              <button type="submit" className="bg-orange-600 text-white py-4 rounded-xl font-black uppercase tracking-widest hover:bg-white hover:text-orange-600 transition">Send To Coach Rich</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="p-10 text-center text-slate-500 text-[10px] tracking-widest uppercase border-t">
        © 2026 Coach Rich | Apex Ratio Coaching
      </footer>
    </div>
  );
};

export default App;
