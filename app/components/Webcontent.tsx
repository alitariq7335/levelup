"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PortfolioItem {
    title: string;
    category: string;
    image: string;
    color: string;
}



const webcontent: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string>("all");
    const [selectedWork, setSelectedWork] = useState<PortfolioItem | null>(null);

    const portfolioItems: PortfolioItem[] = [
        { title: "Brand Identity", category: "branding", image: "1", 
            color: "from-blue-500/20 to-blue-500/50" 
        },

        { title: "Logo Design", category: "branding", image: "2",
            color: "from-blue-500/20 to-blue-500/50"
         },

        { title: "Social Media", category: "marketing", image: "3", 
            color: "from-blue-500/20 to-blue-500/50"
         },
         
        { title: "Packaging", category: "print", image: "4", 
            color: "from-blue-500/20 to-blue-500/50"
         },

        { title: "UI/UX Design", category: "digital", image: "5", 
            color: "from-blue-500/20 to-blue-500/50"
         },

        { title: "Print Design", category: "print", image: "6", 
            color: "from-blue-500/20 to-blue-500/50"
         },
    ];

    const categories = [
        { id: "all", label: "All Work" },
        { id: "branding", label: "Branding" },
        { id: "digital", label: "Digital" },
        { id: "marketing", label: "Marketing" },
        { id: "print", label: "Print" }
    ];

    const filteredPortfolio = activeCategory === "all"
        ? portfolioItems
        : portfolioItems.filter(item => item.category === activeCategory);

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
        <section className="bg-zinc-950 py-32">
            <div className="max-w-7xl mx-auto">

                {/* Graphic design Showcase */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="text-center mb-12">
                        <h3 className="text-6xl md:text-7xl font-black text-white mb-6">
                            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Work</span>
                        </h3>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            A glimpse into our creative portfolio
                        </p>
                    </div>

                    {/* Category Filters */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-6 py-3 rounded-full font-semibold cursor-pointer text-sm uppercase tracking-wider transition-all duration-300 ${activeCategory === cat.id
                                        ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                                        : 'bg-[#1a1a2e] text-gray-400 hover:bg-[#252540] hover:text-white border border-blue-500/20'
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Graphic design Grid */}
                    <motion.div
                        layout
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredPortfolio.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.4 }}
                                    whileHover={{ y: -10 }}
                                    onClick={() => setSelectedWork(item)}
                                    className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
                                >
                                    {/* Gradient Background */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />

                                    {/* Content */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center h">
                                        <motion.div
                                            // initial={{ opacity: 0, y: 20 }}
                                            whileHover={{ opacity: 1, y: 0 }}
                                            className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                                        >
                                            <h4 className="text-3xl font-black text-white mb-2">
                                                {item.title}
                                            </h4>
                                            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-xs uppercase tracking-wider">
                                                {item.category}
                                            </span>
                                        </motion.div>
                                    </div>

                                    {/* Number Badge */}
                                    <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                                        <span className="text-white font-black text-lg">{index + 1}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default webcontent;