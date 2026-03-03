"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
// import Digigrowth from "./Digigrowth";

const Digigrowth: React.FC = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const projectTypes = [
        {
            title: "Brand Awareness",
            desc: "Get your brand in front of more people",
            tactics: ["Social Media", "Content Marketing", "Influencer Partnerships", "PR"],
            gradient: "from-blue-500/20 to-blue-500/50",
            accentColor: "bg-blue-500",
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            )
        },
        {
            title: "Lead Generation",
            desc: "Capture qualified leads for your business",
            tactics: ["Landing Pages", "Lead Magnets", "PPC Campaigns", "Email Funnels"],
            gradient: "from-blue-500/20 to-blue-500/50",
            accentColor: "bg-purple-500",
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M3 4h18l-7 8v6l-4 2v-8L3 4z" />
                </svg>
            )
        },
        {
            title: "Customer Acquisition",
            desc: "Turn prospects into paying customers",
            tactics: ["Sales Funnels", "Retargeting", "Email Nurture", "CRO"],
            gradient: "from-blue-500/20 to-blue-500/50",
            accentColor: "bg-orange-500",
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 9a3 3 0 11-6 0 3 3 0 016 0zM6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2M17 10h12M20 7v6"
                    />
                </svg>
            )
        },
        {
            title: "Brand Loyalty",
            desc: "Keep customers coming back for more",
            tactics: ["Email Marketing", "Loyalty Programs", "Community Building", "Content"],
            gradient: "from-blue-500/20 to-blue-500/50",
            accentColor: "bg-emerald-500",
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3 7 7 1-5 5 1 7-6-4-6 4 1-7-5-5 7-1 3-7z"/>
                </svg>
            )
        }
    ];

    return (
        <section className="bg-zinc-950 px-[5%] py-24">
            <div className="max-w-7xl mx-auto text-center">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                     <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6 text-center">
            Growth <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Strategies</span>
          </h3>
          <p className="text-gray-400 text-center mb-12 text-lg">
            Tailored strategies based on your business goals
          </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 gap-12">
                    {projectTypes.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                            className="group relative"
                        >
                            <div
                                className={`relative rounded-2xl p-8 border-2 border-transparent bg-gradient-to-br ${project.gradient} hover:border-opacity-100 transition-all duration-500 shadow-lg cursor-pointer`}
                            >
                                <div className="flex items-start gap-6 mb-6">
                                    <motion.div
                                        animate={{ scale: hoveredCard === index ? 1.1 : 1 }}
                                        transition={{ duration: 0.3 }}
                                        className={`w-16 h-16 ${project.accentColor} rounded-xl flex items-center justify-center shadow-lg`}
                                    >
                                        {project.icon}
                                    </motion.div>

                                    <div className="flex-1 text-left">
                                        <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                                        <p className="text-gray-300 text-sm md:text-base">{project.desc}</p>
                                    </div>
                                </div>

                                {/* tactics */}
                                <div className="space-y-2 mb-4">
                                    {project.tactics.map((feature, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -15 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 + idx * 0.05 }}
                                            className="flex items-center gap-3"
                                        >
                                            <div className={`w-2 h-2 ${project.accentColor} rounded-full`} />
                                            <span className="text-gray-200 text-sm md:text-base">{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Learn More */}
                                <motion.div
                                    animate={{ x: hoveredCard === index ? 5 : 0 }}
                                    className="flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all duration-300 cursor-pointer"
                                >
                                    <span>Learn More</span>
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Digigrowth;
