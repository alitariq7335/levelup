"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DesignService {
    icon: string;
    title: string;
    description: string;
    features: string[];
}

const Designexpertise: React.FC = () => {
    const designServices: DesignService[] = [
        {
            icon: "palette",
            title: "Brand Identity Design",
            description: "Complete visual systems that capture your brand essence",
            features: ["Logo Design", "Color Palette", "Typography System", "Brand Guidelines"]
        },
        {
            icon: "layout",
            title: "Marketing Materials",
            description: "Eye-catching designs that drive engagement and conversions",
            features: ["Social Media Graphics", "Ad Campaigns", "Brochures", "Presentations"]
        },
        {
            icon: "screen",
            title: "Digital Design",
            description: "Beautiful interfaces that prioritize user experience",
            features: ["UI/UX Design", "Web Graphics", "App Design", "Icon Design"]
        },
        {
            icon: "print",
            title: "Print Design",
            description: "Professional print materials that make lasting impressions",
            features: ["Business Cards", "Flyers", "Posters", "Packaging"]
        }
    ];

    const getIcon = (iconName: string) => {
        const icons: Record<string, React.ReactNode> = {
            palette: (
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            ),
            layout: (
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
                </svg>
            ),
            screen: (
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            print: (
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
            )
        };
        return icons[iconName] || icons.palette;
    };

    return (
        <section className="bg-black px-[5%] py-32">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    {/* <span className="text-blue-500 text-sm font-semibold tracking-[0.1em] uppercase mb-4 block">
                        What We Create
                    </span> */}
                    <h2 className="text-6xl md:text-7xl font-black text-white mb-6">
                        GRAPHIC <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">DESIGN</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Visual storytelling that captivates, communicates, and converts. We don't just design — we create experiences that resonate.
                    </p>
                </motion.div>

                {/* Design Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
                    {designServices.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e] rounded-3xl p-8 border border-blue-500/20 overflow-hidden hover:border-blue-500/50 transition-all duration-300"
                        >
                            {/* Background Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500" />

                            <div className="relative">
                                {/* Icon */}
                                <motion.div
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                    className="w-16 h-16 mb-6 text-blue-500"
                                >
                                    {getIcon(service.icon)}
                                </motion.div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-gray-500 text-sm">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Designexpertise;