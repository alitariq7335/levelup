"use client";
import React, { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: number;
  title: string;
  category: string;
  tag: string;
  description: string;
  services: string[];
  year: string;
  result: string;
  image: string;
  palette: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Aurum Hotels",
    category: "Logo Design",
    tag: "BRANDING",
    description:
      "Full luxury hotel brand identity — logo, collateral, signage, and a complete digital UI kit built around effortless restraint.",
    services: ["Logo Design", "Brand System", "Print", "Digital UI"],
    year: "2024",
    result: "+38% Bookings",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    palette: ["#1a1207", "#c8965a", "#e8d5b0", "#f5f0e8"],
  },
  {
    id: 2,
    title: "Volta EV",
    category: "Brand Strategy",
    tag: "IDENTITY",
    description:
      "Kinetic brand identity for an EV charging network — logomark that visually accelerates, type drawn from circuit geometry.",
    services: ["Brand Strategy", "Logo", "Environmental", "Motion"],
    year: "2024",
    result: "3 Auto Partnerships",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
    palette: ["#0a0f1e", "#00e5ff", "#1a3a5c", "#ffffff"],
  },
  {
    id: 3,
    title: "Sable & Co.",
    category: "Brand Strategy",
    tag: "FASHION",
    description:
      "Independent fashion house — brutalist typography meets old-money restraint. Gold at EU Design Awards 2024.",
    services: ["Brand Strategy", "Logo", "Editorial", "Packaging"],
    year: "2023",
    result: "Gold — EU Design Awards",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80",
    palette: ["#f0ece4", "#1c1c1c", "#8b2635", "#d4af37"],
  },
  {
    id: 4,
    title: "Meridian",
    category: "Logo Design",
    tag: "FINTECH",
    description:
      "Wealth management platform identity — stripped of banking clichés. No marble. Just honest, direct confidence.",
    services: ["Brand Strategy", "Visual Identity", "Product Design"],
    year: "2023",
    result: "$4.2M Series A",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    palette: ["#f7f4ef", "#2d2d2d", "#4ade80", "#1a1a1a"],
  },
  {
    id: 5,
    title: "Obsidian Studio",
    category: "Full Identity",
    tag: "ARCHITECTURE",
    description:
      "Tokyo architecture firm — raw, material-honest identity built to last centuries. Awwwards SOTD on launch.",
    services: ["Logo", "Brand Manual", "Website", "Wayfinding"],
    year: "2023",
    result: "Awwwards SOTD",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    palette: ["#111111", "#e8e4df", "#5a5a5a", "#c41e3a"],
  },
  {
    id: 6,
    title: "Bloom Skincare",
    category: "Packaging",
    tag: "BEAUTY",
    description:
      "Clinical skincare bridging lab precision and warmth. 18 SKUs launched across 340 Sephora doors globally.",
    services: ["Visual Identity", "Packaging", "Retail", "Digital"],
    year: "2022",
    result: "$2.1M Month-1",
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&q=80",
    palette: ["#faf6f1", "#2d4a3e", "#e8c4a0", "#f4a261"],
  },
];

const categories = ["All", "Logo Design", "Brand Strategy", "Full Identity", "Packaging"];

