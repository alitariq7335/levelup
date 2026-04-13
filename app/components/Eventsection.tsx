"use client";
import React, { useRef, useEffect, useState } from "react";

const events = [
    {
        code: "01",
        title: "Brand Design Masterclass",
        category: "Workshop",
        date: "Apr 15, 2025",
        time: "6:00 PM PKT",
        location: "Lahore, Pakistan",
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80&fit=crop",
        desc: "A hands-on deep dive into building iconic brand identities — from logo systems to full visual guidelines.",
        tag: "Design",
    },
    {
        code: "02",
        title: "UI/UX Design Sprint",
        category: "Bootcamp",
        date: "Apr 22, 2025",
        time: "10:00 AM PKT",
        location: "Online / Remote",
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80&fit=crop",
        desc: "3-day intensive sprint — wireframes to hi-fi prototypes. Learn the full product design workflow.",
        tag: "UI/UX",
    },
    {
        code: "03",
        title: "Motion Graphics Workshop",
        category: "Workshop",
        date: "May 3, 2025",
        time: "5:00 PM PKT",
        location: "Lahore, Pakistan",
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80&fit=crop",
        desc: "Master After Effects and create cinematic animations, logo reveals, and social media reels.",
        tag: "Motion",
    },
    {
        code: "04",
        title: "Digital Marketing Summit",
        category: "Summit",
        date: "May 10, 2025",
        time: "9:00 AM PKT",
        location: "Karachi, Pakistan",
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80&fit=crop",
        desc: "Industry leaders share strategies on SEO, paid ads, social growth, and brand positioning in 2025.",
        tag: "Marketing",
    },
];

const categoryColors: Record<string, string> = {
    Workshop: "text-blue-400 border-blue-500/30 bg-blue-500/10",
    Bootcamp: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
    Summit: "text-purple-400 border-purple-500/30 bg-purple-500/10",
    Conference: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
};

