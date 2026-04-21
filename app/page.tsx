"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolios from "./components/Portfolios";
import Testimonial from "./components/Testimonial";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";
import InteractiveOrb from "./components/InteractiveOrb";
import Graphicdesign from "./components/Graphicdesign";
import Eventsection from "./components/Eventsection";


const Home: React.FC = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    
    // Scroll to specific sections or navigate to pages
    if (page === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'services') {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else if (page === 'portfolio') {
      const portfolioSection = document.getElementById('portfolio');
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else if (page === 'about') {
      router.push('/about');
    } else if (page === 'contact') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Portfolios />
      <Technologies />
      <Graphicdesign />
      <Eventsection />
      <Testimonial />
      <Contact />
      <InteractiveOrb />
      <Footer onNavigate={handleNavigate}/>
    </>
  );
};

export default Home;