/* ── CARD ── */
const ProjectCard = React.memo(function ProjectCard({
  project,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: {
  project: Project;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onMouseEnter}
      onBlur={onMouseLeave}
      tabIndex={0}
      role="article"
      aria-label={`${project.title} — ${project.category}. ${project.description}`}
      className={`relative overflow-hidden cursor-pointer rounded-lg outline-none
        border transition-colors duration-300
        ${isHovered ? "border-blue-500/50" : "border-white/[0.06]"}`}
      style={{ aspectRatio: "4/3" }}
    >
      {/* Image */}
      <img
        src={project.image}
        alt={`${project.title} brand identity`}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover will-change-transform"
        style={{
          transform: isHovered ? "scale(1.08)" : "scale(1)",
          filter: isHovered ? "brightness(0.2) saturate(0.6)" : "brightness(0.55)",
          transition: "transform 0.6s ease, filter 0.6s ease",
        }}
      />

      {/* Blue tint on hover */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-500"
        style={{ background: isHovered ? "rgba(37,99,235,0.15)" : "transparent" }}
      />

      {/* ── ALWAYS VISIBLE — bottom info ── */}
      <div
        className="absolute bottom-0 left-0 right-0 p-5 pointer-events-none transition-all duration-300"
        style={{
          background: "linear-gradient(transparent, rgba(0,0,0,0.85))",
          opacity: isHovered ? 0 : 1,
          transform: isHovered ? "translateY(8px)" : "translateY(0)",
        }}
      >
        <span className="block text-[10px] font-black tracking-[2.5px] uppercase text-blue-400 mb-1.5">
          {project.tag}
        </span>
        <h3 className="font-black text-white leading-tight mb-1" style={{ fontSize: "clamp(20px, 2.4vw, 26px)" }}>
          {project.title}
        </h3>
        <p className="text-[13px] font-semibold text-white/55 m-0">
          {project.result}
        </p>
      </div>

      {/* ── HOVER OVERLAY ── */}
      <div
        aria-hidden={!isHovered}
        className="absolute inset-0 flex flex-col justify-between p-6 transition-opacity duration-400 box-border"
        style={{ opacity: isHovered ? 1 : 0, pointerEvents: isHovered ? "auto" : "none" }}
      >
        {/* Top row */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-black tracking-[2.5px] uppercase text-blue-400">
            {project.tag}
          </span>
          <span className="text-[11px] font-semibold text-white/35">{project.year}</span>
        </div>

        {/* Middle */}
        <div className="text-center">
          <h3 className="font-black text-white leading-tight mb-2.5" style={{ fontSize: "clamp(18px, 2.2vw, 24px)" }}>
            {project.title}
          </h3>
          <p className="text-[13px] leading-relaxed text-white/70 max-w-[300px] mx-auto mb-4">
            {project.description}
          </p>
          {/* Service chips */}
          <div className="flex gap-1.5 flex-wrap justify-center">
            {project.services.map((s) => (
              <span
                key={s}
                className="px-2.5 py-[3px] text-[10px] font-bold border border-white/20 rounded-full text-white/70 tracking-wide"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom row — palette + result */}
        <div className="flex items-center justify-between">
          <div className="flex gap-1.5">
            {project.palette.map((c, i) => (
              <div
                key={i}
                className="w-3.5 h-3.5 rounded-full border border-white/15"
                style={{ background: c }}
              />
            ))}
          </div>
          <span className="text-[11px] font-black text-blue-400 bg-blue-500/15 border border-blue-500/30 px-3 py-1 rounded-full">
            {project.result}
          </span>
        </div>
      </div>

      {/* Focus ring */}
      <div
        className="absolute inset-0 rounded-lg pointer-events-none transition-all duration-300"
        style={{ boxShadow: isHovered ? "inset 0 0 0 1px rgba(59,130,246,0.4)" : "none" }}
      />
    </motion.article>
  );
});

/* ── MAIN ── */
export default function Brandidentity() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((p) => p.category === activeFilter),
    [activeFilter]
  );

  const handleMouseEnter = useCallback((id: number) => setHoveredId(id), []);
  const handleMouseLeave = useCallback(() => setHoveredId(null), []);

  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">

      {/* ── SECTION HEADER ── */}
      <section className="px-[6%] pt-16 pb-0">

        {/* ── FILTERS ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex gap-2.5 flex-wrap mb-10 justify-center"
          role="tablist"
          aria-label="Filter brand identity projects"
        >
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-md text-[13px] font-bold tracking-[0.3px] cursor-pointer outline-none
                  transition-all duration-200 border
                  ${isActive
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "bg-transparent border-white/[0.14] text-white/50 hover:border-white/35 hover:text-white/80"
                  }`}
                style={{ fontFamily: "inherit" }}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>
      </section>

      {/* ── GRID ── */}
      <section className="px-[6%] pb-24" aria-label="Brand identity projects">
        {/* Accessible live region */}
        <div
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        >
          {`Showing ${filtered.length} project${filtered.length !== 1 ? "s" : ""}${activeFilter !== "All" ? ` in ${activeFilter}` : ""}`}
        </div>

        <motion.div
          id="projects-grid"
          role="tabpanel"
          layout
          className="grid grid-cols-2 md:grid-cols-3 gap-5"
 
        >
          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              filtered.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isHovered={hoveredId === project.id}
                  onMouseEnter={() => handleMouseEnter(project.id)}
                  onMouseLeave={handleMouseLeave}
                />
              ))
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-16 text-lg text-white/40"
              >
                No projects found in this category.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}