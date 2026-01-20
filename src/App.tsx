import React, { useState } from 'react';

// --- 1. FULL BIO STORY VIEW ---
const FullBioPage = ({ onBack }) => (
  <div className="min-h-screen bg-black text-white p-10 font-sans">
    <button onClick={onBack} className="text-[#a855f7] uppercase font-bold mb-10 tracking-widest text-xs">← Back to About</button>
    <h1 className="text-6xl md:text-8xl italic uppercase mb-8 leading-none font-black">
      The <span className="text-[#a855f7]">Foundation</span>
    </h1>
    <div className="bg-zinc-900 p-8 md:p-12 rounded-[2rem] border border-white/10 max-w-4xl">
      <p className="text-xl mb-6">I specialize in high-performance results for executives.</p>
      <p className="text-zinc-400 leading-loose">Built on 7 years of experience and 3 years at Ultimate Performance.</p>
    </div>
  </div>
);

// --- 2. ABOUT COACH VIEW ---
const AboutCoachPage = ({ onBack, onSeeBio }) => (
  <div className="min-h-screen bg-[#0a0a0a] text-white p-10 font-sans text-center">
    <button onClick={onBack} className="text-[#a855f7] uppercase font-bold mb-12 tracking-widest text-xs">← Back to Hub</button>
    <h1 className="text-5xl md:text-7xl italic uppercase mb-20 font-black">Your <span className="text-[#a855f7]">Coach</span></h1>
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center text-left">
      <div onClick={onSeeBio} className="cursor-pointer group relative">
        <div className="rounded-[2rem] overflow-hidden border border-white/10 aspect-[4/5] bg-zinc-800 shadow-2xl">
          <img src="https://i.postimg.cc/N5xFfjPR/coach-rich-main.png" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500" alt="Coach" />
        </div>
        <p className="mt-4 text-[#a855f7] text-center uppercase font-black text-[10px] tracking-widest">Click to Read Full Story</p>
      </div>
      <div className="space-y-6">
        <h2 className="text-4xl font-black uppercase italic tracking-tighter">The Mission</h2>
        <p className="text-zinc-400 text-lg leading-relaxed">Precision-engineered results for the executive schedule. No fluff. Just the foundation.</p>
      </div>
    </div>
  </div>
);

// --- 3. THE MAIN HUB ---
export default function App() {
  const [view, setView] = useState('hub');

  if (view === 'about') return <AboutCoachPage onBack={() => setView('hub')} onSeeBio={() => setView('bio')} />;
  if (view === 'bio') return <FullBioPage onBack={() => setView('about')} />;

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <nav className="flex justify-between p-8 max-w-7xl mx-auto border-b border-slate-100">
        <div className="font-black text-2xl tracking-tighter uppercase">Coach Rich</div>
        <div className="space-x-8 text-[10px] font-black uppercase tracking-widest pt-2">
          <button onClick={() => setView('about')} className="hover:text-[#a855f7]">About Coach</button>
          <a href="#contact" className="hover:text-[#a855f7]">Contact</a>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-7xl md:text-9xl font-black italic uppercase leading-[0.85] mb-12 tracking-tighter">
          The Apex <br/><span className="text-[#a855f7]">Standard.</span>
        </h1>
        <button onClick={() => setView('about')} className="bg-black text-white px-12 py-6 rounded-full font-black uppercase tracking-widest hover:bg-[#a855f7] transition-all shadow-xl">
          Enter Hub
        </button>
      </main>

      <section id="contact" className="bg-black text-white py-24 px-6 rounded-t-[4rem]">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-4xl font-black italic uppercase mb-10 tracking-tight">Apply Now</h2>
          <form action="https://formspree.io/f/mldevvwa" method="POST" className="space-y-4">
            <input name="email" type="email" placeholder="Work Email" className="w-full p-5 rounded-2xl bg-zinc-900 border border-white/10 text-white outline-none focus:border-[#a855f7]" required />
            <button type="submit" className="w-full bg-[#a855f7] py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">Submit Application</button>
          </form>
        </div>
      </section>
    </div>
  );
}
