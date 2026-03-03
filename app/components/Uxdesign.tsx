"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Uxdesign: React.FC = () => {

  const appTypes = [
    {
      title: "Web Design",
      desc: "Beautiful and functional website interfaces",
      deliverables: ["Wireframes", "High-fidelity Mockups", "Prototypes", "Design System"],
      gradient: "from-blue-500/20 to-blue-500/50",
      icon: "/assets/svg/web-design.svg",
    },
    {
      title: "Mobile App Design",
      desc: "Intuitive iOS and Android app interfaces",
      deliverables: ["User Flows", "UI Screens", "Interactive Prototypes", "App Icons"],
      gradient: "from-blue-500/20 to-blue-500/50",
      icon: "/assets/svg/mobile-app.svg",
    },
    {
      title: "Dashboard & SaaS",
      desc: "Complex data visualization and admin panels",
      deliverables: ["Information Architecture", "Data Viz", "Admin Interfaces", "User Roles"],
      gradient: "from-blue-500/20 to-blue-500/50",
      icon: ("/assets/svg/dashboard.svg"),
    },
    {
      title: "E-Commerce",
      desc: "Shopping experiences that convert",
      deliverables: ["Product Pages", "Cart Flow", "Checkout UX", "Mobile Commerce"],
      gradient: "from-blue-500/20 to-blue-500/50",
      icon: "/assets/svg/e-commerce.svg",
    }
  ];

  return (
    <section className="bg-black px-[5%] py-32">
      <div className="max-w-7xl mx-auto text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-none mb-20">
            What We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
              Design
            </span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {appTypes.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${app.gradient} opacity-90`} />

                {/* Content */}
                <div className="relative p-8 text-left">
                  
                  {/* Icon */}
                  <div className="mb-6">
                    <Image
                      src={app.icon}
                      alt={app.title}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>

                  <h4 className="text-3xl font-black text-white mb-4">
                    {app.title}
                  </h4>

                  <p className="text-white/80 text-sm mb-6">
                    {app.desc}
                  </p>

                  <div className="space-y-2">
                    {app.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-white/90 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        {item}
                      </div>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Uxdesign;