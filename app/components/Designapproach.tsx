"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ApproachCard {
  icon: string;
  title: string;
  description: string;
  gradient: string;
  details: string[];
  timeline: string;
}

const approachData: ApproachCard[] = [
  {
    icon: "discovery",
    title: "Discovery",
    description: "Deep dive into your business goals, challenges, and opportunities to create a strategic foundation",
    gradient: "from-blue-500 via-blue-600 to-purple-600",
    timeline: "Week 1-2",
    details: [
      "Stakeholder interviews & workshops",
      "Competitive landscape analysis",
      "User research & personas",
      "Technical requirements gathering"
    ]
  },
  {
    icon: "strategy",
    title: "Strategy",
    description: "Develop comprehensive roadmap with clear milestones, deliverables, and success metrics",
    gradient: "from-purple-500 via-pink-600 to-red-600",
    timeline: "Week 2-3",
    details: [
      "Strategic planning & architecture",
      "UX/UI design system creation",
      "Technology stack selection",
      "Resource allocation & timeline"
    ]
  },
  {
    icon: "build",
    title: "Build",
    description: "Agile development sprints with continuous testing, feedback loops, and quality assurance",
    gradient: "from-red-500 via-orange-600 to-yellow-600",
    timeline: "Week 4-12",
    details: [
      "Iterative development cycles",
      "Real-time collaboration & updates",
      "Automated testing & QA",
      "Performance optimization"
    ]
  },
  {
    icon: "launch",
    title: "Launch",
    description: "Seamless deployment with monitoring, optimization, and immediate support for go-live",
    gradient: "from-green-500 via-emerald-600 to-teal-600",
    timeline: "Week 12-14",
    details: [
      "Deployment & infrastructure setup",
      "Launch strategy execution",
      "Performance monitoring",
      "Initial user feedback collection"
    ]
  },
  {
    icon: "growth",
    title: "Growth",
    description: "Data-driven optimization, feature enhancement, and scaling for sustained success",
    gradient: "from-cyan-500 via-blue-600 to-indigo-600",
    timeline: "Ongoing",
    details: [
      "Analytics & insights tracking",
      "Continuous improvement cycles",
      "Feature expansion roadmap",
      "Long-term partnership & support"
    ]
  }
];

const Designapproach: React.FC = () => {
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
    <section className="relative bg-black py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
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
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">APPROACH</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A proven 5-phase methodology that transforms vision into reality
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
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
                className="relative h-[380px] rounded-2xl overflow-hidden"
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

                  {/* Timeline Badge */}
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 self-start">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-white text-xs font-semibold uppercase tracking-wider">
                      {card.timeline}
                    </span>
                  </div>

                  {/* Expand Indicator */}
                  <motion.div
                    className="absolute bottom-8 right-2 -translate-x-1/2"
                    animate={{ 
                      y: hoveredCard === index ? [0, -5, 0] : 0,
                      opacity: hoveredCard === index ? 1 : 0.6
                    }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </motion.div>
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

              {/* Expanded Details */}
              <AnimatePresence>
                {expandedCard === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e] rounded-2xl border border-blue-500/20 p-6 shadow-2xl">
                      <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <div className={`w-1 h-6 rounded-full bg-gradient-to-b ${card.gradient}`} />
                        Key Deliverables
                      </h4>
                      <ul className="space-y-3">
                        {card.details.map((detail, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200"
                          >
                            <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${card.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-gray-300 text-sm leading-relaxed">{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Designapproach;