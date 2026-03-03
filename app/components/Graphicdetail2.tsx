"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Graphicdetail2: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const designOfferings = [
    {
      title: "Brand Identity",
      subtitle: "Complete Visual Systems",
      items: ["Logo Design", "Brand Guidelines", "Color Systems", "Typography"],
      gradient: "from-violet-600 via-purple-600 to-fuchsia-600",
      size: "large" // Takes 2 columns
    },
    {
      title: "Print Design",
      subtitle: "Tangible Impressions",
      items: ["Business Cards", "Brochures", "Packaging", "Posters"],
      gradient: "from-cyan-500 via-blue-500 to-indigo-600",
      size: "medium"
    },
    {
      title: "Digital Assets",
      subtitle: "Screen Excellence",
      items: ["Social Media", "Web Graphics", "Email Templates", "Banners"],
      gradient: "from-pink-500 via-red-500 to-orange-500",
      size: "medium"
    },
    {
      title: "UI/UX",
      subtitle: "Interface Mastery",
      items: ["App Design", "Web Design", "Prototyping", "User Testing"],
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      size: "large"
    },
    {
      title: "Marketing",
      subtitle: "Campaign Visuals",
      items: ["Ad Creatives", "Infographics", "Presentations", "Pitch Decks"],
      gradient: "from-amber-500 via-orange-500 to-red-500",
      size: "medium"
    },
    {
      title: "Illustration",
      subtitle: "Custom Artwork",
      items: ["Vector Art", "Character Design", "Icons", "Patterns"],
      gradient: "from-rose-500 via-pink-500 to-purple-500",
      size: "medium"
    }
  ];

  const designProcess = [
    { step: "01", title: "Brief", desc: "Understanding your vision and requirements" },
    { step: "02", title: "Research", desc: "Market analysis and creative exploration" },
    { step: "03", title: "Concept", desc: "Initial design concepts and mood boards" },
    { step: "04", title: "Design", desc: "Crafting the perfect visual solution" },
    { step: "05", title: "Refine", desc: "Iterations based on your feedback" },
    { step: "06", title: "Deliver", desc: "Final files in all required formats" }
  ];

  const stats = [
    { value: "500+", label: "Designs Created", icon: "🎨" },
    { value: "200+", label: "Happy Clients", icon: "😊" },
    { value: "50+", label: "Brands Built", icon: "🏆" },
    { value: "4.9/5", label: "Average Rating", icon: "⭐" }
  ];

  return (
    <section className="bg-[#0a0a0a] px-[5%] py-32">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Header with Stats */}
        <div className="grid lg:grid-cols-2 gap-16 mb-32">
          {/* Left - Title & Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-500 text-sm font-semibold tracking-[3px] uppercase mb-4 block">
              Creative Excellence
            </span>
            <h2 className="text-6xl md:text-7xl font-black text-white mb-8 leading-tight">
              DESIGN THAT
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                SPEAKS
              </span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              Every pixel crafted with purpose. Every color chosen with intention. 
              We don't just create designs — we craft visual stories that connect, 
              inspire, and convert.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-bold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-1">
                View Portfolio
              </button>
              <button className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-all duration-300">
                Start Project
              </button>
            </div>
          </motion.div>

          {/* Right - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e] rounded-3xl p-8 border border-blue-500/20 hover:border-blue-500/50 transition-all"
              >
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bento Grid - Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h3 className="text-4xl font-black text-white mb-12 text-center">
            Our <span className="text-blue-500">Design Services</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {designOfferings.map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                className={`group relative rounded-3xl overflow-hidden ${
                  offering.size === 'large' ? 'lg:col-span-2' : 'col-span-1'
                } ${offering.size === 'large' ? 'lg:row-span-1' : 'row-span-1'}`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${offering.gradient} opacity-90`} />
                
                {/* Overlay Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                  }} />
                </div>

                {/* Content */}
                <div className="relative h-full p-10 flex flex-col justify-between min-h-[320px]">
                  <div>
                    <motion.div
                      animate={{
                        scale: hoveredService === index ? 1.1 : 1,
                        rotate: hoveredService === index ? 5 : 0
                      }}
                      className="inline-block text-6xl mb-6 filter drop-shadow-lg"
                    >
                      {index === 0 ? '🎨' : index === 1 ? '🖨️' : index === 2 ? '📱' : index === 3 ? '✨' : index === 4 ? '📊' : '🎭'}
                    </motion.div>
                    
                    <h4 className="text-4xl md:text-5xl font-black text-white mb-2">
                      {offering.title}
                    </h4>
                    <p className="text-white/80 text-lg mb-6">{offering.subtitle}</p>
                  </div>

                  {/* Items List */}
                  <div className="grid grid-cols-2 gap-3">
                    {offering.items.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 text-white text-sm font-semibold border border-white/20"
                      >
                        {item}
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover Arrow */}
                  <motion.div
                    animate={{
                      x: hoveredService === index ? 10 : 0,
                      opacity: hoveredService === index ? 1 : 0
                    }}
                    className="absolute bottom-10 right-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Design Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h3 className="text-4xl font-black text-white mb-4 text-center">
            Our <span className="text-purple-500">Creative Process</span>
          </h3>
          <p className="text-gray-400 text-center mb-16 text-lg">
            From concept to completion in 6 strategic steps
          </p>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hidden lg:block" />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {designProcess.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="relative"
                >
                  {/* Step Number Circle */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center border-4 border-[#0a0a0a] shadow-2xl shadow-blue-500/50">
                      <span className="text-3xl font-black text-white">{phase.step}</span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e] rounded-2xl p-6 border border-blue-500/20 text-center">
                    <h4 className="text-2xl font-bold text-white mb-2">{phase.title}</h4>
                    <p className="text-gray-400 text-sm">{phase.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-12 border border-blue-500/20"
        >
          <h3 className="text-4xl font-black text-white mb-12 text-center">
            Why Choose <span className="text-blue-500">Our Design Team</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Award-Winning Designs",
                desc: "Recognized by industry leaders for creative excellence",
                icon: "🏆"
              },
              {
                title: "Fast Turnaround",
                desc: "Quick iterations without compromising on quality",
                icon: "⚡"
              },
              {
                title: "Unlimited Revisions",
                desc: "We work until you're 100% satisfied with the result",
                icon: "🔄"
              },
              {
                title: "Transparent Pricing",
                desc: "No hidden costs, clear packages for every budget",
                icon: "💎"
              },
              {
                title: "Dedicated Designer",
                desc: "Your personal designer from start to finish",
                icon: "👨‍🎨"
              },
              {
                title: "Commercial Rights",
                desc: "Full ownership and usage rights included",
                icon: "📜"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-[#0a0a0a]/50 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-blue-500/30 transition-all"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h4 className="text-xl font-bold text-white mb-2">{benefit.title}</h4>
                <p className="text-gray-400 text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Graphicdetail2;