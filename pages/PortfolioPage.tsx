
import React from 'react';
import Portfolios from '../components/Portfolios';

interface PortfolioPageProps {
  onNavigate: (page: string) => void;
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-black">
      {/* Dynamic Header */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.05)_0%,transparent_50%)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h3 className="text-blue-500 font-black uppercase tracking-[0.5em] text-[10px] mb-6">Archive Node</h3>
            <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] mb-12">
              THE <br /><span className="text-blue-600">EVIDENCE.</span>
            </h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl border-l border-blue-600 pl-8 mb-20">
              A curated collection of digital transformations. We focus on brands that demand a futuristic edge and global scalability.
            </p>
          </div>
        </div>
      </section>
      
      {/* Portfolio Grid Component */}
      <div className="bg-black py-10">
        <Portfolios />
      </div>

      {/* Extended Projects Grid */}
      <section className="py-32 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'NEXUS CLOUD',
                category: 'Architecture',
                img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop'
              },
              {
                title: 'LAHORI FLAVOR GLOBAL',
                category: 'E-commerce',
                img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop'
              }
            ].map((p, i) => (
              <div key={i} className="group relative h-[450px] rounded-[3rem] overflow-hidden border border-white/5 bg-black transition-all duration-700 hover:border-blue-500/30">
                <img 
                  src={p.img} 
                  alt={p.title} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-10 left-10 transition-transform duration-500 group-hover:-translate-y-2">
                  <span className="text-blue-500 font-black text-[9px] uppercase tracking-[0.3em] block mb-2">{p.category}</span>
                  <h4 className="text-3xl font-black uppercase tracking-tighter">{p.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Call */}
      <section className="py-40 bg-black relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-blue-600/5 to-transparent"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-12">WANT TO BE THE NEXT <br /> SUCCESS ARCHIVE?</h2>
          <button 
            onClick={() => onNavigate('contact')}
            className="px-16 py-6 bg-blue-600 rounded-full font-black text-xs uppercase tracking-[0.5em] shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:bg-white hover:text-black transition-all"
          >
            Apply for Strategy
          </button>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