const Eventsection: React.FC = () => {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setVisible(true); },
            { threshold: 0.08 }
        );
        if (sectionRef.current) obs.observe(sectionRef.current);
        return () => obs.disconnect();
    }, []);

    const featured = events[0];
    const rest = events.slice(1, 4); // only 3 cards on home

    return (
        <section ref={sectionRef} className="relative bg-black overflow-hidden py-0">

            {/* ── SVG BACKGROUND ── */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="xMidYMid slice">
                <defs>
                    <pattern id="evgrid-h" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(59,130,246,0.7)" strokeWidth="0.3" />
                    </pattern>
                    <pattern id="evdots-h" width="28" height="28" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="rgba(59,130,246,0.8)" />
                    </pattern>
                    <linearGradient id="evslash-h" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(59,130,246,0)" />
                        <stop offset="50%" stopColor="rgba(59,130,246,0.4)" />
                        <stop offset="100%" stopColor="rgba(59,130,246,0)" />
                    </linearGradient>
                </defs>

                {/* Grid patches */}
                <rect x="75%" y="0%" width="25%" height="32%" fill="url(#evgrid-h)" opacity="0.02" />
                <rect x="0%" y="65%" width="20%" height="35%" fill="url(#evgrid-h)" opacity="0.018" />

                {/* Dot clusters */}
                <rect x="92%" y="40%" width="8%" height="20%" fill="url(#evdots-h)" opacity="0.05" />
                <rect x="0%" y="15%" width="6%" height="18%" fill="url(#evdots-h)" opacity="0.04" />

                {/* Rings top-left */}
                <circle cx="-2%" cy="8%" r="20%" fill="none" stroke="rgba(59,130,246,0.06)" strokeWidth="0.5" />
                <circle cx="-2%" cy="8%" r="13%" fill="none" stroke="rgba(59,130,246,0.04)" strokeWidth="0.4" />

                {/* Rings bottom-right */}
                <circle cx="102%" cy="92%" r="24%" fill="none" stroke="rgba(99,102,241,0.06)" strokeWidth="0.5" />
                <circle cx="102%" cy="92%" r="16%" fill="none" stroke="rgba(99,102,241,0.04)" strokeWidth="0.3" />

                {/* Slash lines */}
                <line x1="0%" y1="40%" x2="35%" y2="100%" stroke="url(#evslash-h)" strokeWidth="0.4" />
                <line x1="70%" y1="0%" x2="100%" y2="45%" stroke="url(#evslash-h)" strokeWidth="0.4" />

                {/* Diamond accent */}
                <g transform="translate(96%, 55%)" opacity="0.07">
                    <rect x="-18" y="-18" width="36" height="36" fill="none" stroke="rgba(59,130,246,1)" strokeWidth="0.5" transform="rotate(45)" />
                    <rect x="-10" y="-10" width="20" height="20" fill="none" stroke="rgba(99,102,241,0.8)" strokeWidth="0.4" transform="rotate(45)" />
                    <line x1="-25" y1="0" x2="25" y2="0" stroke="rgba(59,130,246,0.5)" strokeWidth="0.3" />
                    <line x1="0" y1="-25" x2="0" y2="25" stroke="rgba(59,130,246,0.5)" strokeWidth="0.3" />
                </g>

                {/* Corner brackets */}
                <path d="M 20 55 L 20 20 L 55 20"
                    fill="none" stroke="rgba(59,130,246,0.9)" strokeWidth="0.5" opacity="0.1" />
            </svg>

            {/* ── AMBIENT GLOW ── */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-600/5  rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px]   bg-indigo-600/4 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16 md:py-24">

                {/* ── HEADER ── */}
                <div className={`mb-12 md:mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

                        {/* Left: headline */}
                        <div>
                            <div className="flex items-center gap-3 mb-5">
                                <span className="text-blue-500 font-black uppercase text-[12px] mb-4">
                                    Community · Learning · Growth
                                </span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                                <span className="text-white/90">UPCOMING</span>
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
                                    EVENTS.
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

                {/* ── LAYOUT: Featured left + 3 cards right ── */}
                <div className={`grid lg:grid-cols-5 gap-4 transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

                    {/* FEATURED — takes 2 cols */}
                    <div className="lg:col-span-3 group rounded-2xl overflow-hidden border border-blue-500/15 hover:border-blue-500/30 transition-all duration-500 cursor-pointer flex flex-col">
                        {/* Image */}
                        <div className="relative flex-1 min-h-[220px]">
                            <img
                                src={featured.image}
                                alt={featured.title}
                                className="absolute inset-0 w-full h-full object-cover brightness-50 saturate-75 group-hover:brightness-60 group-hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                            {/* inner grid */}
                            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(59,130,246,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.6) 1px,transparent 1px)`, backgroundSize: "50px 50px" }} />

                            {/* Top badges */}
                            <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                                <span className={`text-[9px] font-black tracking-[0.18em] uppercase px-2.5 py-1 border rounded-lg ${categoryColors[featured.category] ?? "text-blue-400 border-blue-500/30 bg-blue-500/10"}`}>
                                    {featured.category}
                                </span>
                                <span className="text-[8px] font-black tracking-[0.18em] uppercase px-2.5 py-1 border border-white/10 rounded-lg bg-black/50 text-white/30">
                                    Featured
                                </span>
                            </div>

                            {/* Bottom content */}
                            <div className="absolute bottom-0 left-0 right-0 p-5">
                                <p className="text-[8px] font-mono text-white/25 uppercase tracking-widest mb-1">{featured.code}</p>
                                <h3 className="text-xl font-black uppercase tracking-tight text-white leading-tight mb-3">
                                    {featured.title}
                                </h3>
                                <p className="text-xs text-gray-400 font-light leading-relaxed mb-4 line-clamp-2">
                                    {featured.desc}
                                </p>
                                {/* Meta */}
                                <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-0">
                                    <div className="flex items-center gap-1.5">
                                        <svg width="11" height="11" viewBox="0 0 13 13" fill="none"><rect x="1" y="2" width="11" height="10" rx="1.5" stroke="#3B82F6" strokeWidth="1.2" /><path d="M4 1V3M9 1V3M1 5H12" stroke="#3B82F6" strokeWidth="1.2" strokeLinecap="round" /></svg>
                                        <span className="text-[9px] font-black uppercase tracking-wider text-white/50">{featured.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <svg width="11" height="11" viewBox="0 0 13 13" fill="none"><path d="M6.5 1C4.567 1 3 2.567 3 4.5c0 2.8 3.5 7.5 3.5 7.5S10 7.3 10 4.5C10 2.567 8.433 1 6.5 1Z" stroke="#3B82F6" strokeWidth="1.2" /><circle cx="6.5" cy="4.5" r="1.2" fill="#3B82F6" /></svg>
                                        <span className="text-[9px] font-black uppercase tracking-wider text-white/50">{featured.location}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: 3 stacked cards */}
                    <div className="lg:col-span-2 flex flex-col gap-3">
                        {rest.map((ev, i) => (
                            <div
                                key={ev.code}
                                className={`group border border-white/5 hover:border-blue-500/20 rounded-2xl overflow-hidden bg-white/[0.015] hover:bg-white/[0.025] transition-all duration-500 cursor-pointer flex flex-row ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
                                    }`}
                                style={{ transitionDelay: visible ? `${300 + i * 100}ms` : "0ms" }}
                            >
                                {/* Thumbnail */}
                                <div className="relative w-[110px] sm:w-[140px] shrink-0 overflow-hidden">
                                    <img
                                        src={ev.image}
                                        alt={ev.title}
                                        className="absolute inset-0 w-full h-full object-cover brightness-50 saturate-75 group-hover:brightness-60 group-hover:scale-105 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60" />
                                    {/* Hover top accent */}
                                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    {/* Category badge */}
                                    <div className="absolute bottom-3 left-3">
                                        <span className={`text-[7px] font-black tracking-[0.15em] uppercase px-1.5 py-0.5 border rounded ${categoryColors[ev.category] ?? "text-blue-400 border-blue-500/30 bg-blue-500/10"}`}>
                                            {ev.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 p-4 flex flex-col justify-between min-w-0">
                                    <div>
                                        <p className="text-[7px] font-mono text-white/20 uppercase tracking-widest mb-1">{ev.code}</p>
                                        <h3 className="text-sm font-black uppercase tracking-wider text-white/75 group-hover:text-white transition-colors leading-tight mb-2 truncate">
                                            {ev.title}
                                        </h3>
                                        <p className="text-[12px] text-gray-500 font-light leading-relaxed line-clamp-2 group-hover:text-gray-400 transition-colors mb-3">
                                            {ev.desc}
                                        </p>
                                        {/* Meta row */}
                                        <div className="flex flex-wrap gap-x-3 gap-y-1">
                                            <div className="flex items-center gap-1.5">
                                                <svg width="10" height="10" viewBox="0 0 13 13" fill="none"><rect x="1" y="2" width="11" height="10" rx="1.5" stroke="#3B82F6" strokeWidth="1.2" /><path d="M4 1V3M9 1V3M1 5H12" stroke="#3B82F6" strokeWidth="1.2" strokeLinecap="round" /></svg>
                                                <span className="text-[8px] font-black uppercase tracking-wider text-white/35">{ev.date}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <svg width="10" height="10" viewBox="0 0 13 13" fill="none"><path d="M6.5 1C4.567 1 3 2.567 3 4.5c0 2.8 3.5 7.5 3.5 7.5S10 7.3 10 4.5C10 2.567 8.433 1 6.5 1Z" stroke="#3B82F6" strokeWidth="1.2" /><circle cx="6.5" cy="4.5" r="1.2" fill="#3B82F6" /></svg>
                                                <span className="text-[8px] font-black uppercase tracking-wider text-white/35">{ev.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── VIEW ALL BUTTON ── */}
                <div className={`mt-10 flex justify-center transition-all duration-700 delay-600 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                    <a
                        href="/events"
                        className="group flex items-center gap-3 px-10 py-4 border border-white/10 hover:border-blue-500/30 rounded-xl font-black text-xs uppercase tracking-[0.25em] transition-all hover:bg-blue-500/5 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]"
                    >
                        View All Events
                        <svg className="group-hover:translate-x-1 transition-transform" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M1 6H11M7 2L11 6L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Eventsection;