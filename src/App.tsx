import React, { useState } from 'react';

// --- BIOPAGE COMPONENT (This is where your v0 content lives) ---
const FullBioPage = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#050505] text-white p-8 animate-in fade-in duration-500">
      <button 
        onClick={onBack}
        className="mb-10 text-[#a855f7] font-black uppercase tracking-widest flex items-center gap-2"
      >
        ← Return to Hub
      </button>

      {/* PASTE YOUR v0.APP CODE CONTENT BELOW THIS LINE 
         Everything inside the 'return' of your v0 code goes here
      */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-black italic uppercase italic-fix mb-4">
          Richard <span className="text-[#a855f7]">Al-Ameen</span>
        </h1>
        <p className="text-zinc-400 text-lg leading-loose">
          [Your v0 content will fill this space...]
        </p>
      </div>
      {/* PASTE ENDS HERE */}

    </div>
  );
};

const App = () => {
  const formspreeId = "mldevvwa"; 
  const [showAccessRestricted, setShowAccessRestricted] = useState(false);
  const [showBio, setShowBio] = useState(false); // New switch

  const images = {
    mainHero: "https://i.postimg.cc/N5xFfjPR/coach-rich-main.png",
    largeBio: "https://i.postimg.cc/LhLhwTkd/coach-rich-bio.png",
    transform1: "https://i.postimg.cc/cv4HKGVF/transformation-1.png",
    transform2: "https://i.postimg.cc/cv4HKGVD/transformation-2.png",
    transform3: "https://i.postimg.cc/ZCLnK5Ds/apex-ratio.png"
  };

  // Switch to Bio Page
  if (showBio) {
    return <FullBioPage onBack={() => setShowBio(false)} />;
  }

  if (showAccessRestricted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 font-sans">
        <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-xl border border-slate-100 text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Access Restricted</h1>
          <button onClick={() => setShowAccessRestricted(false)} className="text-xs text-blue-500 underline">Enter Site Preview</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="font-black text-2xl uppercase tracking-tighter">COACH RICH (V2)</div>
        <div className="space-x-6 text-xs font-bold uppercase tracking-widest">
          {/* We changed the link to an onClick button */}
          <button onClick={() => setShowBio(true)} className="hover:text-purple-600 transition">About Coach</button>
          <a href="#transformation">Transformation</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-6xl font-black mb-6">THE APEX STANDARD.</h1>
          <p className="text-lg text-slate-600 mb-8">High-performance coaching for elite results.</p>
          <button onClick={() => setShowBio(true)} className="bg-black text-white px-10 py-4 rounded-full font-bold">
            Read My Story
          </button>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img src={images.mainHero} alt="Coach Rich" className="w-full" />
        </div>
      </section>

      {/* Rest of your existing site... */}
      <section id="transformation" className="py-20 px-6 max-w-7xl mx-auto text-center">
         <h2 className="text-4xl font-black mb-16 uppercase italic">The Apex Ratio</h2>
         <div className="grid md:grid-cols-3 gap-6">
           <img src={images.transform1} alt="Stage 1" className="rounded-xl h-96 w-full object-cover" />
           <img src={images.transform2} alt="Stage 2" className="rounded-xl h-96 w-full object-cover" />
           <img src={images.transform3} alt="Apex" className="rounded-xl h-96 w-full object-cover border-4 border-purple-500" />
         </div>
      </section>

      <section id="contact" className="py-20 bg-slate-900 text-white px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Coach Rich</h2>
          <form action={`https://formspree.io/f/${formspreeId}`} method="POST" className="space-y-4">
            <input type="email" name="email" placeholder="Email Address" className="w-full p-4 rounded-xl bg-slate-800 border-none" required />
            <textarea name="message" placeholder="Your Goals" rows={4} className="w-full p-4 rounded-xl bg-slate-800 border-none" required></textarea>
            <button type="submit" className="w-full bg-purple-600 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-purple-500 transition">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default App;
