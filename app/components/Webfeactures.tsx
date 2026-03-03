"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Webfeactures: React.FC = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const projectTypes = [
        {
            title: "E-Commerce Platforms",
            desc: "Full-featured online stores with seamless payment integration and inventory management",
            features: ["Shopping Cart", "Payment Gateway", "Inventory Management", "Order Tracking"],
            gradient: "from-blue-500/20 to-blue-500/50",
            accentColor: "bg-blue-500",
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            )
        },
        {
            title: "SaaS Applications",
            desc: "Scalable cloud-based solutions with robust authentication and subscription systems",
            features: ["User Authentication", "Subscription Billing", "Admin Dashboard", "API Integration"],
            gradient: "from-blue-500/20 to-blue-500/50",
            accentColor: "bg-purple-500",
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            )
        },
        {
            title: "Corporate Websites",
            desc: "Professional business presence with SEO optimization and analytics integration",
            features: ["CMS Integration", "SEO Optimization", "Contact Forms", "Analytics"],
            gradient: "from-blue-500/20 to-blue-500/50",
            accentColor: "bg-orange-500",
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            )
        },
        {
            title: "Web Portals",
            desc: "Complex multi-user platforms with role management and real-time capabilities",
            features: ["User Roles", "Real-time Updates", "File Management", "Notifications"],
            gradient: "from-blue-500/20 to-blue-500/50",
            accentColor: "bg-emerald-500",
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
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
                    {/* <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 border border-blue-500/30 rounded-full bg-blue-500/10 text-blue-400 text-[8px] sm:text-[10px] font-black tracking-[0.1em] sm:tracking-[0.2em] uppercase">
                        Our Services
                    </span> */}
                    <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
                        What{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
                            We Build
                        </span>
                    </h3>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        From simple websites to complex web applications, we deliver solutions tailored to your business needs
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

                                {/* Features */}
                                <div className="space-y-2 mb-4">
                                    {project.features.map((feature, idx) => (
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

export default Webfeactures;
