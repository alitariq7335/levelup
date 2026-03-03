"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Navbar from "../components/Navbar";
import Testimonial from '../components/Testimonial';
import Team from '../components//Team';
import About from '../components//About';
import Abouthero from '../components//Abouthero';
import Aboutcall from '../components//Aboutcall';
import Technologies from '../components//Technologies';
import Footer from "../components/Footer";

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
            <About />
            <Team />
            <Technologies />
            <Testimonial />
            <Aboutcall />
            <Footer onNavigate={handleNavigate} />
        </div>
    );
}
