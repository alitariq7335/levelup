"use client";
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true after component mounts (client-side only)
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isClient) return;
    
    const { clientX, clientY } = e;
    const x = (clientX - window.innerWidth / 2) / 40;
    const y = (clientY - window.innerHeight / 2) / 40;
    setMouseOffset({ x, y });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center pt-24 md:pt-20 pb-16 md:pb-0 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 -left-10 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-blue-600/10 rounded-full mix-blend-screen filter blur-[120px] md:blur-[180px] opacity-40 animate-blob"></div>
      <div className="absolute bottom-0 -right-10 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-indigo-600/10 rounded-full mix-blend-screen filter blur-[120px] md:blur-[180px] opacity-40 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Text Content */}
          <div className="max-w-4xl order-2 lg:order-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 border border-blue-500/30 rounded-full bg-blue-500/10 text-blue-400 text-[8px] sm:text-[10px] font-black tracking-[0.1em] sm:tracking-[0.2em] uppercase">
              Digital Excellence • Lahore to Global
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[8rem] font-black tracking-tighter leading-[0.85] sm:leading-[0.8] mb-6 sm:mb-8 uppercase">
              LEVEL UP <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-600 inline-block">
                SOLUTIONS.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 font-light max-w-2xl mx-auto lg:mx-0 mb-8 sm:mb-10 lg:mb-12 leading-relaxed">
              At Level Up, we believe that our success is directly attributed to the talented individuals who make up our team. Our team members are experts in their respective fields and share a passion for software development and delivering exceptional results to our clients.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('ai-architect')}
                className="group relative w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-blue-600 rounded-xl sm:rounded-2xl font-black text-xs sm:text-sm text-center overflow-hidden transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] uppercase tracking-wider cursor-pointer"
              >
                <span className="relative z-10">Initiate AI Roadmap</span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
              </button>

              <button
                onClick={() => scrollToSection('services')}
                className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 border border-white/20 rounded-xl sm:rounded-2xl font-black text-xs sm:text-sm text-center hover:bg-white/5 hover:border-white/40 transition-all uppercase tracking-[0.2em] sm:tracking-[0.3em] cursor-pointer"
              >
                Our Services
              </button>
            </div>
          </div>

          {/* 3D Character Visualization */}
          <div className="relative order-1 lg:order-2 flex justify-center items-center h-full">
            <div
              className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[550px] transition-transform duration-700 ease-out mx-auto"
              style={{
                transform: isClient && typeof window !== 'undefined' && window.innerWidth > 768
                  ? `translate(${mouseOffset.x}px, ${mouseOffset.y}px)`
                  : 'none'
              }}
            >
              {/* Backglow Aura */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-purple-600/30 blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full animate-pulse scale-90"></div>

              {/* Character Image */}
              <div className="relative z-10 animate-float">
                <div className="rounded-[2rem] sm:rounded-[3rem] md:rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl relative">
                  <img
                    src="/assets/hero-img.avif"
                    alt="3D Cyber Agent"
                    className="w-full h-auto object-cover scale-110 brightness-110 saturate-125 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>

                  {/* Digital Grid Overlay */}
                  <div className="absolute inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]"></div>
                </div>

                {/* Status Badge - Top Right */}
                <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 glass p-3 sm:p-4 md:p-6 rounded-[1.5rem] sm:rounded-[2rem] border-blue-500/40 z-20 backdrop-blur-3xl animate-float animation-delay-2000 shadow-lg">
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-1 sm:mb-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-ping"></div>
                    <p className="text-[8px] sm:text-[10px] font-black tracking-[0.2em] sm:tracking-[0.3em] text-blue-400 uppercase">Status: Live</p>
                  </div>
                  <p className="text-sm sm:text-lg md:text-xl font-black tracking-tighter uppercase">AI AGENT V.5</p>
                </div>

                {/* Status Badge - Bottom Left */}
                <div className="absolute bottom-6 -left-6 sm:bottom-8 sm:-left-8 md:bottom-10 md:-left-10 glass p-3 sm:p-4 md:p-6 rounded-[1.5rem] sm:rounded-[2rem] border-purple-500/40 z-20 backdrop-blur-3xl animate-float animation-delay-4000 shadow-lg">
                  <p className="text-[8px] sm:text-[10px] font-black tracking-[0.2em] sm:tracking-[0.3em] text-purple-400 uppercase mb-1 sm:mb-2">Global Sync</p>
                  <p className="text-xs sm:text-sm font-black uppercase tracking-wider">Active: 12</p>
                </div>
              </div>

              {/* Orbital Graphic Elements - Hidden on mobile for performance */}
              <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-blue-500/10 rounded-full animate-[spin_25s_linear_infinite] pointer-events-none"></div>
              <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse] pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:flex absolute bottom-6 lg:bottom-10 left-1/2 -translate-x-1/2 flex-col items-center space-y-3 lg:space-y-4 opacity-30 hover:opacity-60 transition-opacity">
        <span className="text-[9px] lg:text-[10px] tracking-[0.6em] lg:tracking-[0.8em] uppercase font-black text-blue-400">Initialize</span>
        <div className="w-[1px] h-16 lg:h-20 bg-gradient-to-b from-blue-600 to-transparent"></div>
      </div>

      {/* Custom Animations in Style Tag */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .animate-blob {
          animation: blob 7s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .glass {
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 768px) {
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;