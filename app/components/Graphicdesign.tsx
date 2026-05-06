"use client";
import React, { useRef, useEffect, useState } from "react";

const services = [
    {
        code: "01",
        title: "Brand Identity",
        desc: "Full-spectrum brand architecture. We craft visual identities that communicate authority — from mark to motion, built to own your category.",
        image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80&fit=crop",
    },
    {
        code: "02",
        title: "UI / UX Design",
        desc: "Pixel-perfect interfaces engineered for conversion. Every screen, every flow, every micro-interaction crafted with intent.",
        image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80&fit=crop",
    },
    {
        code: "03",
        title: "Print & Packaging",
        desc: "Tactile design that commands shelf presence. Business cards, brochures, packaging — objects crafted to leave lasting impressions.",
        image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80&fit=crop",
    },
    {
        code: "04",
        title: "Motion Graphics",
        desc: "Animated logos, explainer videos, and social reels engineered to stop the scroll and hold attention.",
        image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80&fit=crop",
    },
    {
        code: "05",
        title: "Social Media Kits",
        desc: "Platform-native design systems keeping your brand consistent across every channel — Instagram, LinkedIn, Twitter, and beyond.",
        image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80&fit=crop",
    },
    {
        code: "06",
        title: "Illustration",
        desc: "Original artwork that transforms complex ideas into compelling visual narratives — for web, print, and campaigns.",
        image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80&fit=crop",
    },
];

