"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Navbar from "../components/Navbar";
import Testimonial from '../components/Testimonial';
import Team from '../components//Team';
import About from '../components//About';
import Abouthero from '../components//Abouthero';
import Technologies from '../components//Technologies';
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import InteractiveOrb from "../components/InteractiveOrb";
import Process from "../components/Process";
import Whychoose from "../components/Whychoose";
import Marquee from "../components/Marquee";


export default function Page() {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState("about");

    const handleNavigate = (path: string) => {
        setCurrentPage(path);
        router.push(`/${path}`);
    };

    return (
        <div>
            <Navbar />
            <Abouthero />
            <Marquee />
            <About />
            <Whychoose />
            <Process />
            <Team />
            <Testimonial />
            <Technologies />
            <Contact />
            <InteractiveOrb />
            <Footer onNavigate={handleNavigate} />
        </div>
    );
}
