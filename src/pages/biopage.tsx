import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

export default function BioPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 z-0">
        <img 
          src="/images/coach-rich0.png" 
          className="w-full h-full object-cover opacity-30"
          alt="Background"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto pt-20 px-6 pb-20">
        <div className="flex items-center justify-between mb-8">
          <Link to="/about" className="text-[#E2FF00] flex items-center font-bold">
            <ChevronLeft className="mr-2" /> BACK TO ABOUT
          </Link>
          <Link to="/" className="bg-[#a855f7] text-white px-4 py-2 rounded-md font-semibold">Home</Link>
        </div>

        <h1 className="text-7xl font-black mb-12 tracking-tighter">COACH RICH</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <img 
              src="/images/coach-rich.png" 
              className="rounded-2xl border-2 border-white/10 w-full"
              alt="Coach Rich"
            />
            <p className="text-xl text-gray-300 leading-relaxed font-semibold">
              High-performance coaching.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <img src="/images/coach-rich2.png" className="rounded-2xl border border-white/10 w-full" alt="1" />
            <img src="/images/coach-rich3.png" className="rounded-2xl border border-white/10 w-full" alt="2" />
          </div>
        </div>
      </div>
    </div>
  );
}