const Graphicdesign: React.FC = () => {
    const [active, setActive] = useState(0);
    const [visible, setVisible] = useState(false);
    const [glitch, setGlitch] = useState(false);
    const [ticker, setTicker] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.08 });
        if (sectionRef.current) obs.observe(sectionRef.current);
        return () => obs.disconnect();
    }, []);

    useEffect(() => {
        const t = setInterval(() => setTicker(c => c + 1), 100);
        return () => clearInterval(t);
    }, []);

    const pick = (i: number) => {
        setGlitch(true);
        setTimeout(() => { setActive(i); setGlitch(false); }, 120);
    };

    return (
        <section ref={sectionRef} className="relative bg-zinc-950 overflow-hidden py-0">

            {/* ── SVG BACKGROUND ELEMENTS ── */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="xMidYMid slice">
                <defs>
                    <pattern id="smallgrid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(59,130,246,0.8)" strokeWidth="0.4" />
                    </pattern>
                    <pattern id="tinydots" width="24" height="24" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="rgba(59,130,246,0.9)" />
                    </pattern>
                    <linearGradient id="slashFade" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(59,130,246,0)" />
                        <stop offset="50%" stopColor="rgba(59,130,246,0.5)" />
                        <stop offset="100%" stopColor="rgba(59,130,246,0)" />
                    </linearGradient>
                </defs>
                <rect x="0%" y="0%" width="22%" height="28%" fill="url(#smallgrid)" opacity="0.022" />
                <rect x="72%" y="62%" width="28%" height="38%" fill="url(#smallgrid)" opacity="0.018" />
                <rect x="1%" y="38%" width="8%" height="22%" fill="url(#tinydots)" opacity="0.055" />
                <circle cx="92%" cy="-5%" r="30%" fill="none" stroke="rgba(59,130,246,0.07)" strokeWidth="0.5" />
                <circle cx="92%" cy="-5%" r="22%" fill="none" stroke="rgba(59,130,246,0.05)" strokeWidth="0.4" />
                <circle cx="92%" cy="-5%" r="14%" fill="none" stroke="rgba(99,102,241,0.06)" strokeWidth="0.3" />
                <circle cx="-4%" cy="96%" r="18%" fill="none" stroke="rgba(59,130,246,0.05)" strokeWidth="0.4" />
                <circle cx="-4%" cy="96%" r="11%" fill="none" stroke="rgba(59,130,246,0.04)" strokeWidth="0.3" />
                <line x1="58%" y1="0%" x2="100%" y2="38%" stroke="url(#slashFade)" strokeWidth="0.5" />
                <line x1="62%" y1="0%" x2="100%" y2="32%" stroke="url(#slashFade)" strokeWidth="0.3" />
                <line x1="0%" y1="62%" x2="30%" y2="100%" stroke="url(#slashFade)" strokeWidth="0.4" />
                <g transform="translate(88%, 52%)" opacity="0.08">
                    <rect x="-22" y="-22" width="44" height="44" fill="none" stroke="rgba(59,130,246,0.9)" strokeWidth="0.5" transform="rotate(45)" />
                    <rect x="-13" y="-13" width="26" height="26" fill="none" stroke="rgba(99,102,241,0.7)" strokeWidth="0.4" transform="rotate(45)" />
                    <line x1="-30" y1="0" x2="30" y2="0" stroke="rgba(59,130,246,0.4)" strokeWidth="0.3" />
                    <line x1="0" y1="-30" x2="0" y2="30" stroke="rgba(59,130,246,0.4)" strokeWidth="0.3" />
                </g>
                <path d="M 20 60 L 20 20 L 60 20" fill="none" stroke="rgba(59,130,246,0.9)" strokeWidth="0.6" opacity="0.12" />
            </svg>

            {/* ── AMBIENT GLOW ── */}
            <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-indigo-600/4 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16 md:py-24">

                {/* ── HEADER ── */}
                <div className={`mb-14 md:mb-20 transition-all duration-800 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                        <div>
                            <div className="flex items-center gap-3 mb-5">
                                <span className="text-blue-500 font-black uppercase text-[12px] mb-4">Visual Craft Division</span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.8]">
                                <span className="text-white/90">GRAPHIC </span>
                                {/* <br /> */}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
                                DESIGN
                                </span>
                            </h2>
                        </div>
                        <div className="flex flex-col items-center md:items-start gap-6 max-w-sm">
                            <p className="text-gray-500 text-sm uppercase tracking-widest font-bold leading-relaxed border-l-2 border-blue-600 pl-8">
                                Each service is a module designed for total market dominance.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ── MAIN GRID ── */}
                <div className="grid lg:grid-cols-5 gap-4 md:gap-5">

                    {/* LEFT: accordion */}
                    <div className={`lg:col-span-2 space-y-2 md:space-y-4 transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                        {services.map((s, i) => (
                            <button
                                key={s.code}
                                onClick={() => pick(i)}
                                className={`w-full text-left rounded-xl px-5 py-4 border transition-all cursor-pointer duration-300 group relative overflow-hidden ${
                                    active === i
                                        ? "border-blue-500/35 bg-gradient-to-r from-blue-500/8 to-indigo-500/5 shadow-[inset_0_0_40px_rgba(59,130,246,0.04)]"
                                        : "border-white/5 bg-white/[0.015] hover:border-white/10 hover:bg-white/[0.025]"
                                }`}
                            >
                                <div className={`absolute left-0 top-3 bottom-3 w-[2px] rounded-r-full transition-all duration-300 ${active === i ? "bg-blue-500 opacity-100" : "opacity-0"}`} />
                                <div className="flex items-center justify-between mb-1.5">
                                    <span className={`text-[8px] font-mono tracking-[0.25em] uppercase transition-colors ${active === i ? "text-blue-400" : "text-white/18 group-hover:text-white/30"}`}>
                                        {s.code}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between gap-2">
                                    <h3 className={`text-sm font-black uppercase tracking-wider leading-tight transition-colors ${active === i ? "text-white" : "text-white/35 group-hover:text-white/60"}`}>
                                        {s.title}
                                    </h3>
                                    <svg className={`w-3.5 h-3.5 shrink-0 transition-all duration-300 ${active === i ? "text-blue-400 translate-x-0.5" : "text-white/10"}`} viewBox="0 0 14 14" fill="none">
                                        <path d="M2 7H12M8 3.5L12 7L8 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                               
                            </button>
                        ))}
                    </div>

                    {/* RIGHT: detail panel */}
                    <div className={`lg:col-span-3 transition-all duration-700 delay-250 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
                        <div className={`h-full min-h-[520px] border border-blue-500/15 rounded-2xl overflow-hidden relative flex flex-col transition-all duration-75 ${glitch ? "translate-x-[2px] brightness-110" : ""}`}>

                            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black/80 to-indigo-900/15 transition-all duration-500" />
                            <div className="absolute inset-0 opacity-[0.025]"
                                style={{
                                    backgroundImage: `linear-gradient(rgba(59,130,246,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.6) 1px, transparent 1px)`,
                                    backgroundSize: "50px 50px"
                                }}
                            />
                            <svg className="absolute top-4 right-4 opacity-10 pointer-events-none" width="60" height="60" viewBox="0 0 60 60">
                                <rect x="10" y="10" width="40" height="40" fill="none" stroke="#3B82F6" strokeWidth="0.6" transform="rotate(45 30 30)" />
                                <rect x="18" y="18" width="24" height="24" fill="none" stroke="#818CF8" strokeWidth="0.4" transform="rotate(45 30 30)" />
                                <line x1="0" y1="30" x2="60" y2="30" stroke="#3B82F6" strokeWidth="0.3" />
                                <line x1="30" y1="0" x2="30" y2="60" stroke="#3B82F6" strokeWidth="0.3" />
                            </svg>

                            {/* Panel top bar */}
                            <div className="relative z-10 flex items-center justify-between px-6 py-3.5 border-b border-blue-500/10 bg-blue-500/[0.03] shrink-0">
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                                    <span className="text-[9px] font-mono tracking-[0.25em] text-blue-400/70 uppercase">
                                        {services[active].code}
                                    </span>
                                    <span className="text-blue-500/20 font-mono">|</span>
                                </div>
                            </div>

                            {/* Panel body */}
                            <div className="relative z-10 flex-1 p-6 md:p-8 flex flex-col justify-between">
                                <div>

                                    {/* ── IMAGE (above title) ── */}
                                    <div className="relative w-full h-[180px] md:h-[210px] rounded-xl overflow-hidden mb-6 border border-white/5">
                                        <img
                                            key={services[active].image}
                                            src={services[active].image}
                                            alt={services[active].title}
                                            className="w-full h-full object-cover brightness-75 saturate-[0.85] transition-transform duration-700 scale-105 hover:scale-100"
                                        />
                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                                        {/* Corner brackets on image */}
                                        <svg className="absolute top-3 left-3 opacity-50" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M1 8 L1 1 L8 1" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                        <svg className="absolute bottom-3 right-3 opacity-50" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M19 12 L19 19 L12 19" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </div>

                                    {/* Service title */}
                                    <h3 className="text-[clamp(1.8rem,4vw,3rem)] font-black uppercase tracking-[-0.03em] leading-[0.9] text-white mb-4">
                                        {services[active].title}
                                    </h3>

                                    {/* Accent line */}
                                    <div className="h-[2px] w-50 bg-gradient-to-r from-blue-500 to-transparent mb-5" />

                                    {/* Description */}
                                    <p className="text-sm text-gray-400 font-light leading-relaxed max-w-lg mb-6">
                                        {services[active].desc}
                                    </p>

                                </div>

                                {/* CTA */}
                                <div className="flex items-center gap-4 flex-wrap">
                                    <a href="/portfolio" className="group flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-black text-xs uppercase tracking-[0.2em] transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                                        View Portfolio
                                        <svg className="group-hover:translate-x-1 transition-transform" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path d="M1 6H11M7 2L11 6L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Graphicdesign;