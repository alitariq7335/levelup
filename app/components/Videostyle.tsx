"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Videostyle: React.FC = () => {
    const [activeStyle, setActiveStyle] = useState<string>("cinematic");

    const editingStyles = {
        cinematic: {
            title: "Cinematic",
            desc: "Film-grade color grading and storytelling",
            features: ["Color Grading", "Smooth Transitions", "Sound Design", "VFX"],
            gradient: "from-blue-500/20 to-blue-500/50",
            icon: "🎬"
        },
        dynamic: {
            title: "Dynamic",
            desc: "Fast-paced cuts with energy and motion",
            features: ["Quick Cuts", "Motion Graphics", "Beat Sync", "Trendy Effects"],
            gradient: "from-blue-500/20 to-blue-500/50",
            icon: "⚡"
        },
        corporate: {
            title: "Corporate",
            desc: "Professional and polished business content",
            features: ["Clean Editing", "Lower Thirds", "Logo Animation", "Professional"],
            gradient: "from-blue-500/20 to-blue-500/50",
            icon: "💼"
        },
        social: {
            title: "Social Media",
            desc: "Optimized for Instagram, TikTok, YouTube",
            features: ["Vertical Format", "Captions", "Trending Audio", "Hooks"],
            gradient: "from-blue-500/20 to-blue-500/50",
            icon: "📱"
        }
    };

    return (
        <section className="bg-black px-[5%] py-32">
            <div className="max-w-7xl mx-auto">


                {/* Editing Styles */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-24 text-center">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Editing Styles</span>
                    </h3>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(editingStyles).map(([key, style]) => (
                            <motion.button
                                key={key}
                                onClick={() => setActiveStyle(key)}
                                whileHover={{ y: -10 }}
                                whileTap={{ scale: 0.95 }}
                                className={`relative overflow-hidden rounded-3xl p-8 text-left transition-all duration-300 cursor-pointer ${activeStyle === key ? 'ring-1 border-blue-500/30' : ''
                                    }`}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${style.gradient} opacity-90`} />

                                <div className="relative">
                                    <div className="text-6xl mb-4">{style.icon}</div>
                                    <h4 className="text-2xl font-bold text-white mb-2">{style.title}</h4>
                                    <p className="text-white/80 text-sm">{style.desc}</p>
                                </div>
                            </motion.button>
                        ))}
                    </div>

                </motion.div>

            </div>
        </section>
    );
};

export default Videostyle;
