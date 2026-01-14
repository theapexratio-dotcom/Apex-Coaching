import React, { useState } from 'react';

const App = () => {
  // SETTINGS
  // Set showAccessRestricted to 'false' to see the actual website
  const [showAccessRestricted, setShowAccessRestricted] = useState(false);
  const formspreeId = "mldevvwa"; // Your Formspree ID

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

  // 2. THE MAIN WEBSITE
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 border-b border-slate-100">
        <div className="font-black text-2xl tracking-tighter uppercase">Coach Rich</div>
        <div className="hidden md:flex space-x-8 font-medium text-sm">
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#services" className="hover:text-blue-600 transition">Services</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Level Up Your <span className="text-blue-600">Performance.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Tailored coaching strategies designed for professionals who want to dominate their field. 
            </p>
            <a href="#contact" className="inline-block bg-slate-900 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-600 transition-all shadow-xl">
              Get Started Now
            </a>
          </div>
          
          <div className="relative">
            {/* IMAGE 1: Path adjusted for public/images/ */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100">
              <img 
                src="/images/coach-rich.png" 
                alt="Coach Rich" 
                className="w-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x700?text=Check+Image+Folder+Name'; }}
              />
            </div>
          </div>
        </section>

        {/* SERVICES / GALLERY SECTION */}
        <section id="services" className="bg-slate-50 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold mb-12">Expertise</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {/* IMAGE 2: coach-rich0.png */}
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <img src="/images/coach-rich0.png" alt="Service 1" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="font-bold text-xl mb-2">Strategy</h4>
                  <p className="text-slate-600 text-sm">Precision planning for your business and personal growth.</p>
                </div>
              </div>

              {/* IMAGE 3: coach-rich1.png (Assuming sequential names) */}
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <img src="/images/coach-rich1.png" alt="Service 2" className="w-full h-48 object-cover" 
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                <div className="p-6">
                  <h4 className="font-bold text-xl mb-2">Mentorship</h4>
                  <p className="text-slate-600 text-sm">One-on-one sessions to break through your mental plateaus.</p>
                </div>
              </div>

              {/* IMAGE 4: coach-rich2.png */}
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <img src="/images/coach-rich2.png" alt="Service 3" className="w-full h-48 object-cover" 
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                <div className="p-6">
                  <h4 className="font-bold text-xl mb-2">Results</h4>
                  <p className="text-slate-600 text-sm">Data-driven approaches to ensure you hit your KPIs.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FORMSPREE CONTACT SECTION */}
        <section id="contact" className="py-24 px-6">
          <div className="max-w-3xl mx-auto bg-slate-900 rounded-[3rem] p-10 text-white text-center">
            <h2 className="text-4xl font-bold mb-4">Direct Inquiry</h2>
            <p className="text-slate-400 mb-10">Ready to begin? Send me a message below.</p>
            
            <form action={`https://formspree.io/f/${formspreeId}`} method="POST" className="grid gap-4">
              <input 
                type="email" 
                name="email" 
                placeholder="Email Address" 
                className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white" 
                required 
              />
              <textarea 
                name="message" 
                placeholder="How can I help?" 
                rows={4} 
                className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white" 
                required
              ></textarea>
              <button type="submit" className="bg-blue-600 hover:bg-white hover:text-blue-600 text-white font-bold py-4 rounded-xl transition-all">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="p-10 text-center text-slate-400 text-xs tracking-widest uppercase border-t border-slate-100">
        © 2026 COACH RICH | BUILT ON GITHUB
      </footer>
    </div>
  );
};

export default App;
