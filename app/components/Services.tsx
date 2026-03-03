import React from "react";

const services = [
  {
    title: "Graphic Designing",
    tag: "Creativity",
    protocol: "Design Protocol",
    link: "/services/graphic-designing",
    description: [
      "Logo Design",
      "Interactive Social Media Posts",
      "Marketing Presentation Design",
    ],
    icon: "M16.862 4.487l1.687-1.688a2.25 2.25 0 113.182 3.182l-9.193 9.193a4.5 4.5 0 01-1.897 1.13l-2.685.895.895-2.685a4.5 4.5 0 011.13-1.897l9.193-9.193z",
    image:
      "/assets/graphic.avif",
  },
  {
    title: "Web Development",
    tag: "Engineering",
    protocol: "Design Protocol",
    link: "/services/graphic-designing",
    description: [
      "E-Commerce Development.",
      "Web Hosting and Deployment.",
      "Web Application Development.",
    ],
    icon:
      "M16 18l6-6-6-6M8 6l-6 6 6 6",
    image:
      "/assets/web.avif",
  },
  {
    title: "App Development",
    tag: "Innovation",
    protocol: "Design Protocol",
    link: "/services/graphic-designing",
    description: [
      "Progressive Web Apps.",
      "App Store Deployment.",
      "Custom App Development.",
    ],
    icon:
      "M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2zm5 18a1 1 0 100-2 1 1 0 000 2z",
    image:
      "/assets/app.avif",
  },
  {
    title: "Video Editing",
    tag: "Production",
    protocol: "Design Protocol",
    link: "/services/graphic-designing",
    description: [
      "VFX and Special Effects.",
      "Professional Video Editing.",
      "Corporate & Business Videos.",
    ],
    icon:
      "M5 3l14 9-14 9V3z",
    image:
      "/assets/v-editing.avif",
  },
  {
    title: "Digital Marketing",
    tag: "Growth",
    protocol: "Design Protocol",
    link: "/services/graphic-designing",
    description: [
      "E-Commerce Marketing.",
      "Social Media Marketing.",
      "Pay-Per-Click Advertising.",
    ],
    icon:
      "M3 18l4-6 4 4 6-12 4 4M25 12v6H3v-9",
    image:
      "/assets/digital.avif",
  },
  {
    title: "UI / UX Design",
    tag: "Experience",
    protocol: "Design Protocol",
    link: "/services/graphic-designing",
    description: [
      "Interaction Design.",
      "UX Research & Strategy.",
      "Design System Development.",
    ],
    icon:
      "M3 4h18v16H3V4zm0 4h18M7 12h4M7 16h6",
    image:
      "/assets/ui-ux.avif",
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-zinc-950 relative">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between text-center md:text-start mb-24 gap-10">
          <div className="max-w-2xl">
            <h3 className="text-blue-500 font-black uppercase text-[12px] mb-4">
              Service Ecosystem
            </h3>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8]">
              DIGITAL <br />
              <span className="text-white/20">WEAPONRY.</span>
            </h2>
          </div>

          <p className="text-gray-500 max-w-sm text-sm uppercase tracking-widest font-bold leading-relaxed border-l-2 border-blue-600 pl-8">
            Each service is a module designed for total market dominance.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="group relative h-[550px] rounded-[3rem] overflow-hidden border border-white/5 bg-zinc-950 transition-all duration-700 hover:-translate-y-2 hover:border-blue-500/50"
            >
              {/* Image */}
              <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-12 h-full flex flex-col justify-between">
                <div>
                  {/* Icon */}
                  <div className="w-14 h-14 mb-10 text-blue-500 group-hover:text-white transition-colors">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d={s.icon}
                      />
                    </svg>
                  </div>

                  {/* Tag */}
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-500/80 block mb-4 transition-colors group-hover:text-white/90">
                    {s.tag}
                  </span>

                  {/* Title */}
                  <h4 className="text-3xl font-black uppercase mb-4">
                    {s.title}
                  </h4>

                  {/* Description */}
                  <ol className="text-gray-400 text-sm leading-relaxed space-y-2 list-decimal list-inside transition-colors group-hover:text-white/90">
                    {s.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ol>
                </div>

                {/* Protocol Link */}
                <a
                  href={s.link}
                  className="pt-8 border-t border-white/10 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all hover:text-blue-500"
                >
                  <span className="text-[10px] font-black tracking-widest uppercase">
                    {s.protocol}
                  </span>

                  <svg
                    className="w-5 h-5 text-blue-500 transition-transform duration-300 group-hover:translate-x-1"
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
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
