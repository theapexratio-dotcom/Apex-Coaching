import React, { useState } from 'react';
import { ArrowLeft, Award, Users, Target, TrendingUp, Quote } from 'lucide-react';

// --- 1. FULL BIO STORY VIEW ---
const FullBioPage = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-black relative selection:bg-[#a855f7] selection:text-white">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <div className="w-full h-full bg-center bg-cover opacity-20 bg-fixed"
             style={{ backgroundImage: "url('https://i.postimg.cc/LhLhwTkd/coach-rich-bio.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/95"></div>
      </div>
      
      <div className="relative z-10 px-6 pt-20 pb-32 max-w-5xl mx-auto">
        <button onClick={onBack} className="inline-flex items-center gap-3 text-white/70 hover:text-[#a855f7] mb-12 uppercase font-black text-xs tracking-widest">
          <ArrowLeft size={20} /> Back to About
        </button>
        
        <h1 className="text-6xl md:text-8xl italic uppercase text-white mb-8 leading-none">
          The <span className="text-[#a855f7] not-italic">Foundation</span>
        </h1>
        
        <div className="bg-black/40 backdrop-blur-md rounded-[3rem] p-12 border border-white/10 text-white space-y-8 shadow-2xl">
          <p className="text-xl font-light leading-relaxed">
            I specialize in working with <span className="text-[#a855f7] font-bold">high-earning executives</span> who demand excellence in their physical health.
          </p>
          <p className="text-zinc-400">
            After three years at Ultimate Performance, I've mastered the art of the world-class body transformation.
          </p>
          <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
            <div className="flex items-center gap-4">
              <Award className="text-[#a855f7]" />
              <p className="uppercase text-xs font-black tracking-widest">7 Years Coaching</p>
            </div>
            <div className="flex items-center gap-4">
              <Users className="text-[#a855f7]" />
              <p className="uppercase text-xs font-black tracking-widest">Executive Specialist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 2. ABOUT COACH VIEW (The Gallery Page) ---
const AboutCoachPage = ({ onBack, onSeeBio }) => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-20 pb-32 text-white">
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <button onClick={onBack} className="text-[#a855f7] uppercase font-black text-xs tracking-[0.3em] mb-12 hover:text-white transition">
          ← Back to Hub
        </button>
        <span className="text-[#a855f7] font-black text-[11px] uppercase tracking-[0.5em] block mb-4">Executive Architect</span>
        <h1 className="text-5xl md:text-7xl lg:text-9xl italic uppercase tracking-tighter leading-none">
          Get To Know <span className="text-[#a855f7] not-italic">Your Coach</span>
        </h1>
      </div>

      <section className="px-6 py-32 bg-[#0e0e
