"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Appfeactures: React.FC = () => {

  const appTypes = [
    {
      title: "E-Commerce Apps",
      features: ["Product Catalog", "Secure Payments", "Order Tracking", "Push Notifications"],
      gradient: "from-blue-500/20 to-blue-500/50",
      icon: "/assets/svg/e-commerce.svg"
    },
    {
      title: "Social Networks",
      features: ["User Profiles", "Real-time Chat", "Media Sharing", "Feed System"],
      gradient: "from-blue-500/20 to-blue-500/50",
      icon: "/assets/svg/social-network.svg"
    },
    {
      title: "On-Demand Services",
      features: ["GPS Tracking", "Booking System", "Payment Integration", "Ratings & Reviews"],
      gradient: "from-blue-500/20 to-blue-500/50",
      icon: "/assets/svg/on-demand.svg"
    },
    {
      title: "Fitness & Health",
      features: ["Activity Tracking", "Goal Setting", "Wearable Integration", "Analytics"],
      gradient: "from-blue-500/20 to-blue-500/50",
      icon: "/assets/svg/fitness.svg"
    },
    {
      title: "Education Apps",
      features: ["Course Management", "Video Lessons", "Progress Tracking", "Quizzes"],
      gradient: "from-blue-500/20 to-blue-500/50",
      icon: "/assets/svg/education.svg"
    },
    {
      title: "Finance Apps",
      features: ["Transaction History", "Budget Planning", "Investment Tracking", "Security"],
      gradient: "from-blue-500/20 to-blue-500/50",
      icon: "/assets/svg/finance.svg"
    }
  ];


  return (
       <section className="bg-black px-[5%] py-32">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
            Apps We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Create</span>
          </h3>
          <p className="text-gray-400 text-center mb-12 text-lg">
            From simple utilities to complex social platforms
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {appTypes.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-3xl cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${app.gradient} opacity-90`} />
                
                <div className="relative p-8">
                  <div className="text-center md:text-start mb-4">
                    <img src={app.icon} alt={app.title} className="w-12 h-12 mx-auto md:mx-0" />
                  </div>
                  <h4 className="text-2xl font-black text-white mb-4 text-center md:text-start">{app.title}</h4>
                  
                  <div className="space-y-2">
                    {app.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-white/90 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        {feature}
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

export default Appfeactures;
