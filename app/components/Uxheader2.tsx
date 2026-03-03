"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Uxheader2: React.FC = () => {

  const stats = [
    { value: "500+", label: "Designs Created",
      //  icon: "🎨"
       },
    { value: "200+", label: "Happy Clients",
      //  icon: "😊"
       },
    { value: "50+", label: "Brands Built",
      //  icon: "🏆"
       },
    { value: "4.9/5", label: "Average Rating",
      //  icon: "⭐"
       }
  ];

  return (
    <section className="t-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 border-b border-white/5 relative overflow-hidden bg-black">
            <div className="absolute top-0 right-0 w-[500px] sm:w-[600px] md:w-[800px] h-[500px] sm:h-[600px] md:h-[800px] bg-blue-600/5 blur-[120px] md:blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="max-w-[1600px] mx-auto">
        
        {/* Header with Stats */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Title & Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 border border-blue-500/30 rounded-full bg-blue-500/10 text-blue-400 text-[8px] sm:text-[10px] font-black tracking-[0.1em] sm:tracking-[0.2em] uppercase">
              Design Excellence
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[10rem] font-black tracking-tighter uppercase leading-[0.85] sm:leading-[0.8] mb-8 sm:mb-10 md:mb-12 text-white">
              UI / UX
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
                DESIGN
              </span>
            </h2>
            <p className="max-w-full sm:max-w-xl md:max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 font-light leading-relaxed border-l-2 md:border-l-4 border-blue-600 pl-4 sm:pl-6 md:pl-8">
              Crafting intuitive experiences that users love. We blend aesthetics with functionality 
            to create interfaces that are both beautiful and easy to use.
            </p>
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

      </div>
    </section>
  );
};

export default Uxheader2;