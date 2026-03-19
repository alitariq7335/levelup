"use client";
import { useState, useEffect } from "react";
import Link from 'next/link';
import { motion } from "framer-motion";

/* ── MAIN COMPONENT ── */
export default function Portcta() {
  const [cursorActive, setCursorActive] = useState<boolean>(false);
  const [curPos, setCurPos] = useState<{ x: number; y: number }>({ x: -200, y: -200 });

  useEffect(() => {
    const h = (e: MouseEvent) => setCurPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 relative z-10 bg-[#060606] text-white overflow-x-hidden">
      {/* ── CTA ── */}
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-[80px] border-t border-white/5">
        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-[60px] items-center">

          {/* Background Gradient */}
          <div className="absolute -bottom-32 sm:-bottom-40 md:-bottom-48 lg:-bottom-[200px] left-1/2 -translate-x-1/2 w-[500px] sm:w-[600px] md:w-[700px] h-[280px] sm:h-[330px] md:h-[380px] rounded-full bg-[radial-gradient(ellipse,rgba(37,99,235,0.08)_0%,transparent_65%)] pointer-events-none" />

          {/* Left Column - Heading */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tighter mb-8 sm:mb-5 md:mb-12 text-white">
              YOUR<br />
              PROJECT<br />
              <span className="text-white/20">
                COULD
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">LIVE HERE.</span>
            </h2>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            {/* Description */}
            <p className="max-w-full sm:max-w-xl md:max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 font-light leading-relaxed mb-8">
              We don't take on every client. We take on the right ones — founders and brands who understand that digital is a weapon, not a decoration.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-3 mb-6 sm:mb-7 md:mb-8 lg:mb-8 justify-center lg:justify-start">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link href="/contact"
                  onMouseEnter={() => setCursorActive(true)}
                  onMouseLeave={() => setCursorActive(false)}
                  className="flex items-center justify-center px-6 sm:px-8 lg:px-[34px] py-3 sm:py-[15px] font-bold bg-[#2563eb] rounded-md text-xs sm:text-sm uppercase tracking-[0.1em] text-white w-full sm:w-auto transition-all"
                >
                  SCHEDULE A CALL
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link href="/services"
                  onMouseEnter={() => setCursorActive(true)}
                  onMouseLeave={() => setCursorActive(false)}
                  className="flex items-center justify-center px-6 sm:px-8 lg:px-[34px] py-3 sm:py-[15px] font-bold bg-transparent border border-white/12 hover:border-[#2563eb] rounded-md text-xs sm:text-sm uppercase tracking-[0.2em] text-white/38 w-full sm:w-auto transition-all"
                >
                  OUR SERVICES
                </Link>
              </motion.div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 sm:gap-[9px] justify-center lg:justify-start">
              {["Lahore-Based 🇵🇰", "Global Clients", "Rapid Delivery"].map((tag: string) => (
                <span
                  key={tag}
                  className="text-[10px] sm:text-[11px] text-white/50 tracking-[0.05em] border rounded-md border-white/7 px-3 sm:px-[13px] py-1 sm:py-[5px] hover:border-[#2563eb] cursor-pointer transition-all"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}