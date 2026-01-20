import React, { useState } from 'react';
import { ArrowLeft, Award, Users, Target, TrendingUp, Quote } from 'lucide-react';

// --- 1. FULL BIO STORY COMPONENT ---
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
        <div className="bg-black/40 backdrop-blur-md rounded-[3rem] p-12 border border-white/10 text-white space-y-8 shadow-2xl">
          <p className="text-xl font-light leading-relaxed">
            I specialize in working with <span className="text-[#a855f7] font-bold">high-earning executives</span> who demand the same excellence in their physical health as they do in their careers.
          </p>
          <p className="text-zinc-400">
            After spending three years at Ultimate Performance, I've mastered the art of the world-class body transformation.
          </p>
          <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
            <div className="flex items-center gap-4">
              <Award className="text-[#a855f7]" />
              <p className="uppercase text-xs font-black tracking-widest">7 Years Coaching</p>
            </div>
            <div className="flex items-center gap-4">
              <Users className="text-[#a855f7]" />
              <p className="uppercase text-xs font-black tracking-widest">Executive Transformation Specialist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 2. ABOUT COACH COMPONENT (The gallery page) ---
const AboutCoachPage = ({ onBack, onSeeBio }) => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <button onClick={onBack} className="text-[#a855f7] uppercase font-black text-xs tracking-[0.3em] mb-12 hover:text-white transition">← Back to Hub</button>
        <span className="text-[#a855f7] font-black text-[11px] uppercase tracking-[0.5em] block mb-4">Executive Architect</span>
        <h1 className="text-5xl md:text-7xl lg:text-9xl italic uppercase text-white tracking-tighter leading-none">
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
              <p className="text-[#a855f7] font-black uppercase text-[10px] tracking-widest">Click to Read Full Story</p>
            </div>
          </div>

          <div className="space-y-8 text-white">
            <Quote className="text-[#a855f7] w-12 h-12" />
            <h2 className="text-4xl font-bold uppercase italic tracking-tighter leading-none">The <br/> Mission</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Precision-engineered results that mirror the success you have in the boardroom. I bypass the BS to get you to your goal without wasting a second of your time.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pt-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <img src="https://i.postimg.cc/cv4HKGVF/transformation-1.png" className="rounded-2xl h-64 w-full object-cover border border-white/5 shadow-lg" alt="1" />
        <img src="https://i.postimg.cc/cv4HKGVD/transformation-2.png" className="rounded-2xl h-64 w-full object-cover border border-white/5 shadow-lg" alt="2" />
        <img src="https://i.postimg.cc/ZCLnK5Ds/apex-ratio.png" className="rounded-2xl h-64 w-full object-cover border border-white/5 shadow-lg" alt="3" />
      </section>
    </div>
  );
};

// --- 3. THE MAIN HUB (Homepage) ---
const App = () => {
  const [view, setView] = useState('hub'); 
  const formspreeId = "mldevvwa"; 

  // View Switcher logic
  if (view === 'about') return <AboutCoachPage onBack={() => setView('hub')} onSeeBio={() => setView('bio')} />;
  if (view === 'bio') return <FullBioPage onBack={() => setView('about')} />;

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-black selection:text-white">
      <nav className="flex justify-between items-center p-8 max-w-7xl mx-auto">
        <div className="
