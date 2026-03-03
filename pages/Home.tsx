
import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolios from '../components/Portfolios';
import AIArchitect from '../components/AIArchitect';
import BrandVisualizer from '../components/BrandVisualizer';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <>
      <Hero />
      
      {/* City Marquee */}
      <div className="py-12 border-y border-white/5 overflow-hidden whitespace-nowrap bg-zinc-950/50 relative">
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10"></div>
        <div className="flex animate-marquee space-x-12 items-center">
          {['LAHORE', 'LONDON', 'DUBAI', 'NEW YORK', 'KARACHI', 'TORONTO', 'SINGAPORE', 'TOKYO'].map((city, i) => (
            <span key={i} className="text-5xl md:text-7xl font-black text-white/5 uppercase tracking-tighter transition-colors hover:text-blue-600/20 cursor-default">
              {city} <span className="text-blue-600 opacity-20 mx-8">//</span>
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {['LAHORE', 'LONDON', 'DUBAI', 'NEW YORK', 'KARACHI', 'TORONTO', 'SINGAPORE', 'TOKYO'].map((city, i) => (
            <span key={i + '2'} className="text-5xl md:text-7xl font-black text-white/5 uppercase tracking-tighter transition-colors hover:text-blue-600/20 cursor-default">
              {city} <span className="text-blue-600 opacity-20 mx-8">//</span>
            </span>
          ))}
        </div>
      </div>

      <Services />
      <Portfolios />
      <AIArchitect />
      <BrandVisualizer />

      {/* Strategy Teaser */}
      <section className="py-40 relative overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center grayscale"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-8xl font-black italic tracking-tighter leading-[0.85] max-w-6xl mx-auto uppercase mb-12">
            "WE SHIP <span className="text-blue-500">PAKISTANI BRILLIANCE</span> <br /> 
            TO THE ENTIRE WORLD."
          </h2>
          <button 
            onClick={() => onNavigate('about')}
            className="px-12 py-5 border-2 border-white rounded-full font-black text-xs uppercase tracking-[0.5em] hover:bg-white hover:text-black transition-all"
          >
            Our Mission
          </button>
        </div>
      </section>

      {/* Stats */}
      <section className="py-32 border-t border-white/5 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { val: "250+", label: "Projects Deployed" },
              { val: "12", label: "Global Regions" },
              { val: "100%", label: "Uptime Focus" },
              { val: "4.9", label: "Client Rating" }
            ].map((stat, i) => (
              <div key={i} className="group cursor-default">
                <p className="text-4xl md:text-7xl font-black text-white mb-4 group-hover:text-blue-500 transition-colors duration-500 tracking-tighter">{stat.val}</p>
                <p className="text-[9px] text-gray-500 uppercase tracking-[0.5em] font-bold group-hover:text-white transition-colors">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
