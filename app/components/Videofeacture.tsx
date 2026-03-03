"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Videofeacture: React.FC = () => {
  const appTypes = [
    {
      title: "YouTube Videos",
      desc: "Long-form content that keeps viewers engaged",
      features: ["Intro/Outro", "Thumbnails", "B-Roll", "Sound Mixing"],
      gradient: "from-blue-500/20 to-blue-500/50",
      icon: "/assets/svg/youtube.svg",
    },
    {
      title: "Social Media",
      desc: "Scroll-stopping content for all platforms",
      features: ["Reels", "TikToks", "Stories", "Ads"],
      gradient: "from-blue-500/20 to-blue-500/50",
      icon: "/assets/svg/social-media.svg",
    },
    {
      title: "Corporate Videos",
      desc: "Professional content for your business",
      features: ["Promos", "Testimonials", "Explainers", "Training"],
      gradient: "from-blue-500/20 to-blue-500/50",
      icon: "/assets/svg/corporate-video.svg",
    },
    {
      title: "Events & Weddings",
      desc: "Beautiful memories captured forever",
      features: ["Highlights", "Full Edit", "Same Day Edit", "Drone Footage"],
      gradient: "from-blue-500/20 to-blue-500/50",
      icon: "/assets/svg/calendar.svg",
    },
    {
      title: "Music Videos",
      desc: "Creative visuals that match the vibe",
      features: ["Lyric Videos", "Performance", "Narrative", "VFX"],
      gradient: "from-blue-500/20 to-blue-500/50",
      icon: "/assets/svg/music-video.svg",
    },
    {
      title: "Podcasts",
      desc: "Engaging video podcasts with pro editing",
      features: ["Multi-cam", "Graphics", "Clips", "Audiograms"],
      gradient: "from-blue-500/20 to-blue-500/50",
      icon: "/assets/svg/podcast.svg",
    },
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
            Content We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
              Edit
            </span>
          </h3>

          <p className="text-gray-400 mb-12 text-lg">
            From vlogs to commercials, we do it all
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {appTypes.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-3xl cursor-pointer"
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${app.gradient} opacity-90`}
                />

                {/* Content */}
                <div className="relative p-8">
                  {/* Icon */}
                  <div className="mb-4 flex justify-center md:justify-start">
                    <Image
                      src={app.icon}
                      alt={app.title}
                      width={56}
                      height={56}
                      className="object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h4 className="text-2xl font-black text-white mb-4 text-center md:text-start">
                    {app.title}
                  </h4>

                  {/* Description */}
                  <p className="text-white/90 text-sm mb-4 text-start">
                    {app.desc}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {app.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-white/90 text-sm"
                      >
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

export default Videofeacture;