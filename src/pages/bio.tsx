import Link from "next/link"
import { ArrowLeft, Award, Users, Target, TrendingUp } from "lucide-react"

export default function BioPage() {
  return (
    <div className="min-h-screen bg-black relative selection:bg-[#a855f7] selection:text-white font-sans">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-0">
        <div
          className="w-full h-full bg-fixed bg-center bg-cover opacity-20"
          style={{
            backgroundImage: "url('/images/parallax-background.jpeg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-black/95"></div>
      </div>

      <div className="relative z-10 px-6 pt-32 pb-32">
        {/* Navigation */}
        <div className="max-w-5xl mx-auto mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-zinc-500 hover:text-[#a855f7] transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Return to Hub</span>
          </Link>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <span className="text-[#a855f7] font-black text-[11px] uppercase tracking-[0.5em] block mb-6">
              The Foundation
            </span>
            <h1 className="font-display text-6xl md:text-8xl italic uppercase tracking-tighter text-white leading-none mb-8">
              Richard <span className="text-[#a855f7] not-italic">Al-Ameen</span>
            </h1>
            <p className="text-zinc-500 text-xs font-black uppercase tracking-[0.4em]">
              Executive Transformation Specialist
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Biography Section */}
            <div className="lg:col-span-8 space-y-8 bg-white/[0.02] border border-white/5 backdrop-blur-xl p-10 md:p-16 rounded-[3rem]">
              <div className="space-y-6">
                <p className="text-white font-light leading-relaxed text-xl">
                  I specialize in working with <span className="text-[#a855f7] font-bold">high-earning executives</span> who
                  demand the same excellence in their physical health as they do in their careers. 
                </p>
                <p className="text-zinc-400 font-light leading-relaxed text-lg">
                  After three years at <span className="text-white">Ultimate Performance</span>, I've mastered the art of the world-class body transformation. I provide a foundation built on years of experience, bypass the BS, and get you to your goal without wasting time.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-white/10">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-[#a855f7]">
                    <Award size={20} />
                    <h3 className="font-bold uppercase tracking-widest text-sm">Experience</h3>
                  </div>
                  <p className="text-zinc-500 text-xs leading-loose uppercase tracking-wider">7 Years Coaching • 3 Years UP Specialist</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-[#a855f7]">
                    <Target size={20} />
                    <h3 className="font-bold uppercase tracking-widest text-sm">The Mission</h3>
                  </div>
                  <p className="text-zinc-500 text-xs leading-loose uppercase tracking-wider">Eliminate inefficiencies. Maximize results.</p>
                </div>
              </div>
            </div>

            {/* Side Column: Profile & CTA */}
            <div className="lg:col-span-4 space-y-6">
              <div className="aspect-[4/5] rounded-[2.5rem] bg-zinc-900 overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80" 
                  className="w-full h-full object-cover"
                  alt="Richard Al-Ameen"
                />
              </div>
              <Link
                href="/onboarding"
                className="block w-full py-6 bg-[#a855f7] hover:bg-white hover:text-black text-white text-center font-black uppercase tracking-widest text-[10px] rounded-2xl transition-all shadow-xl shadow-purple-500/20"
              >
                Start Transformation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
