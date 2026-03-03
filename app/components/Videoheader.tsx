"use client";
import React from 'react'

export default function Videoheader() {
    return (
        <div className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 border-b border-white/5 relative overflow-hidden bg-black">
            <div className="absolute top-0 right-0 w-[500px] sm:w-[600px] md:w-[800px] h-[500px] sm:h-[600px] md:h-[800px] bg-blue-600/5 blur-[120px] md:blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <h3 className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 border border-blue-500/30 rounded-full bg-blue-500/10 text-blue-400 text-[8px] sm:text-[10px] font-black tracking-[0.1em] sm:tracking-[0.2em] uppercase">
                    Professional Editing
                </h3>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[10rem] font-black tracking-tighter uppercase leading-[0.85] sm:leading-[0.8] mb-8 sm:mb-10 md:mb-12 text-white">
                    VIDEO <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">EDITING.</span>
                </h1>
                <p className="max-w-full sm:max-w-xl md:max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 font-light leading-relaxed border-l-2 md:border-l-4 border-blue-600 pl-4 sm:pl-6 md:pl-8">
                    Transform raw footage into compelling stories. Professional editing that captivates,
                    engages, and converts your audience.
                </p>
            </div>
        </div>
    )
}