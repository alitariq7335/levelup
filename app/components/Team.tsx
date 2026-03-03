"use client";
import React from 'react'

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


export default function Team() {
  return (
    <div>
      {/* Team Section */}
      <section className="py-40 bg-zinc-950 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h3 className="text-blue-500 font-black uppercase text-[12px] mb-6">Core Operatives</h3>
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
    </div>
  )
}
