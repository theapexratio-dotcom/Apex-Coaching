import React from 'react';
import Link from "next/link";
import { ArrowLeft } from 'lucide-react';

export default function biopage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background - using your coach-rich0.png */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/images/coach-rich0.png" 
          className="w-full h-full object-cover opacity-30"
          alt="Background"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto pt-20 px-6 pb-20">
        <Link href="/" className="text-[#E2FF00] flex items-center mb-8 font-bold">
          <ArrowLeft className="mr-2" /> BACK TO HOME
        </Link>

        <h1 className="text-7xl font-black mb-12 tracking-tighter">COACH RICH</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <img 
              src="/images/coach-rich1.png" 
              className="rounded-2xl border-2 border-white/10 w-full"
              alt="Coach Rich Main"
            />
            <p className="text-xl text-gray-300 leading-relaxed font-semibold">
              High-performance coaching designed for those who demand elite results.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <img 
              src="/images/coach-rich2.png" 
              className="rounded-2xl border border-white/10 w-full"
              alt="Transformation 1"
            />
            <img 
              src="/images/coach-rich3.png" 
              className="rounded-2xl border border-white/10 w-full"
              alt="Transformation 2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
