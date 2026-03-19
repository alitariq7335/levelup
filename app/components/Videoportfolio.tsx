"use client";
import React, { useState, useCallback, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── TYPES ── */
interface Project {
  id: number;
  title: string;
  category: string;
  tag: string;
  description: string;
  services: string[];
  year: string;
  result: string;
  video: string;      // mp4 / webm URL
  poster: string;     // thumbnail shown before video loads
  palette: string[];
}

/* ── DATA ── */
// Replace video & poster URLs with your actual assets
const projects: Project[] = [
  {
    id: 1,
    title: "Aurum Hotels",
    category: "Brand Film",
    tag: "BRANDING",
    description:
      "Full luxury hotel brand film — cinematic identity reel showcasing logo reveal, collateral, and spatial experience.",
    services: ["Brand Film", "Motion Design", "Color Grade", "Sound"],
    year: "2024",
    result: "+38% Bookings",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    poster: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    palette: ["#1a1207", "#c8965a", "#e8d5b0", "#f5f0e8"],
  },
  {
    id: 2,
    title: "Volta EV",
    category: "Product Reel",
    tag: "IDENTITY",
    description:
      "Kinetic product reel for an EV charging network — motion-engineered to mirror the speed of the brand.",
    services: ["Product Reel", "3D Motion", "VFX", "Sound Design"],
    year: "2024",
    result: "3 Auto Partnerships",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    poster: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
    palette: ["#0a0f1e", "#00e5ff", "#1a3a5c", "#ffffff"],
  },
  {
    id: 3,
    title: "Sable & Co.",
    category: "Campaign",
    tag: "FASHION",
    description:
      "Fashion campaign film — brutalist cuts, old-money restraint. Gold at EU Design Awards 2024.",
    services: ["Campaign", "Editorial", "Color", "Post-Production"],
    year: "2023",
    result: "Gold — EU Design Awards",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    poster: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80",
    palette: ["#f0ece4", "#1c1c1c", "#8b2635", "#d4af37"],
  },
  {
    id: 4,
    title: "Meridian",
    category: "Brand Film",
    tag: "FINTECH",
    description:
      "Wealth management brand film — stripped of banking clichés. Honest, direct, confident.",
    services: ["Brand Film", "Motion", "Titles", "Sound"],
    year: "2023",
    result: "$4.2M Series A",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    poster: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    palette: ["#f7f4ef", "#2d2d2d", "#4ade80", "#1a1a1a"],
  },
  {
    id: 5,
    title: "Obsidian Studio",
    category: "Showreel",
    tag: "ARCHITECTURE",
    description:
      "Tokyo architecture firm showreel — raw, material-honest footage built to last. Awwwards SOTD.",
    services: ["Showreel", "Drone", "Grade", "Wayfinding"],
    year: "2023",
    result: "Awwwards SOTD",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    poster: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    palette: ["#111111", "#e8e4df", "#5a5a5a", "#c41e3a"],
  },
  {
    id: 6,
    title: "Bloom Skincare",
    category: "Product Reel",
    tag: "BEAUTY",
    description:
      "Clinical skincare product reel — 18 SKUs, 340 Sephora doors globally. Lab precision meets warmth.",
    services: ["Product Reel", "Packaging", "Retail", "Digital"],
    year: "2022",
    result: "$2.1M Month-1",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    poster: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&q=80",
    palette: ["#faf6f1", "#2d4a3e", "#e8c4a0", "#f4a261"],
  },
];

const categories = ["All", "Brand Film", "Product Reel", "Campaign", "Showreel"];

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
  const videoRef = useRef<HTMLVideoElement>(null);

  // Play on hover, pause + reset on leave
  const handleEnter = useCallback(() => {
    onMouseEnter();
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [onMouseEnter]);

  const handleLeave = useCallback(() => {
    onMouseLeave();
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [onMouseLeave]);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={handleLeave}
      tabIndex={0}
      role="article"
      aria-label={`${project.title} — ${project.category}. ${project.description}`}
      className={`
        relative overflow-hidden cursor-pointer rounded-lg outline-none
        border transition-colors duration-300
        ${isHovered ? "border-blue-500/50" : "border-white/[0.06]"}
      `}
      style={{ aspectRatio: "16/9" }}
    >
      {/* ── VIDEO ── */}
      <video
        ref={videoRef}
        src={project.video}
        poster={project.poster}
        muted
        loop
        playsInline
        preload="none"
        className="w-full h-full object-cover will-change-transform"
        style={{
          transform: isHovered ? "scale(1.04)" : "scale(1)",
          filter: isHovered
            ? "brightness(0.22) saturate(0.55)"
            : "brightness(0.52) saturate(0.7)",
          transition: "transform 0.65s ease, filter 0.65s ease",
        }}
      />

      {/* Play icon — visible at rest only */}
      <div
        className={`
          absolute inset-0 flex items-center justify-center z-[4]
          transition-opacity duration-300 pointer-events-none
          ${isHovered ? "opacity-0" : "opacity-100"}
        `}
      >
        <div className="w-12 h-12 rounded-full border border-white/30 bg-black/40 flex items-center justify-center backdrop-blur-sm">
          <div
            style={{
              width: 0,
              height: 0,
              borderStyle: "solid",
              borderWidth: "7px 0 7px 13px",
              borderColor: "transparent transparent transparent rgba(255,255,255,0.85)",
              marginLeft: "3px",
            }}
          />
        </div>
      </div>

      {/* Bottom gradient + title — visible at rest only, hidden on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 p-5 pointer-events-none transition-all duration-300 z-10"
        style={{
          background: "linear-gradient(transparent, rgba(0,0,0,0.80))",
          opacity: isHovered ? 0 : 1,
          transform: isHovered ? "translateY(6px)" : "translateY(0)",
        }}
      >
        <span className="block text-[10px] font-black tracking-[2.5px] uppercase text-blue-400 mb-1">
          {project.tag}
        </span>
        <h3
          className="font-black text-white leading-tight mb-0.5"
          style={{ fontSize: "clamp(16px, 2vw, 22px)" }}
        >
          {project.title}
        </h3>
        <p className="text-[11px] font-semibold text-white/50 m-0">
          {project.result}
        </p>
      </div>
    </motion.article>
  );
});

/* ── MAIN ── */
export default function Videoportfolio() {
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

      {/* ── FILTER BAR ── */}
      <section className="px-[6%] pt-16 pb-0">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex gap-2.5 flex-wrap mb-10 justify-center"
          role="tablist"
          aria-label="Filter video projects"
        >
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(cat)}
                className={`
                  px-5 py-2.5 rounded-md text-[13px] font-bold tracking-[0.3px]
                  cursor-pointer outline-none transition-all duration-200 border
                  ${isActive
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "bg-transparent border-white/[0.14] text-white/50 hover:border-white/35 hover:text-white/80"
                  }
                `}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>
      </section>

      {/* ── GRID ── */}
      <section className="px-[6%] pb-24" aria-label="Video portfolio projects">
        <div aria-live="polite" aria-atomic="true" className="sr-only">
          {`Showing ${filtered.length} project${filtered.length !== 1 ? "s" : ""}${
            activeFilter !== "All" ? ` in ${activeFilter}` : ""
          }`}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
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