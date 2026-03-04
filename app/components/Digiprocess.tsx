"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const developmentProcess = [
  {
    phase: "Research",
    duration: "1 week",
    desc: "Market analysis, competitor research, audience insights",
    icon: "◈",
    accent: "#3B82F6",
    tag: "PHASE 01",
  },
  {
    phase: "Strategy",
    duration: "1-2 weeks",
    desc: "Campaign planning, channel selection, goal setting",
    icon: "◇",
    accent: "#3B82F6",
    tag: "PHASE 02",
  },
  {
    phase: "Creation",
    duration: "2-3 weeks",
    desc: "Content creation, ad design, landing pages",
    icon: "⬡",
    accent: "#3B82F6",
    tag: "PHASE 03",
  },
  {
    phase: "Launch",
    duration: "3 weeks",
    desc: "Campaign deployment across all channels",
    icon: "◉",
    accent: "#3B82F6",
    tag: "PHASE 04",
  },
  {
    phase: "Optimize",
    duration: "Ongoing",
    desc: "A/B testing, performance monitoring, adjustments",
    icon: "▲",
    accent: "#3B82F6",
    tag: "PHASE 05",
  },
  {
    phase: "Report",
    duration: "Monthly",
    desc: "Analytics, insights, ROI reporting",
    icon: "◎",
    accent: "#3B82F6",
    tag: "PHASE 06",
  },
];

function PhaseCard({
  step,
  index,
}: {
  step: (typeof developmentProcess)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={`relative flex items-center gap-0 ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } flex-col`}
    >
      {/* Card */}
      <div className="flex-1 w-full lg:w-auto">
        <motion.div
          whileHover={{ scale: 1.015, y: -4 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={`relative group mx-auto max-w-lg ${isEven ? "lg:mr-0 lg:ml-auto" : "lg:ml-0 lg:mr-auto"}`}
          style={{ "--accent": step.accent } as React.CSSProperties}
        >
          {/* Glow behind card */}
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
            style={{ background: `${step.accent}18` }}
          />

          {/* Card border gradient */}
          <div
            className="absolute inset-0 rounded-2xl p-px"
            style={{
              background: `linear-gradient(135deg, ${step.accent}40, transparent 60%, ${step.accent}40)`,
            }}
          >
            <div className="w-full h-full rounded-2xl bg-[#060610]" />
          </div>

          {/* Card content */}
          <div className="relative p-8 rounded-2xl">
            {/* Tag + icon row */}
            <div className="flex items-center justify-between mb-6">
              <span
                className="text-[10px] font-bold tracking-[0.2em] px-3 py-1.5 rounded-full border"
                style={{
                  color: step.accent,
                  borderColor: `${step.accent}40`,
                  background: `${step.accent}0d`,
                }}
              >
                {step.tag}
              </span>
              <span
                className="text-3xl opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ color: step.accent }}
              >
                {step.icon}
              </span>
            </div>

            {/* Phase title */}
            <h4 className="text-2xl font-black text-white mb-1 tracking-tight">
              {step.phase}
            </h4>

            {/* Duration */}
            <div className="flex items-center gap-2 mb-4">
              <div
                className="h-px flex-1 max-w-[40px]"
                style={{ background: `${step.accent}60` }}
              />
              <span
                className="text-sm font-semibold tracking-wide"
                style={{ color: step.accent }}
              >
                {step.duration}
              </span>
            </div>

            {/* Desc */}
            <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>

            {/* Bottom bar */}
            <div
              className="absolute bottom-0 left-8 right-8 h-px opacity-20 group-hover:opacity-60 transition-opacity duration-500"
              style={{ background: `linear-gradient(90deg, transparent, ${step.accent}, transparent)` }}
            />
          </div>
        </motion.div>
      </div>

      {/* Center node */}
      <div className="relative z-10 flex-shrink-0 my-6 lg:my-0 mx-8">
        <motion.div
          initial={{ scale: 0, rotate: -30 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.08 + 0.2, ease: "backOut" }}
          className="relative"
        >
          {/* Pulsing ring */}
          <motion.div
            animate={{ scale: [1, 1.6], opacity: [0.4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: index * 0.3 }}
            className="absolute inset-0 rounded-full"
            style={{ background: step.accent }}
          />
          {/* Outer ring */}
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center border-2"
            style={{
              borderColor: `${step.accent}60`,
              background: `radial-gradient(circle, ${step.accent}20 0%, #060610 70%)`,
            }}
          >
            {/* Inner dot */}
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center"
              style={{ background: step.accent }}
            >
              <span className="text-[9px] font-black text-black">{index + 1}</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Spacer for opposite side */}
      <div className="flex-1 hidden lg:block" />
    </motion.div>
  );
}

export default function Digiprocess() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineScaleY = useSpring(
    useTransform(scrollYProgress, [0.05, 0.9], [0, 1]),
    { stiffness: 60, damping: 20 }
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-black px-[5%] py-32 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(96,165,250,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96,165,250,0.6) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient blobs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full opacity-[0.04] blur-3xl from-blue-400 to-indigo-600 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full opacity-[0.04] blur-3xl from-blue-400 to-indigo-600 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <h2 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tight">
            Our&nbsp;
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(135deg, #60A5FA 0%, #4F46E5 100%)",
              }}
            >
              Process
            </span>
          </h2>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-blue-500/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400/60" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-blue-500/40" />
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden lg:block"
               style={{ top: "2rem", bottom: "2rem" }}>
            {/* Static track */}
            <div className="w-px h-full bg-white/5" />
            {/* Animated fill */}
            <motion.div
              className="absolute top-18 left-0 w-px origin-top"
              style={{
                scaleY: lineScaleY,
                background: "linear-gradient(to bottom, #60a5fa, #818cf8, #38bdf8)",
                height: "100%",
              }}
            />
          </div>

          {/* Phase cards */}
          <div className="space-y-10 cursor-pointer">
            {developmentProcess.map((step, index) => (
              <PhaseCard key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}