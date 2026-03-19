"use client";
import React, {
  useState,
  useCallback,
  useMemo,
  useRef,
  useEffect,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── TYPES ── */
interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

/* ── DATA ── */
const projects: Project[] = [
  {
    id: 1,
    title: "PCMA",
    category: "Logo Design",
    description:
      "Full luxury hotel brand identity — logo, collateral, signage, and a complete digital UI kit built around effortless restraint.",
    image: "/assets/portfolio/websites/pcma.png",
  },
  {
    id: 2,
    title: "Magami",
    category: "Brand Strategy",
    description:
      "Kinetic brand identity for an EV charging network — logomark that visually accelerates, type drawn from circuit geometry.",
    image: "/assets/portfolio/websites/magami.png",
  },
  {
    id: 3,
    title: "Able Vu",
    category: "Brand Strategy",
    description:
      "Independent fashion house — brutalist typography meets old-money restraint. Gold at EU Design Awards 2024.",
    image: "/assets/portfolio/websites/ablevu.png",
  },
  {
    id: 4,
    title: "Shazo",
    category: "Logo Design",
    description:
      "Wealth management platform identity — stripped of banking clichés. No marble. Just honest, direct confidence.",
    image: "/assets/portfolio/websites/shazo.jpg",
  },
  {
    id: 5,
    title: "Addo-nl",
    category: "Full Identity",
    description:
      "Tokyo architecture firm — raw, material-honest identity built to last centuries. Awwwards SOTD on launch.",
    image: "/assets/portfolio/websites/addo-nl.png",
  },
  {
    id: 6,
    title: "Aslifood",
    category: "Packaging",
    description:
      "Clinical skincare bridging lab precision and warmth. 18 SKUs launched across 340 Sephora doors globally.",
    image: "/assets/portfolio/websites/aslifood.png",
  },
  {
    id: 7,
    title: "House of brands",
    category: "Packaging",
    description:
      "Clinical skincare bridging lab precision and warmth. 18 SKUs launched across 340 Sephora doors globally.",
    image: "/assets/portfolio/websites/houseofbrands.png",
  },
  {
    id: 8,
    title: "VRB",
    category: "Packaging",
    description:
      "Clinical skincare bridging lab precision and warmth. 18 SKUs launched across 340 Sephora doors globally.",
    image: "/assets/portfolio/websites/vrb.png",
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
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const calc = () => {
      if (containerRef.current && imageRef.current) {
        const containerHeight = containerRef.current.offsetHeight;
        const imageHeight = imageRef.current.offsetHeight;
        const diff = imageHeight - containerHeight;
        setOffset(diff > 0 ? diff : 0);
      }
    };

    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [project.image]);

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
      className={`
        relative overflow-hidden cursor-pointer rounded-[10px]
        bg-[#0a0a0a] transition-colors duration-300
        ${isHovered ? "border border-blue-500/50" : "border border-white/[0.06]"}
      `}
      style={{ aspectRatio: "4/3" }}
    >
      {/* IMAGE SCROLL */}
      <div ref={containerRef} className="absolute inset-0 overflow-hidden">
        <img
          ref={imageRef}
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-auto block"
          style={{
            transform: isHovered
              ? `translateY(-${offset}px)`
              : "translateY(0)",
            transition: isHovered
              ? "transform 4s cubic-bezier(0.45, 0, 0.55, 1)"
              : "transform 4s ease-in-out",
            filter: isHovered
              ? "brightness(0.9) saturate(1)"
              : "brightness(0.55) saturate(0.6)",
          }}
        />
      </div>

      {/* DARK GRADIENT */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"  />

      {/* BLUE OVERLAY */}
      <div
        className={`absolute inset-0 z-[3] transition-all duration-500 ${isHovered ? "bg-blue-600/10" : ""
          }`}
      />

      {/* CONTENT */}
      <div className="absolute bottom-0 left-0 right-0 p-[18px] z-10 bg-gradient-to-t from-black/90 to-transparent">
        <div className={`${isHovered ? "opacity-0 absolute" : "opacity-100"} transition`}>
          <h3 className="text-[clamp(18px,2.2vw,24px)] font-black text-white">
            {project.title}
          </h3>
        </div>

        <div className={`${isHovered ? "opacity-100" : "opacity-0"} transition delay-100`}>
          <h3 className="text-[clamp(18px,2.2vw,24px)] font-black text-white mb-1">
            {project.title}
          </h3>
          <p className="text-[14px] text-white/65">{project.description}</p>
        </div>
      </div>

      {/* BORDER GLOW */}
      <div
        className={`absolute inset-0 rounded-[10px] pointer-events-none z-20 ${isHovered ? "shadow-[inset_0_0_0_1px_rgba(59,130,246,0.4)]" : ""
          }`}
      />
    </motion.article>
  );
});

/* ── MAIN ── */
export default function Websiteportfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
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
    <div className="bg-black min-h-screen text-white">

      {/* FILTER */}
      <section className="px-[6%] pt-16">
        <div className="flex gap-2.5 flex-wrap mb-10 justify-center">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-[22px] py-2.5 rounded-md text-[13px] font-bold border ${isActive
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "border-white/[0.14] text-white/50"
                  }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* GRID */}
      <section className="px-[6%] pb-24">
        <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          <AnimatePresence>
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isHovered={hoveredId === project.id}
                onMouseEnter={() => handleMouseEnter(project.id)}
                onMouseLeave={handleMouseLeave}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}