import React, { useState } from 'react';

const App = () => {
  // SETTINGS
  // Set this to 'false' to show your actual website and images
  const [showAccessRestricted, setShowAccessRestricted] = useState(false);
  const formspreeLink = "https://formspree.io/f/YOUR_ID_HERE";

  // 1. YOUR ACCESS RESTRICTED SCREEN
  if (showAccessRestricted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg border border-slate-100">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-orange-100">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Access Restricted</h1>
            <p className="text-slate-600 mb-8">
              You are not registered to use this application. Please contact the app administrator to request access.
            </p>
            <div className="p-4 bg-slate-50 rounded-md text-sm text-slate-600">
              <p>If you believe this is an error, you can:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Verify you are logged in with the correct account</li>
                <li>Contact the app administrator for access</li>
                <li>Try logging out and back in again</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. THE MAIN WEBSITE WITH YOUR COACH-RICH IMAGES
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 border-b border-slate-100">
        <div className="font-black text-2xl tracking-tighter">COACH RICH</div>
        <div className="hidden md:flex space-x-8 font-medium text-sm">
          <a href="#about" className="hover:text-orange-600 transition">About</a>
          <a href="#services" className="hover:text-orange-600 transition">Services</a>
          <a href="#contact" className="hover:text-orange-600 transition">Contact</a>
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Empowering Your <span className="text-orange-600">Growth.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Professional coaching and strategic business solutions tailored to your unique goals. Let's build something great together.
            </p>
            <a href="#contact" className="inline-block bg-slate-900 text-white px-10 py-4 rounded-full font-bold hover:bg-orange-600 transition-colors shadow-xl">
              Start Your Journey
            </a>
          </div>
          
          <div className="relative">
            {/* IMAGE 1: coach-rich.png */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="./coach-rich.png" 
                alt="Coach Rich Profile" 
                className="w-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x700?text=Check+Filename+Case+Sensitivity'; }}
              />
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="bg-slate-50 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold mb-12 text-center">Core Services</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {/* SERVICE 1 */}
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                <img 
                  src="./coach-rich0.png" 
                  alt="Coaching Session" 
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <h4 className="text-xl font-bold mb-2 px-4">Executive Coaching</h4>
                <p className="text-slate-600 px-4 pb-4">High-level strategy for leaders looking to scale their impact and efficiency.</p>
              </div>
              
              {/* SERVICE 2 - You can add more coach-rich1.png etc here */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-center">
                <h4 className="text-2xl font-bold mb-4 italic">"Success is not final, failure is not fatal: it is the courage to continue that counts."</h4>
                <p className="text-slate-500">— Results Driven Approach</p>
              </div>
            </div>
          </div>
        </section>

        {/* FORMSPREE CONTACT SECTION */}
        <section id="contact" className="py-24 px-6">
          <div className="max-w-3xl mx-auto bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white text-center shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
            <p className="text-slate-400 mb-10">Send a message directly to my inbox via Formspree.</p>
            
            <form action={formspreeLink} method="POST" className="grid gap-4">
              <input 
                type="email" 
                name="email" 
                placeholder="Email Address" 
                className="w-full p-4 rounded-2xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:ring-2 focus:ring-orange-600 outline-none transition" 
                required 
              />
              <textarea 
                name="message" 
                placeholder="How can I assist you today?" 
                rows={4} 
                className="w-full p-4 rounded-2xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:ring-2 focus:ring-orange-600 outline-none transition" 
                required
              ></textarea>
              <button type="submit" className="bg-orange-600 hover:bg-white hover:text-orange-600 text-white font-black py-4 rounded-2xl transition-all duration-300 transform hover:scale-105">
                SEND MESSAGE NOW
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="p-10 text-center text-slate-400 text-xs tracking-widest uppercase">
        © 2026 COACH RICH | ALL RIGHTS RESERVED
      </footer>
    </div>
  );
};

export default App;
