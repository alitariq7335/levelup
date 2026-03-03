"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Digitools: React.FC = () => {

  const marketingTools = [
    { name: "Google Analytics", category: "Analytics",
      //  icon: "📊"
       },
    { name: "Meta Business", category: "Social Ads",
      //  icon: "👥" 
      },
    { name: "HubSpot", category: "CRM & Email",
      //  icon: "📬"
       },
    { name: "Semrush", category: "SEO",
      //  icon: "🔍"
       },
    { name: "Mailchimp", category: "Email",
      //  icon: "📧"
       },
    { name: "Hootsuite", category: "Social Media",
      //  icon: "🐦"
       },
    { name: "Google Ads", category: "PPC",
      //  icon: "💰"
       },
    { name: "Canva Pro", category: "Design",
      //  icon: "🎨"
       }
  ];

  return (
    <section className="bg-black px-[5%] py-32">
      <div className="max-w-7xl mx-auto">
        {/* Marketing Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-24 text-center">
            Tools We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Master</span>
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {marketingTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{scale: 1.03 }}
                className="bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e] rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/50 transition-all text-center cursor-pointer"
              >
                <div className="text-5xl mb-4">{tool.icon}</div>
                <h4 className="text-white font-bold mb-1">{tool.name}</h4>
                <p className="text-gray-500 text-xs">{tool.category}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default Digitools;
