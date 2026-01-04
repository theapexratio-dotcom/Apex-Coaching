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

      {/* The Story Section with Parallax Background */}
      <section className="px-6 py-32 bg-[#0e0e0e] border-y border-white/5 relative overflow-hidden">
        {/* Parallax Background Layer */}
        <div 
          className="absolute inset-0 opacity-20 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/images/coach-rich-bg.jpg')" }}
        />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          
          {/* LINKED IMAGE: Clicking this goes to the Bio Page */}
          <Link href="/biopage" className="relative group cursor-pointer">
            <div className="absolute -inset-4 bg-[#a855f7] rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-30 transition duration-700" />
            <div className="relative overflow-hidden rounded-[3rem] border border-white/10 aspect-[4/5] bg-zinc-900 shadow-2xl">
              <img 
                src="/images/coach-rich0.png" 
                alt="Coach Richard Al-ameen" 
                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition duration-700"
              />
            </div>
          </Link>

          {/* Story Content */}
          <div className="space-y-8">
            <Quote className="text-[#a855f7] w-12 h-12" />
            <h2 className="text-4xl font-bold text-white uppercase tracking-tight">The Mission</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Insert your story here. Use the icons like <Target className="inline w-5 h-5 text-[#a855f7]" /> to highlight your pillars.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
