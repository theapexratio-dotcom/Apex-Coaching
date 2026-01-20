import React, { useState } from 'react';
import { ArrowLeft, Award, Users, Target, TrendingUp, ShieldAlert } from 'lucide-react';

// --- BIOPAGE COMPONENT ---
const BioPage = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-black relative selection:bg-[#a855f7] selection:text-white">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-0">
        <div
          className="w-full h-full bg-fixed bg-center bg-cover opacity-20"
          style={{
            backgroundImage: "url('https://i.postimg.cc/LhLhwTkd/coach-rich-bio.png')",
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/95"></div>
      </div>

      <div className="relative z-10 px-6 pt-20 pb-32">
        {/* Back Button */}
        <div className="max-w-5xl mx-auto mb-12">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-3 text-white/70 hover:text-[#a855f7] transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-black uppercase tracking-widest">Back to Command Hub</span>
          </button>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <span className="text-[#a855f7] font-black text-[11px] uppercase tracking-[0.5em] block mb-6">
              The Foundation
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl italic uppercase tracking-tighter text-white mb-8 leading-none">
              Richard <span className="text-[#a855f7] not-italic">Al-Ameen</span>
            </h1>
            <p className="text-zinc-400 text-sm uppercase tracking-widest font-black">
              Executive Transformation Specialist
            </p>
          </div>

          <div className="space-y-12 bg-black/40 backdrop-blur-sm rounded-[3rem] p-12 md:p-16 border border-white/10 shadow-2xl">
            <div className="space-y-6">
              <p className="text-white font-light leading-loose tracking-wide text-lg">
                I specialize in working with{' '}
                <span className="text-[#a855f7] font-semibold">high-earning executives and busy professionals</span> who
                demand the same excellence in their physical health as they do in their careers.
              </p>
              <p className="text-white font-light leading-loose tracking-wide text-lg">
                I don't just provide a plan; I provide a foundation built on years of experience, massive successes, and
                the lessons learned from my own losses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-white/10">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-[#a855f7]" />
                  <h3 className="text-2xl uppercase italic text-white">The Experience</h3>
                </div>
                <p className="text-zinc-300 font-light text-sm uppercase">7 years experience • 3 years UP specialist</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-[#a855f7]" />
                  <h3 className="text-2xl uppercase italic text-white">The Client</h3>
                </div>
                <p className="text-zinc-300 font-light text-sm uppercase">Hard-working executives / Busy Professionals</p>
              </div>
            </div>

            <div className="pt-12 text-center border-t border-white/10">
              <button 
                onClick={onBack}
                className="inline-flex items-center gap-4 px-12 py-6 rounded-[2rem] text-sm bg-[#a855f7] text-white font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-lg shadow-purple-500/30"
              >
                Return to Application
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP COMPONENT ---
const App = () => {
  const [showBio, setShowBio] = useState(false);
  const formspreeId = "mldevvwa"; 

  const images = {
    mainHero: "https://i.postimg.cc/N5xFfjPR/coach-rich-main.png",
    transform1: "https://i.postimg.cc/cv4HKGVF/transformation-1.png",
    transform2: "https://i.postimg.cc/cv4HKGVD/transformation-2.png",
    transform3: "https://i.postimg.cc/ZCLnK5Ds/apex-ratio.png"
  };

  // Switch to Bio Page View
  if (showBio) {
    return <BioPage onBack={() => setShowBio(false)} />;
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="font-black text-2xl uppercase tracking-tighter">COACH RICH</div>
        <div className="space-x-6 text-[10px] font-black uppercase tracking-[0.2em]">
          <button onClick={() => setShowBio(true)} className="hover:text-[#a855f7] transition">About Coach</button>
          <a href="#transformation" className="hover:text-[#a855f7] transition">Transformation</a>
          <a href="#contact" className="hover:text-[#a855f7]
