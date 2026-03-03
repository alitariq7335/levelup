"use client"; 

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import Navbar from "../components/Navbar";
import ContactPage from "../components/ContactPage";
import Footer from "../components/Footer";

export default function Contact() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState("contact");

  const handleNavigate = (path: string) => {
    setCurrentPage(path);
    // Navigate using Next.js router
    router.push(path === "home" ? "/" : `/${path}`);
  };

  return (
    <div>
      <Navbar />
      <ContactPage currentPage={currentPage} onNavigate={handleNavigate} />
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
