import React from 'react'

export default function Marquee() {
  return (
    <div>
        {/* Marquee Section */}
      <div className="py-12 border-y border-white/5 overflow-hidden whitespace-nowrap bg-zinc-950/50 relative">
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />

        <div className="flex w-max animate-marquee">
          {[...Array(2)].map((_, loopIndex) => (
            <div key={loopIndex} className="flex space-x-12 items-center">
              {[
                "Graphic Designing",
                "Web Development",
                "App Development",
                "Video Editing",
                "Digital Marketing",
                "UI / UX Design",
              ].map((city, i) => (
                <span
                  key={`${loopIndex}-${i}`}
                  className="text-5xl md:text-7xl font-black text-white/5 uppercase tracking-tighter hover:text-blue-600/30 transition-colors"
                >
                  {city}
                  <span className="text-blue-600 opacity-20 mx-8">//</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
