import Link from "next/link"
import { ArrowLeft, Award, Users, Target, TrendingUp, ShieldCheck } from "lucide-react"

export default function BioPage() {
  return (
    <div className="min-h-screen bg-[#050505] relative overflow-x-hidden">
      {/* Background Layer */}
      <div className="fixed inset-0 z-0">
        <div
          className="w-full h-full bg-center bg-cover opacity-30"
          style={{
            // Ensure this image exists in your /public/images/ folder on GitHub
            backgroundImage: "url('/images/parallax-background.jpeg')",
            backgroundAttachment: "fixed",
          }}
        />
        {/* Elite Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-[#050505]"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 px-6 pt-32 pb-32">
        
        {/* Back Button - Returns to Coach Portal/About */}
        <div className="max-w-5xl mx-auto mb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-white/50 hover:text-[#a855f7] transition-all group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Return to Command</span>
          </Link>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-6">
               <span className="h-[1px] w-12 bg-[#a855f7]"></span>
               <span className="text-[#a855f7] font-black text-[10px] uppercase tracking-[0.5em]">
                The Foundation
              </span>
            </div>
            
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl italic uppercase tracking-tighter text-white mb-8 leading-[0.85]">
              Richard <br />
              <span className="text-[#a855f7] not-italic">Al-Ameen</span>
            </h1>
            
            <div className="flex items-center gap-4">
              <ShieldCheck className="text-[#a855f7]" size={20} />
              <p className="text-zinc-500 text-xs md:text-sm uppercase tracking-[0.3em] font-black">
                Executive Transformation Specialist
              </p>
            </div>
          </div>

          {/* Narrative Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-8 space-y-10 bg-white/[0.02] backdrop-blur-xl rounded-[3rem] p-10 md:p-16 border border-white/5 shadow-2xl">
              <div className="space-y-8">
                <p className="text-white font-light leading-loose text-xl md:text-2xl italic-fix">
                  I specialize in working with <span className="text-[#a855f7] font-bold">high-earning executives</span> who demand the same excellence in their physical health as they do in their careers.
                </p>
                
                <p className="text-zinc-400 font-light leading-loose text-lg">
                  After spending three years at <span className="text-white border-b border-white/20">Ultimate Performance</span>, I've mastered the art of the world-class body transformation. I don't just provide a plan; I provide a foundation built on years of experience and the hard-won lessons of elite-level coaching.
                </p>

                <p className="text-zinc-400 font-light leading-loose text-lg">
                  I've lived the results I coach. I am passionate about using that roadmap to ensure my clients reach their peak without wasting a second of their valuable time.
                </p>
              </div>

              {/* Stats/Experience Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-12 border-t border-white/10">
                <div className="group">
                  <Award className="w-8 h-8 text-[#a855f7] mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2">The Experience</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed uppercase tracking-tighter">7 Years Total • 3 Years UP Specialist</p>
                </div>

                <div className="group">
                  <Target className="w-8 h-8 text-[#a855f7] mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2">The Mission</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed uppercase tracking-tighter">Bypassing the BS to deliver peak physical efficiency.</p>
                </div>
              </div>
            </div>

            {/* Side CTA / Profile Image Area */}
            <div className="lg:col-span-4 space-y-8">
              <div className="aspect-[4/5] bg-zinc-900 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
                <img 
                  src="/images/richard-profile.jpg" 
                  alt="Richard Al-Ameen"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop"
                  }}
                />
              </div>
              
              <Link
                href="/onboarding"
                className="block w-full text-center py-8 rounded-[2rem] bg-[#a855f7] hover:bg-white hover:text-black text-white font-black uppercase tracking-[0.2em] text-xs transition-all duration-500 shadow-[0_20px_40px_rgba(168,85,247,0.2)] hover:shadow-white/10"
              >
                Apply for Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
