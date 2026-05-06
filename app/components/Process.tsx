"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ApproachCard {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

const approachData: ApproachCard[] = [
  {
    icon: "discovery",
    title: "Consultation",
    description: "We understand your goals and challenges.",
    gradient: "from-blue-500 via-blue-600 to-purple-600",
  },
  {
    icon: "strategy",
    title: "Strategy",
    description: "Develop comprehensive roadmap with clear milestones, deliverables, and success metrics",
    gradient: "from-purple-500 via-pink-600 to-red-600",
  },
  {
    icon: "build",
    title: "Build",
    description: "Agile development sprints with continuous testing, feedback loops, and quality assurance",
    gradient: "from-red-500 via-orange-600 to-yellow-600",
  },
  {
    icon: "launch",
    title: "Launch",
    description: "Seamless deployment with monitoring, optimization, and immediate support for go-live",
    gradient: "from-green-500 via-emerald-600 to-teal-600",
  },
  {
    icon: "growth",
    title: "Growth",
    description: "Data-driven optimization, feature enhancement, and scaling for sustained success",
    gradient: "from-cyan-500 via-blue-600 to-indigo-600",
  }
];

const Process: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const getIcon = (iconName: string) => {
const icons: Record<string, React.ReactNode> = {
      discovery: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      strategy: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      build: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      launch: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      growth: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    };
    return icons[iconName] || icons.discovery;
  };

  return (
    <section className="relative bg-zinc-950 py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-0 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* <span className="text-blue-500 text-sm font-semibold tracking-[3px] uppercase mb-4 block">
            Our Methodology
          </span> */}
          <h2 className="text-6xl md:text-7xl font-black text-white mb-6">
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">PROCESS</span>
          </h2>

        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 gap-6 mb-16">
          {approachData.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setExpandedCard(expandedCard === index ? null : index)}
              className="group cursor-pointer"
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative h-[280px] rounded-2xl overflow-hidden"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-90`} />
                
                {/* Glass Effect Overlay */}
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

                {/* Content */}
                <div className="relative h-full p-8 flex flex-col">
                  {/* Step Number */}
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    <span className="text-2xl font-black text-white">{index + 1}</span>
                  </div>

                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 mb-6 text-white"
                    animate={{
                      rotate: hoveredCard === index ? 360 : 0,
                      scale: hoveredCard === index ? 1.1 : 1
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {getIcon(card.icon)}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-3xl font-black text-white mb-4 uppercase">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/90 text-sm leading-relaxed mb-6 flex-grow">
                    {card.description}
                  </p>
                </div>

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{
                    x: hoveredCard === index ? '200%' : '-100%',
                  }}
                  transition={{ duration: 1, ease: 'easeInOut' }}
                />

                {/* Border Glow */}
                <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/30 transition-all duration-300`} />
              </motion.div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;