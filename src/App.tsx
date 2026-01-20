import React, { useState } from 'react';
import { ArrowLeft, Award, Users, Target, TrendingUp, Quote } from 'lucide-react';

// --- BIOPAGE VIEW ---
const BioView = ({ onBack }) => (
  <div className="min-h-screen bg-black text-white p-10">
    <button onClick={onBack} className="text-[#a855f7] uppercase font-black mb-10">← Back</button>
    <h1 className="text-6xl font-black italic uppercase italic mb-8">
      Richard <span className="text-[#a855f7]">Al-Ameen</span>
    </h1>
    <div className="bg-zinc-900/50 p-10 rounded-[3rem] border border-white/10">
      <p className="text-xl leading-relaxed mb-6">I specialize in high-earning executive transformations.</p>
      <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
        <div><Award className="text-[#a855f7] mb-2" /><p className="text-xs uppercase font-bold">7 Years Exp</p></div>
        <div><Users className="text-[#a855f7] mb-2" /><p className="text-xs uppercase font-bold">Executive Specialist</p></div>
      </div>
    </div>
  </div>
);

// --- ABOUT COACH VIEW ---
const AboutView = ({ onBack, onSeeBio }) => (
  <div className="min-h-screen bg-[#0a0a0a] text-white p-10 text-center">
    <button onClick={onBack} className="text-[#a855f7] uppercase font-black mb-10">← Back to Hub</button>
    <h1 className="text-6xl italic uppercase mb-20">Get To Know <span className="text-[#a855f7]">Your Coach</span></h1>
    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div onClick={onSeeBio} className="cursor-pointer group">
        <div className="rounded-[3rem] overflow-hidden border border-white/10 aspect-[4/5] bg-zinc-800">
           <img src="https://i.postimg.cc/N5xFfjPR/coach-rich-main.png" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition" alt="Coach" />
        </div>
        <p className="mt-4 text-[#a855f7] uppercase text-xs font-black">Click for Full Bio</p>
      </div>
      <div className="text-left space-y-6">
        <Quote className="text-[#a855f7] w-12 h-12" />
        <h2 className="text-3xl font-bold uppercase">The Mission</h2>
        <p className="text-zinc-400">Precision results for the executive schedule.</p>
      </div>
    </div>
  </div>
);

// --- MAIN HUB ---
export default function App() {
  const [view, setView] = useState('hub');

  if (view === 'about') return <AboutView onBack={() => setView('hub')} onSeeBio={() => setView('bio')} />;
  if (view === 'bio') return <BioView onBack={() => setView('about')} />;

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <nav className="flex justify-between p-8 max-w-7xl mx-auto">
        <div className="font-black text-2xl">COACH RICH</div>
        <div className="space-x-6 text-[10px] font-black uppercase tracking-widest">
          <button onClick={() => setView('about')}>About Coach</button>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-8xl font-black italic uppercase leading-none mb-10">The Apex <br/><span className="text-[#a855f7]">Standard.</span></h1>
        <button onClick={() => setView('about')} className="bg-black text-white px-12 py-5 rounded-full font-black uppercase">Enter Command Hub</button>
      </main>
      <section id="contact" className="bg-black text-white py-20 px-6 rounded-t-[4rem]">
        <div className="max-w-md mx-auto">
           <h2 className="text-4xl font-black italic uppercase mb-8 text-center">Apply Now</h2>
           <form action="https://formspree.io/f/mldevvwa" method="POST" className="space-y-4">
             <input name="email" type="email" placeholder="Work Email" className="w-full p-4 rounded-2xl bg-zinc-900 border border-white/10" required />
             <button type="submit" className="w-full bg-[#a855f7] py-4 rounded-2xl font-black uppercase hover:bg-white hover:text-black transition">Submit</button>
           </form>
        </div>
      </section>
    </div>
  );
}
