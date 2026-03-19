"use client";
import React, { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ================= TYPES ================= */

interface Project {
  id: number;
  title: string;
  category: string;
  tag: string;
  description: string;
  tech: string[];
  color: string;
  year: string;
  result: string;
  image: string;
}

/* ================= DATA ================= */

const projects: Project[] = [
  {
    id: 1,
    title: "NexaShop",
    category: "Web Development",
    tag: "E-COMMERCE",
    description:
      "Full-stack e-commerce platform with real-time inventory, Stripe integration, and custom CMS.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    color: "#2563eb",
    year: "2024",
    result: "+340% Revenue",
    image:
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80",
  },
  {
    id: 2,
    title: "PulseApp",
    category: "App Development",
    tag: "MOBILE",
    description:
      "Fitness tracking app with wearable integrations, AI-generated plans, and social challenges.",
    tech: ["Flutter", "Firebase", "Python", "TensorFlow"],
    color: "#1d4ed8",
    year: "2024",
    result: "50K+ Downloads",
    image:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=800&q=80",
  },
  {
    id: 3,
    title: "ArchVis Studio",
    category: "Graphic Designing",
    tag: "BRANDING",
    description:
      "Complete brand identity system for a luxury architecture firm — logo, collateral, and guidelines.",
    tech: ["Illustrator", "Photoshop", "Figma"],
    color: "#3b82f6",
    year: "2023",
    result: "Brand Relaunch",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
  },
  {
    id: 4,
    title: "FinFlow Dashboard",
    category: "UI / UX Design",
    tag: "FINTECH",
    description:
      "Complex financial dashboard designed for clarity — zero cognitive overload, maximum insight.",
    tech: ["Figma", "Protopie", "Design System"],
    color: "#60a5fa",
    year: "2024",
    result: "92% Satisfaction",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    id: 5,
    title: "Luminary Reel",
    category: "Video Editing",
    tag: "CAMPAIGN",
    description:
      "Brand campaign video series: 12 VFX-heavy ads delivered across YouTube, Instagram & TikTok.",
    tech: ["Premiere Pro", "After Effects", "DaVinci"],
    color: "#2563eb",
    year: "2023",
    result: "8M+ Impressions",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
  },
  {
    id: 6,
    title: "GrowthOS",
    category: "Digital Marketing",
    tag: "GROWTH",
    description:
      "Full-funnel digital marketing strategy: SEO, paid media, and content — for a SaaS startup.",
    tech: ["Google Ads", "Meta", "SEMrush", "HubSpot"],
    color: "#1d4ed8",
    year: "2024",
    result: "3.2x ROAS",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
];

const categories: string[] = [
  "All",
  "Web Development",
  "App Development",
  "Graphic Designing",
  "UI / UX Design",
  "Video Editing",
  "Digital Marketing",
];

/* ================= PROJECT CARD ================= */

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
      style={{
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        aspectRatio: "4/3",
        borderRadius: "8px",
        outline: "none",
      }}
    >
      <img
        src={project.image}
        alt={`Screenshot of ${project.title} project`}
        loading="lazy"
        decoding="async"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: isHovered ? "scale(1.08)" : "scale(1)",
          transition: "transform 0.6s ease, filter 0.6s ease",
          filter: isHovered ? "brightness(0.3)" : "brightness(0.6)",
          willChange: "transform",
        }}
      />

      {/* Always-visible bottom info */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          padding: "20px",
          width: "100%",
          boxSizing: "border-box",
          background:
            "linear-gradient(transparent, rgba(0,0,0,0.7))",
        }}
      >
        <span
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "2px",
            color: project.color,
            textTransform: "uppercase",
          }}
        >
          {project.tag}
        </span>
        <h3
          style={{
            fontSize: "clamp(20px, 2.5vw, 28px)",
            fontWeight: 900,
            margin: "4px 0 2px",
            lineHeight: 1.2,
          }}
        >
          {project.title}
        </h3>
        <p style={{ fontSize: "14px", opacity: 0.7, margin: 0 }}>
          {project.result}
        </p>
      </div>

      {/* Hover overlay with extra details */}
      <div
        aria-hidden={!isHovered}
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "24px",
          boxSizing: "border-box",
          textAlign: "center",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.4s ease",
          pointerEvents: isHovered ? "auto" : "none",
        }}
      >
        <p
          style={{
            fontSize: "14px",
            lineHeight: 1.6,
            opacity: 0.85,
            maxWidth: "320px",
            margin: "0 0 16px",
          }}
        >
          {project.description}
        </p>
        <div
          style={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {project.tech.map((t) => (
            <span
              key={t}
              style={{
                padding: "4px 12px",
                fontSize: "11px",
                fontWeight: 600,
                border: "1px solid rgba(255,255,255,0.25)",
                borderRadius: "999px",
                color: "rgba(255,255,255,0.8)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Focus ring */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "8px",
          border: "2px solid transparent",
          pointerEvents: "none",
          transition: "border-color 0.2s",
        }}
        className="focus-ring"
      />

      <style>{`
        article:focus-visible .focus-ring {
          border-color: #2563eb !important;
        }
        article:focus-visible {
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.4);
        }
      `}</style>
    </motion.article>
  );
});

/* ================= COMPONENT ================= */

export default function Portfeatures() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((p) => p.category === activeFilter),
    [activeFilter]
  );

  const handleMouseEnter = useCallback((id: number) => {
    setHoveredId(id);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredId(null);
  }, []);

  return (
    <div
      style={{
        background: "#000",
        minHeight: "100vh",
        fontFamily: "'Barlow Condensed', sans-serif",
        color: "#fff",
        overflowX: "hidden",
      }}
    >
      {/* FILTER */}
      <section style={{ padding: "40px 6%" }} aria-label="Project filters">
        <div
          style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}
          role="tablist"
          aria-label="Filter projects by category"
        >
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isActive}
                aria-controls="projects-grid"
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: "10px 22px",
                  border: isActive
                    ? "1.5px solid #2563eb"
                    : "1.5px solid rgba(255,255,255,0.2)",
                  background: isActive ? "#2563eb" : "transparent",
                  color: "#fff",
                  cursor: "pointer",
                  borderRadius: "6px",
                  fontSize: "14px",
                  fontWeight: 600,
                  fontFamily: "inherit",
                  transition: "all 0.2s ease",
                  outline: "none",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    (e.target as HTMLButtonElement).style.borderColor =
                      "rgba(255,255,255,0.5)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    (e.target as HTMLButtonElement).style.borderColor =
                      "rgba(255,255,255,0.2)";
                  }
                }}
                onFocus={(e) => {
                  (e.target as HTMLButtonElement).style.boxShadow =
                    "0 0 0 3px rgba(37,99,235,0.4)";
                }}
                onBlur={(e) => {
                  (e.target as HTMLButtonElement).style.boxShadow = "none";
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* GRID */}
      <section
        style={{ padding: "0 6% 100px" }}
        aria-label="Projects gallery"
      >
        {/* Live region to announce filter changes */}
        <div aria-live="polite" aria-atomic="true" className="sr-only" style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: 0,
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0,0,0,0)",
          whiteSpace: "nowrap",
          border: 0,
        }}>
          {`Showing ${filtered.length} project${filtered.length !== 1 ? "s" : ""} ${activeFilter !== "All" ? `in ${activeFilter}` : ""}`}
        </div>

        <motion.div
          id="projects-grid"
          role="tabpanel"
          layout
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(min(360px, 100%), 1fr))",
            gap: "20px",
          }}
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
                style={{
                  gridColumn: "1 / -1",
                  textAlign: "center",
                  padding: "60px 20px",
                  opacity: 0.5,
                  fontSize: "18px",
                }}
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