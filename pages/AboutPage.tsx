
import React from 'react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

const testimonials = [
  {
    client: "Aether Dynamics",
    location: "London, UK",
    quote: "Level Up redefined our digital architecture. Their approach to minimalist UX combined with aggressive SEO resulted in a 300% growth in our EMEA pipeline.",
    identity: "Protocol V.09 Verified"
  },
  {
    client: "Zaman Holdings",
    location: "Lahore, PK",
    quote: "The bridge they've built between local insight and international standards is unparalleled. Our brand now competes at a global scale while staying true to its roots.",
    identity: "Protocol V.12 Verified"
  },
  {
    client: "Lumina Retail",
    location: "Dubai, UAE",
    quote: "Their AI-driven social strategy didn't just give us followers; it gave us a culture. They are the only agency that understands the future of the digital narrative.",
    identity: "Protocol V.07 Verified"
  }
];

const team = [
  {
    name: "Zayn Ahmed",
    role: "Chief Architect",
    specialty: "Algorithmic Strategy",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    id: "OP-01"
  },
  {
    name: "Sara Khan",
    role: "Creative Director",
    specialty: "Visual Narrative",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
    id: "OP-02"
  },
  {
    name: "Omar Malik",
    role: "Growth Engineer",
    specialty: "Market Intelligence",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    id: "OP-03"
  },
  {
    name: "Eshaal Noor",
    role: "Lead Developer",
    specialty: "Cloud Ecosystems",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    id: "OP-04"
  }
];

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-black">
      {/* Visual Narrative Section */}
      <section className="relative pt-32 pb-40 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute -left-20 top-40 w-80 h-80 border border-blue-600/20 rounded-full animate-[spin_30s_linear_infinite]"></div>
        <div className="absolute -left-10 top-50 w-60 h-60 border border-white/5 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h3 className="text-blue-500 font-black uppercase tracking-[0.5em] text-[10px] mb-8">The Nexus</h3>
              <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter uppercase leading-[0.85] mb-12">
                LAHORE <br /> <span className="text-blue-600">ORIGIN.</span> <br /> <span className="text-white/20">GLOBAL</span> <br /> VISION.
              </h1>
              <p className="text-xl text-gray-400 font-light leading-relaxed mb-12 max-w-xl">
                Level Up Solutions is the bridge between the raw creative hunger of the East and the systematic technical precision of the West. 
                We don't just export services; we engineer digital dominance.
              </p>
              
              <div className="grid grid-cols-2 gap-12">
                <div className="group">
                  <p className="text-5xl font-black text-white mb-2 transition-colors group-hover:text-blue-600">2021</p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-600 font-bold">Genesis Year</p>
                </div>
                <div className="group">
                  <p className="text-5xl font-black text-white mb-2 transition-colors group-hover:text-blue-600">50+</p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-600 font-bold">Protocol Specialists</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/20 blur-[120px] rounded-full animate-pulse scale-90"></div>
              <div className="relative z-10 animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200&auto=format&fit=crop" 
                  alt="Agency Vision Mascot" 
                  className="w-full max-w-lg mx-auto rounded-[3rem] border border-white/10 shadow-2xl saturate-150 brightness-110 grayscale-0"
                />
                <div className="absolute -bottom-10 -right-10 glass p-8 rounded-3xl border-blue-600/30 backdrop-blur-2xl">
                  <p className="text-[10px] font-black tracking-widest text-blue-400 uppercase mb-2">Current Uplink</p>
                  <p className="text-2xl font-black tracking-tighter uppercase">Lahore - London - Dubai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Grid */}
      <section className="py-40 bg-zinc-950 relative">
        <div className="container mx-auto px-6">
          <div className="mb-24 text-center max-w-3xl mx-auto">
             <h2 className="text-5xl font-black uppercase tracking-tighter mb-8">OUR OPERATING PHILOSOPHY.</h2>
             <div className="h-[2px] w-24 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Aggressive Minimalism', 
                text: 'We strip away the noise. Only high-performance aesthetics and ROI-focused code remain. Every pixel has a purpose.',
                icon: 'M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4'
              },
              { 
                title: 'Cultural Hybridity', 
                text: 'We blend Pakistani cultural intuition with global market standards to create unique identities that resonate everywhere.',
                icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              },
              { 
                title: 'Future Prototyping', 
                text: 'We don\'t follow trends; we engineer them. Our R&D focuses on AI integration and next-gen user experience paradigms.',
                icon: 'M13 10V3L4 14h7v7l9-11h-7z'
              }
            ].map((box, i) => (
              <div key={i} className="group relative p-12 rounded-[3rem] bg-black border border-white/5 hover:border-blue-600/40 transition-all duration-700 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-12 h-12 text-blue-500 mb-8 transition-transform duration-500 group-hover:scale-110">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d={box.icon}></path></svg>
                </div>
                <h3 className="text-2xl font-black uppercase mb-6 tracking-tight">{box.title}</h3>
                <p className="text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors">{box.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-40 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h3 className="text-blue-500 font-black uppercase tracking-[0.5em] text-[10px] mb-6">Core Operatives</h3>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">THE <span className="text-blue-600">ARCHITECTS.</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="group relative rounded-[3rem] overflow-hidden border border-white/5 bg-zinc-950 transition-all duration-700 hover:border-blue-600/30">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-90"></div>
                  
                  {/* Digital Scanlines effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-500 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.5)_3px)]"></div>
                </div>

                <div className="p-8 relative -mt-10">
                  <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[8px] font-black uppercase tracking-widest text-blue-400 mb-4">
                    {member.id}
                  </div>
                  <h4 className="text-2xl font-black uppercase tracking-tighter mb-1">{member.name}</h4>
                  <p className="text-blue-500 font-bold uppercase text-[10px] tracking-widest mb-4">{member.role}</p>
                  <p className="text-gray-500 text-xs font-medium uppercase tracking-widest border-t border-white/5 pt-4">
                    Specialty: {member.specialty}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-40 bg-zinc-950 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <div className="max-w-xl">
              <h3 className="text-blue-500 font-black uppercase tracking-[0.5em] text-[10px] mb-6">Client Synchronicity</h3>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                VOICES FROM <br /> THE <span className="text-blue-600">NETWORK.</span>
              </h2>
            </div>
            <p className="text-gray-500 uppercase tracking-widest text-[11px] font-bold border-l border-blue-600 pl-6 max-w-xs">
              Verified success protocols across international and regional sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="group relative glass p-12 rounded-[3rem] border border-white/5 hover:border-blue-500/20 transition-all duration-700">
                <div className="absolute top-10 right-10 text-blue-600/20 group-hover:text-blue-600 transition-colors duration-500">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21ZM3 21L3 18C3 16.8954 3.89543 16 5 16H8C9.10457 16 10 16.8954 10 18V21C10 22.1046 9.10457 23 8 23H5C3.89543 23 3 22.1046 3 21ZM16.017 16V14C16.017 10.134 19.151 7 23 7V5C18.0294 5 14.017 9.02944 14.017 14V16ZM5 16V14C5 10.134 8.13401 7 12 7V5C7.02944 5 3 9.02944 3 14V16H5Z" /></svg>
                </div>
                
                <div className="mb-8">
                  <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[8px] font-black uppercase tracking-widest text-blue-400 mb-6">
                    {t.identity}
                  </div>
                  <p className="text-xl text-gray-300 italic leading-relaxed font-light group-hover:text-white transition-colors duration-500">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-black uppercase tracking-tighter text-white">{t.client}</h4>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">{t.location}</p>
                  </div>
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
      </section>

      {/* Final Call */}
      <section className="py-40 bg-black text-center">
        <div className="container mx-auto px-6">
          <p className="text-blue-500 font-black tracking-[0.5em] text-[10px] uppercase mb-12">The Mission</p>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-16 leading-[0.9]">
            LEVEL UP IS NOT AN AGENCY. <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">IT IS A SYSTEM UPGRADE.</span>
          </h2>
          <button 
            onClick={() => onNavigate('contact')}
            className="px-16 py-6 border border-white rounded-full font-black text-xs uppercase tracking-[0.5em] hover:bg-white hover:text-black transition-all"
          >
            Initiate Contact
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
