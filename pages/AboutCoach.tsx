import React from 'react';
import Link from 'next/link'; // Fixed: Using Next.js linking
import { Quote, ChevronRight, Target, Shield, Zap } from 'lucide-react';

export default function AboutCoach() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-40 pb-32">
      {/* Hero Section */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[#a855f7] font-black text-[11px] uppercase tracking-[0.5em] block mb-8">Executive Architect</span>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl italic uppercase tracking-tighter text-white">
            Get To Know <span className="text-[#a855f7]">Your Coach</span>
          </h1>
        </div>
      </section>

      {/* The Story Section */}
      <section className="px-6 py-32 bg-[#0e0e0e] border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          
          {/* LINKED IMAGE: Clicking this goes to the Bio Page */}
          <Link href="/biopage" className="relative group cursor-pointer">
            <div className="absolute -inset-4 bg-[#a855f7] rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-30 transition duration-700"></div>
            <div className="relative overflow-hidden rounded-[3rem] border border-white/10 aspect-[4/5] bg-zinc-900 shadow-2xl">
              <img 
                src="/images/coach rich.JPG" 
                alt="Coach Richard Al-ameen" 
                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                 <span className="bg-black/60 text-white px-6 py-3 rounded-full border border-white/20 font-bold uppercase tracking-widest text-xs">View Full Bio</span>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 bg-black border border-white/10 p-8 rounded-[2rem] shadow-2xl">
              <p className="font-display text-4xl text-[#a855f7] italic">EST. 2018</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mt-1">Team Al-ameen Origin</p>
            </div>
          </Link>

          {/* Bio Content */}
          <div className="space-y-16">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Target className="w-6 h-6 text-[#a855f7]" />
                <h2 className="font-display text-4xl uppercase italic text-white">My Mission</h2>
              </div>
              <p className="text-zinc-400 font-light leading-loose tracking-wide">
                To bridge the gap between aesthetic physique and actual physiological health. We build systems that thrive under pressure.
              </p>
            </div>
            
            {/* View Bio Button */}
            <Link href="/biopage" className="inline-flex items-center gap-2 text-[#a855f7] font-black uppercase tracking-widest text-xs hover:text-white transition-colors group">
              Full Background & Story <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Transformation Journey */}
      <section className="px-6 py-40 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group">
              <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden border border-white/5 mb-8">
                <img src="/images/coach-rich1" alt="Before" className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition duration-700" />
              </div>
              <h4 className="font-display text-2xl text-white uppercase italic">The Baseline</h4>
            </div>
            <div className="group">
              <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden border border-white/5 mb-8">
                <img src="/images/coach-rich2" alt="During" className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition duration-700" />
              </div>
              <h4 className="font-display text-2xl text-white uppercase italic">The Shift</h4>
            </div>
            <div className="group">
              <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden border border-white/5 mb-8">
                <img src="/images/coach-rich3" alt="After" className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition duration-700" />
              </div>
              <h4 className="font-display text-2xl text-white uppercase italic">The Apex Protocol</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
 
