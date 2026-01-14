import React, { useState } from 'react';

const App = () => {
  // SETTINGS & LINKS
  const formspreeId = "mldevvwa"; 
  const [showAccessRestricted, setShowAccessRestricted] = useState(false);

  const images = {
    mainHero: "https://i.postimg.cc/N5xFfjPR/main.png",
    largeBio: "https://i.postimg.cc/LhLhwTkd/bio.png",
    transform1: "https://i.postimg.cc/cv4HKGVF/step1.png",
    transform2: "https://i.postimg.cc/cv4HKGVD/step2.png",
    transform3: "https://i.postimg.cc/ZCLnK5Ds/apex.png"
  };

  // 1. YOUR ACCESS RESTRICTED SCREEN
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
            <p className="text-slate-600">You are not registered. Please contact the administrator.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-100">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="font-black text-2xl tracking-tighter uppercase">Coach Rich</div>
        <div className="space-x-8 text-sm font-bold uppercase tracking-widest">
          <a href="#bio" className="hover:text-orange-600 transition">Bio</a>
          <a href="#transformation" className="hover:text-orange-600 transition">Transformation</a>
          <a href="#contact" className="hover:text-orange-600 transition">Contact</a>
        </div>
      </nav>

      <main>
        {/* HERO SECTION - Main Picture */}
        <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl md:text-8xl font-black leading-none mb-6">REWRITE YOUR <span className="text-orange-600">LIMITS.</span></h1>
            <p className="text-xl text-slate-600 mb-8">Premium coaching for those who demand elite results.</p>
            <a href="#contact" className="inline-block bg-black text-white px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl">Start Training</a>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500">
            <img src={images.mainHero} alt="Coach Rich Main" className="w-full object-cover" />
          </div>
        </section>

        {/* BIO SECTION - Large Bio Picture */}
        <section id="bio" className="bg-slate-50 py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black uppercase mb-4">The Methodology</h2>
              <div className="h-2 w-24 bg-orange-600 mx-auto"></div>
            </div>
            <div className="rounded-[3rem] overflow-hidden shadow-2xl mb-12">
              <img src={images.largeBio} alt="Bio Page Large" className="w-full object-cover" />
            </div>
            <p className="text-2xl text-center leading-relaxed font-light text-slate-700 max-w-3xl mx-auto">
              "It isn't just about the physical. It's about the psychological shift required to maintain elite performance long-term."
            </p>
          </div>
        </section>

        {/* TRANSFORMATION SECTION - 3 in a row */}
        <section id="transformation" className="py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-16 uppercase">Transformation: The Apex Ratio</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group overflow-hidden rounded-2xl shadow-lg border-b-4 border-slate-200">
              <img src={images.transform1} alt="Transformation Stage 1" className="w-full h-[500px] object-cover group-hover:scale-110 transition duration-700" />
              <p className="p-4 text-center font-bold uppercase bg-white text-slate-400">Phase I</p>
            </div>
            <div className="group overflow-hidden rounded-2xl shadow-lg border-b-4 border-orange-600">
              <img src={images.transform2} alt="Transformation Stage 2" className="w-full h-[500px] object-cover group-hover:scale-110 transition duration-700" />
              <p className="p-4 text-center font-bold uppercase bg-white text-orange-600">Phase II</p>
            </div>
            <div className="group overflow-hidden rounded-2xl shadow-lg border-b-4 border-black">
              <img src={images.transform3} alt="The Apex Ratio" className="w-full h-[500px] object-cover group-hover:scale-110 transition duration-700" />
              <p className="p-4 text-center font-bold uppercase bg-white text-black underline">The Apex Ratio</p>
            </div>
          </div>
        </section>

        {/* FORMSPREE CONTACT SECTION */}
        <section id="contact" className="py-24 px-6 bg-slate-900">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-5xl font-black mb-6 uppercase">Apply Now</h2>
            <p className="text-slate-400 mb-12 text-lg">Limited client slots available for 2026. Submit your details below.</p>
            
            <form action={`https://formspree.io/f/${formspreeId}`} method="POST" className="grid gap-6 text-left">
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" name="name" placeholder="Full Name" className="p-5 rounded-2xl bg-slate-800 border-none text-white focus:ring-2 focus:ring-orange-600 outline-none" required />
                <input type="email" name="email" placeholder="Email Address" className="p-5 rounded-2xl bg-slate-800 border-none text-white focus:ring-2 focus:ring-orange-600 outline-none" required />
              </div>
              <textarea name="message" placeholder="What are your goals?" rows={5} className="p-5 rounded-2xl bg-slate-800 border-none text-white focus:ring-2 focus:ring-orange-600 outline-none" required></textarea>
              <button type="submit" className="bg-orange-600 hover:bg-white hover:text-orange-600 text-white font-black py-5 rounded-2xl transition-all text-xl uppercase tracking-widest">
                Submit Inquiry
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="p-12 text-center text-slate-400 text-xs tracking-[0.3em] uppercase border-t border-slate-100">
        Coach Rich © 2026 | All Rights Reserved
      </footer>
    </div>
  );
};

export default App;
