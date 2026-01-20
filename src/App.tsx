import React, { useState } from 'react';
import { ArrowLeft, Award, Users, Target, TrendingUp, Quote, ShieldCheck } from 'lucide-react';

// --- 1. FULL BIO STORY COMPONENT (The deep dive) ---
const FullBioPage = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-black relative selection:bg-[#a855f7] selection:text-white">
      <div className="fixed inset-0 z-0">
        <div className="w-full h-full bg-center bg-cover opacity-20 bg-fixed"
             style={{ backgroundImage: "url('https://i.postimg.cc/LhLhwTkd/coach-rich-bio.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/95"></div>
      </div>
      <div className="relative z-10 px-6 pt-20 pb-32 max-w-5xl mx-auto">
        <button onClick={onBack} className="inline-flex items-center gap-3 text-white/70 hover:text-[#a855f7] mb-12 uppercase font-black text-xs tracking-widest">
          <ArrowLeft size={20} /> Back to About
        </button>
        <h1 className="text-6xl md:text-8xl italic uppercase text-white mb-8">The <span className="text-[#a855f7]">Foundation</span></h1>
        <div className="bg-black/40 backdrop-blur-md rounded-[3rem] p-12 border border-white/10 text-white space-y-8">
          <p className="text-xl font-light leading-relaxed">I specialize in working with high-earning executives who demand the same excellence in their physical health as they do in their careers.</p>
          <p className="text-zinc-400">After 3 years at Ultimate Performance, I've mastered the world-class body transformation.</p>
          <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
            <div className="flex gap-4"><Award className="text-[#a855f7]" /><p className="uppercase text-xs font-bold tracking-widest">7 Years Experience</p></div>
            <div className="flex gap-4"><Users className="text-[#a855f7]" /><p className="uppercase text-xs font-bold tracking-widest">Executive Specialist</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 2. ABOUT COACH COMPONENT (The gallery page you just sent) ---
const AboutCoachPage = ({ onBack, onSeeBio }) => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <button onClick={onBack} className="text-[#a855f7] uppercase font-black text-xs tracking-[0.3em] mb-12">← Back to Hub</button>
        <span className="text-[#a855f7] font-black text-[11px] uppercase tracking-[0.5em] block mb-4 text-center">Executive Architect</span>
        <h1 className="text-5xl md:text-7xl lg:text-9xl italic uppercase text-white text-center tracking-tighter leading-none">
          Get To Know <span className="text-[#a855f7]">Your Coach</span>
        </h1>
      </div>

      <section className="px-6 py-32 bg-[#0e0e0e] border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center relative z-10">
          <div onClick={onSeeBio} className="relative group cursor-pointer">
            <div className="absolute -inset-4 bg-[#a855f7] rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-30 transition duration-700" />
            <div className="relative overflow-hidden rounded-[3rem] border border-white/10 aspect-[4/5] bg-zinc-900 shadow-2xl">
              <img src="https://i.postimg.cc/N5xFfjPR/coach-rich-main.png" alt="Richard" className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition duration-700" />
            </div>
            <div className="absolute bottom-8 left-8 right-8 bg-black/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center opacity-0 group-hover:opacity-100 transition">
              <p className="text-[#a855f7] font-black uppercase text-[10px] tracking-widest">Click to Read Full Bio</p>
            </div>
          </div>

          <div className="space-y-8 text-white">
            <Quote className="text-[#a855f7] w-12 h-12" />
            <h2 className="text-4xl font-bold uppercase italic tracking-tighter leading-none">The <br/> Mission</h2>
            <p className="text-gray-400 text-lg leading-relaxed">My coaching is built for the executive schedule. No fluff. No wasted effort. Just precision-engineered results that mirror the success you have in the boardroom.</p>
          </div>
        </div>
      </section>

      <section className="px-6 pt-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <img src="https://i.postimg.cc/cv4HKGVF/transformation-1.png" className="rounded-2xl h-64 w-full object-cover border border-white/5" />
        <img src="https://i.postimg.cc/cv4HKGVD/transformation-2.png" className="rounded-2xl h-64 w-full object-cover border border-white/5" />
        <img src="https://i.postimg.cc/ZCLnK5Ds/apex-ratio.png" className="rounded-2xl h-64 w-full object-cover border border-white/5" />
      </section>
    </div>
  );
};

// --- 3. THE MAIN HUB (Your Homepage) ---
const App = () => {
  const [view, setView] = useState('hub'); // hub, about, bio
  const formspreeId = "mldevvwa"; 

  if (view === 'about') return <AboutCoachPage onBack={() => setView('hub')} onSeeBio={() => setView('bio')} />;
  if (view === 'bio') return <FullBioPage onBack={() => setView('about')} />;

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-black selection:text-white">
      <nav className="flex justify-between items-center p-8 max-w-7xl mx-auto">
        <div className="font-black text-2xl uppercase tracking-tighter">Apex Performance</div>
        <div className="space-x-8 text-[10px] font-black uppercase tracking-widest">
          <button onClick={() => setView('about')} className="hover:text-[#a855f7] transition">About Coach</button>
          <a href="#transformation" className="hover:text-[#a855f7] transition">Results</a>
          <a href="#contact" className="hover:text-[#a855f7] transition">Contact</a>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h1 className="text-7xl lg:text-9xl font-black italic uppercase tracking-tighter leading-[0.85]">The Apex <br/><span className="text-[#a855f7]">Standard.</span></h1>
          <p className="text-lg text-slate-500 font-bold uppercase tracking-tight">Executive Coaching for High-Performance Results.</p>
          <button onClick={() => setView('about')} className="bg-black text-white px-12 py-6 rounded-full font-black uppercase tracking-widest hover:bg-[#a855f7] transition-all shadow-2xl">Discover the Method</button>
        </div>
        <img src="https://i.postimg.cc/N5xFfjPR/coach-rich-main.png" className="rounded-[4rem] shadow-2xl border-8 border-slate-50" />
      </section>

      {/* Transformations & Contact form below... */}
      <section id="transformation" className="py-32 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-black uppercase italic mb-12">The Apex Ratio</h2>
        <div className="grid md:grid-cols-3 gap-6 h-[500px]">
          <img src="https://i.postimg.cc/cv4HKGVF/transformation-1.png" className="rounded-3xl object-cover h-full w-full" />
          <img src="https://i.postimg.cc/cv4HKGVD/transformation-2.png" className="rounded-3xl object-cover h-full w-full" />
          <img src="https://i.postimg.cc/ZCLnK5Ds/apex-ratio.png" className="rounded-3xl object-cover h-full w-full border-4 border-[#a855f7]" />
        </div>
      </section>

      <section id="contact" className="py-32 bg-black text-white px-6 rounded-t-[5rem]">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-5xl font-black italic uppercase mb-8">Start Your Build</h2>
          <form action={`https://formspree.io/f/${formspreeId}`} method="POST" className="space-y-4">
            <input type="email" name="email" placeholder="Work Email" className="w-full p-6 rounded-3xl bg-zinc-900 border border-white/10" required />
            <textarea name="message" placeholder="Define your targets..." rows={4} className="w-full p-6 rounded-3xl bg-zinc-900 border border-white/10" required></textarea>
            <button type="submit" className="w-full bg-[#a855f7] py-6 rounded-3xl font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">Submit Application</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default App;
