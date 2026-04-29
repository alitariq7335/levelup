
import React from 'react';

const projects = [
  {
    title: "Brand Identities",
    category: "Real Estate Architecture",
    link: "/portfolio/brandidentities",
    image: "/assets/brands.webp",
    size: "large"
  },
  {
    title: "Our Creatives",
    category: "Fintech Interface",
    link: "/portfolio/creatives",
    image: "/assets/creatives.webp",
    size: "small"
  },
  {
    title: "Our Videos",
    category: "E-Commerce Velocity",
    link: "/portfolio/videos",
    image: "/assets/videos.webp",
    size: "small"
  },
  {
    title: "Our Websites",
    category: "E-Commerce Velocity",
    link: "/portfolio/websites",
    image: "/assets/websites.webp",
    size: "large"
  }
];

const Portfolios: React.FC = () => {
  return (
    <section id="case-studies" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="flex flex-col md:flex-row text-center md:text-start md:items-center justify-between mb-24">
          <div>
            <h3 className="text-blue-500 font-black uppercase text-[12px] mb-4">
              Case Archives
            </h3>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              SELECTED{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
                DOMAINS.
              </span>
            </h2>
          </div>
          <a href="/portfolio" className="hidden md:block px-10 py-4 border border-white/10 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white/5 transition-all">
            View All Ops
          </a>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-[3rem] bg-black border border-white/5 h-[300px] md:h-[600px] transition-all duration-700 hover:border-blue-500/30 ${
                p.size === "large" ? "lg:col-span-2" : ""
              }`}
            >
              {/* Background Image */}
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 pointer-events-none"></div>

              {/* Hover Scanlines */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.5)_3px)]"></div>

              {/* Bottom Overlay */}
              <a
                href={p.link}
                className="absolute bottom-0 left-0 p-6 md:p-12 w-full transition-all duration-500"
              >
                {/* Category */}
                <div className="flex items-center space-x-3 mb-4 translate-y-4 group-hover:translate-y-0 transition-transform">
                  <div className="w-8 h-[1px] bg-blue-500 group-hover:bg-white"></div>
                  <p className="text-blue-400 group-hover:text-white text-[10px] font-black tracking-widest uppercase">
                    {p.category}
                  </p>
                </div>

                {/* Title */}
                <h4 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 group-hover:tracking-normal transition-all duration-500">
                  {p.title}
                </h4>

                {/* Action */}
                <div className="flex items-center space-x-6 opacity-0 group-hover:opacity-100 transition-all delay-100 hover:text-blue-500">
                  <span className="text-xs font-black uppercase tracking-[0.2em]">
                    Initiate Analysis
                  </span>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all group-hover:translate-x-2">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolios;
