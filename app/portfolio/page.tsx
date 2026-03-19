"use client";
import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Portcta from '../components/Portcta';
import Porthero from '../components/Porthero';
import Portfeatures from '../components/Portfeatures';
import Portmarquee from '../components/Portmarquee';

export default function page() {
  return (
    <div>
    <Navbar />
    <Porthero />
    <Portmarquee />
    <Portfeatures />
    <Portcta />
    <Footer />
    </div>
  )
}
