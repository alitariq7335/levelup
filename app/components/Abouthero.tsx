"use client";
import React, { useState } from 'react';

const Abouthero: React.FC = () => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientX - window.innerWidth / 2) / 40;
    const y = (clientY - window.innerHeight / 2) / 40;
    setMouseOffset({ x, y });
  };


  return (
    <div className="min-h-screen pt-5 xl:pt-20 lg:pt-24 md:pt-50 pb-16 md:pb-10" onMouseMove={handleMouseMove}>
      {/* Visual Narrative Section */}
      <section className="relative pt-38 pb-20 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute -left-20 top-40 w-80 h-80 border border-blue-600/20 rounded-full animate-[spin_30s_linear_infinite]"></div>
        <div className="absolute -left-10 top-50 w-60 h-60 border border-white/5 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-24">
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <h3 className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 border border-blue-500/30 rounded-full bg-blue-500/10 text-blue-400 text-[8px] sm:text-[10px] font-black tracking-[0.1em] sm:tracking-[0.2em] uppercase">
                About Us
              </h3>
              <h1 className="text-5xl md:text-6xl lg:text-5xl xl:text-[4rem] xxl:text-[6rem] font-black leading-tight sm:leading-snug lg:leading-[1em] mb-6 sm:mb-8 uppercase">
                How We Put Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-600">
                Startup On The Map
                </span>
              </h1>
              <p className="text-sm sm:text-md md:text-xl text-gray-400 font-light leading-relaxed mb-4 max-w-full md:max-w-3xl">
                Level Up Solutions is a full-service digital marketing agency helping businesses dominate online before the competition does. We are a team of highly motivated, skilled, creative, and passionate minds. Give us a spark of an idea, and our team of enthusiasts brings it to life with artistry and precision. From SEO and social media marketing to PPC, content creation, and web development, we deliver strategies that skyrocket visibility, engagement, and revenue.
              </p>
              <p className="text-sm sm:text-md md:text-xl text-gray-400 font-light leading-relaxed mb-4 max-w-full md:max-w-3xl">
                Don’t get left behind. Our blend of creativity, data-driven insights, and cutting-edge technology ensures your brand not only competes but leads in the digital world. The time to level up is now.
              </p>
            </div>

            {/* Right Image */}
            <div className="relative order-1 lg:order-2 flex justify-center items-center h-full">
              <div
                className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[550px] transition-transform duration-700 ease-out mx-auto"
                style={{
                  transform:
                    typeof window !== "undefined" && window.innerWidth > 768
                      ? `translate(${mouseOffset.x}px, ${mouseOffset.y}px)`
                      : "none",
                }}
              >
                {/* Backglow Aura */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-purple-600/30 blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full animate-pulse scale-90"></div>

                {/* Character Image */}
                <div className="relative z-10 animate-float">
                  <div className="rounded-[2rem] sm:rounded-[3rem] md:rounded-[4rem] overflow-hidden relative">
                    <img
                      src="/assets/hero.png"
                      alt="3D Cyber Agent"
                      className="w-full h-auto object-cover scale-110 brightness-110 saturate-125 transition-all duration-700"
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div> */}

                    {/* Digital Grid Overlay */}
                    <div className="absolute inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]"></div>
                  </div>

                  {/* <div className="absolute -bottom-10 -right-10 glass p-6 sm:p-8 rounded-3xl border-blue-600/30 backdrop-blur-2xl">
                    <p className="text-[10px] font-black tracking-widest text-blue-400 uppercase mb-2">
                      Current Uplink
                    </p>
                    <p className="text-lg sm:text-2xl font-black tracking-tighter uppercase">
                      Lahore - London - Dubai
                    </p>
                  </div> */}
                </div>

                {/* Orbital Graphic Elements - Hidden on mobile for performance */}
                <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-blue-500/10 rounded-full animate-[spin_25s_linear_infinite] pointer-events-none"></div>
                <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse] pointer-events-none"></div>
              </div>
            </div>
          </div>
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
    </div>
  );
};

export default Abouthero;