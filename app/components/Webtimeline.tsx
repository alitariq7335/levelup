"use client";
import React from 'react'
import { motion } from "framer-motion";

const developmentProcess = [
    { phase: "Planning", duration: "1-2 weeks", desc: "Requirements gathering and architecture design" },
    { phase: "Design", duration: "2-3 weeks", desc: "UI/UX design and prototyping" },
    { phase: "Development", duration: "6-12 weeks", desc: "Agile sprints with weekly updates" },
    { phase: "Testing", duration: "2-3 weeks", desc: "QA, bug fixes, and optimization" },
    { phase: "Deployment", duration: "1 week", desc: "Launch and monitoring" },
    { phase: "Support", duration: "30 days", desc: "Post-launch maintenance" }
];

export default function Webtimeline() {
    return (
        <section className="bg-black px-[5%] py-32">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-6xl md:text-7xl font-black text-white mb-20 text-center">
                        Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Timeline</span>
                    </h2>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div
                            className="absolute left-1/2 w-0.5 bg-gradient-to-b from-blue-400 to-indigo-600 hidden lg:block"
                            style={{ top: '4rem', bottom: '4rem'
                            }}
                        />

                        <div className="space-y-12">
                            {developmentProcess.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                                >
                                    {/* Content */}
                                    <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                                        <div className="bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e] rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/50 transition-all">
                                            <h4 className="text-2xl font-bold text-white mb-2">{step.phase}</h4>
                                            <p className="text-blue-400 font-semibold mb-3">{step.duration}</p>
                                            <p className="text-gray-400">{step.desc}</p>
                                        </div>
                                    </div>

                                    {/* Circle */}
                                    <div className="hidden lg:block relative z-10">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/50">
                                            <span className="text-white font-black text-xl">{index + 1}</span>
                                        </div>
                                    </div>

                                    {/* Spacer */}
                                    <div className="flex-1 hidden lg:block" />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    )
}
