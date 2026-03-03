
import React from 'react';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

const detailedServices = [
  {
    id: 'smm',
    title: 'Social Media Management',
    tag: 'Engagement Protocol',
    desc: 'Engineering viral narratives through data-driven storytelling. We handle the full spectrum of content from Lahore to the global stage.',
    img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop',
    features: ['Viral Content Strategy', 'Community Governance', 'Trend Forecasting']
  },
  {
    id: 'seo',
    title: 'Search Dominance (SEO)',
    tag: 'Visibility Engine',
    desc: 'Dominating SERPs with algorithmic precision. We bridge Pakistani market gaps and exploit international high-intent keywords.',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    features: ['Multi-Region Optimization', 'Authority Architecture', 'Real-time Analytics']
  },
  {
    id: 'ppc',
    title: 'Precision Advertising',
    tag: 'ROI Accelerator',
    desc: 'Surgical ad placement across Meta, Google, and Amazon. Optimized hourly for maximum conversion efficiency.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    features: ['Hourly Bid Optimization', 'A/B Creative Synthesis', 'Audience Clustering']
  },
  {
    id: 'dev',
    title: 'Full-Stack Development',
    tag: 'Digital Infrastructure',
    desc: 'Crafting the future of web and mobile. High-performance, minimalist architectures built for global scale.',
    img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
    features: ['React & Next.js Ecosystem', 'Web3 & Blockchain', 'Cloud Architecture']
  }
];

const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <section className="pt-32 pb-20 border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h3 className="text-blue-500 font-black uppercase tracking-[0.5em] text-[10px] mb-6">Core Ecosystem</h3>
          <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] mb-12">
            MODULAR <br /><span className="text-blue-600">CAPABILITIES.</span>
          </h1>
          <p className="max-w-2xl text-xl text-gray-400 font-light leading-relaxed border-l border-blue-600 pl-8">
            Each service is a specialized module in our growth engine. 
            We don't provide packages; we build custom-engineered digital strategies.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="space-y-40">
            {detailedServices.map((service, i) => (
              <div key={service.id} className={`flex flex-col lg:flex-row items-center gap-20 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2 group">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl bg-zinc-900">
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                    <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay group-hover:bg-transparent transition-colors"></div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="text-blue-500 font-black tracking-[0.4em] text-[9px] uppercase">{service.tag}</span>
                    <div className="h-[1px] w-12 bg-blue-600/30"></div>
                  </div>
                  <h2 className="text-5xl md:text-7xl font-black uppercase mb-8 leading-tight tracking-tighter">{service.title}</h2>
                  <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg">{service.desc}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                    {service.features.map(feature => (
                      <div key={feature} className="flex items-center space-x-3 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/20 transition-all">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => onNavigate('contact')}
                    className="group relative px-10 py-5 bg-white text-black font-black text-[10px] tracking-[0.4em] uppercase rounded-full overflow-hidden transition-all hover:bg-blue-600 hover:text-white"
                  >
                    <span className="relative z-10">Deploy Strategy</span>
                    <div className="absolute inset-0 bg-blue-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 border-t border-white/5 bg-zinc-950">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-12">READY TO ASCEND?</h2>
          <button 
            onClick={() => onNavigate('contact')}
            className="px-16 py-6 bg-blue-600 rounded-full font-black text-xs uppercase tracking-[0.5em] shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:bg-white hover:text-black transition-all"
          >
            Open Uplink Terminal
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
