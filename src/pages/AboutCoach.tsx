import React from 'react';
import { Link } from 'react-router-dom';
import { Quote, Target, Shield } from 'lucide-react';

export default function AboutCoach() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-40 pb-32">
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[#a855f7] font-black text-[11px] uppercase tracking-[0.5em] block mb-8">Executive Architect</span>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl italic uppercase tracking-tighter text-white">
            Get To Know <span className="text-[#a855f7]">Your Coach</span>
          </h1>
        </div>
      </section>

      <section className="px-6 py-32 bg-[#0e0e0e] border-y border-white/5 relative overflow-hidden">
        {/* FIXED: Now uses coach-rich.png for the background */}
        <div 
          className="absolute inset-0 opacity-20 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/images/coach-rich.png')" }}
        />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#a855f7] rounded-[3rem] blur-2xl opacity-10" />
            <div className="relative overflow-hidden rounded-[3rem] border border-white/10 aspect-[4/5] bg-zinc-900 shadow-2xl">
              {/* FIXED: Uses coach-rich0.png */}
              <img 
                src="/images/coach-rich0.png" 
                alt="Coach Richard" 
                className="w-full h-full object-cover grayscale brightness-50"
              />
            </div>
          </div>

          <div className="space-y-8 text-white">
            <Quote className="text-[#a855f7] w-12 h-12" />
            <h2 className="text-4xl font-bold uppercase tracking-tight">The Mission</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Your mission and story go here. We are now using your .png files correctly.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pt-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
            <img src="/images/coach-rich1.png" alt="Coach Rich 1" className="w-full h-64 object-cover" />
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
            <img src="/images/coach-rich2.png" alt="Coach Rich 2" className="w-full h-64 object-cover" />
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
            <img src="/images/coach-rich3.png" alt="Coach Rich 3" className="w-full h-64 object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}
