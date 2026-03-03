"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = ["Technologies", "Frame Works", "Business Areas", "Our Experts"];

const technologies = [
  { name: "Flutter", icon: "/assets/tech/tech-tab/flutter.svg" },
  { name: "iOS", icon: "/assets/tech/Tech-tab/ios.svg" },
  { name: "Android", icon: "/assets/tech/tech-tab/android.svg" },
  { name: "HTML", icon: "/assets/tech/Tech-tab/html.svg" },
  { name: "CSS", icon: "/assets/tech/tech-tab/css.svg" },
  { name: "Bootstrap", icon: "/assets/tech/tech-tab/bootstrap.svg" },
  { name: "Shopify", icon: "/assets/tech/tech-tab/shopify.svg" },
  { name: "WordPress", icon: "/assets/tech/tech-tab/wordpress.svg" },
  { name: "React.js", icon: "/assets/tech/tech-tab/react.svg" },
  { name: "Node.js", icon: "/assets/tech/tech-tab/node.svg" },
  { name: "Java", icon: "/assets/tech/tech-tab/java.svg" },
  { name: "Wix", icon: "/assets/tech/tech-tab/wix.svg" },
  { name: "MySQL", icon: "/assets/tech/tech-tab/php.svg" },
  { name: "Python", icon: "/assets/tech/tech-tab/python.svg" },
];

const frameworks = [
  { name: "Vue.js", icon: "/assets/tech/frame-tab/vue.svg" },
  { name: "Angular JS", icon: "/assets/tech/frame-tab/angular.svg" },
  { name: "Laravel", icon: "/assets/tech/frame-tab/laravel.svg" },
  { name: "Django", icon: "/assets/tech/frame-tab/django.svg" },
  { name: "React Native", icon: "/assets/tech/frame-tab/react.svg" },
  { name: ".Net", icon: "/assets/tech/frame-tab/net.svg" },
  { name: "Ruby on Rails", icon: "/assets/tech/frame-tab/ruby.svg" },
  { name: "Node.js", icon: "/assets/tech/frame-tab/node.svg" },
  { name: "WordPress", icon: "/assets/tech/frame-tab/wordpress.svg" },
];

const businessAreas = [
  { name: "NFT", icon: "/assets/tech/business-tab/nft.svg" },
  { name: "Education", icon: "/assets/tech/business-tab/edu.svg" },
  { name: "E-commerce", icon: "/assets/tech/business-tab/e-com.svg" },
  { name: "Fintech", icon: "/assets/tech/business-tab/fintech.svg" },
  { name: "HealthCare", icon: "/assets/tech/business-tab/health.svg" },
  { name: "Tour & Travel", icon: "/assets/tech/business-tab/travel.svg" },
  { name: "Food & Drinks", icon: "/assets/tech/business-tab/drinks.svg" },
  { name: "Robotics", icon: "/assets/tech/business-tab/robo.svg" },
  { name: "Beauty", icon: "/assets/tech/business-tab/beauty.svg" },
  { name: "Home Services", icon: "/assets/tech/business-tab/h-service.svg" },
  { name: "Industrial Automation", icon: "/assets/tech/business-tab/industry.svg" },
  { name: "Transport", icon: "/assets/tech/business-tab/transport.svg" },
];

const experts = [
  { name: "Flutter Developers", icon: "/assets/tech/experts-tab/flutter.svg" },
  { name: "Product Designers", icon: "/assets/tech/experts-tab/product.svg" },
  { name: "Android Developers", icon: "/assets/tech/experts-tab/android.svg" },
  { name: "IOS Developers", icon: "/assets/tech/experts-tab/ios.svg" },
  { name: "Frontend Developers", icon: "/assets/tech/experts-tab/frontend.svg" },
  { name: "SQA Experts", icon: "/assets/tech/experts-tab/sqa.svg" },
  { name: "SEO Experts", icon: "/assets/tech/experts-tab/seo.svg" },
  { name: "Business Analysts", icon: "/assets/tech/experts-tab/analyst.svg" },
  { name: "Project Managers", icon: "/assets/tech/experts-tab/manager.svg" },
  { name: "Data Analysts", icon: "/assets/tech/experts-tab/data.svg" },
];

export default function Technologies() {
  const [activeTab, setActiveTab] = useState(0);

  const dataSets = [technologies, frameworks, businessAreas, experts];

  return (
    <section className="bg-black py-24 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none"
        >
          Choose the tech stack for your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
            next business idea
          </span>
        </motion.h2>

        {/* Tabs */}
        <div className="flex justify-center py-16">
          <div className="flex border border-white/20 rounded-full overflow-hidden bg-[#111]">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 text-sm font-semibold transition-all duration-300
                  ${
                    activeTab === index
                      ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
                      : "text-gray-400 hover:bg-white/10"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {dataSets[activeTab].map((item, index) => (
              <motion.div
                key={`${item.name}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e]
                           rounded-2xl p-6 border border-blue-500/20
                           hover:border-blue-500/50 transition-all
                           text-center group"
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-14 h-14 mx-auto mb-4 object-contain
                             group-hover:scale-110 transition-transform duration-300"
                />
                <h4 className="text-white font-bold text-sm">
                  {item.name}
                </h4>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
