"use client";
import React from 'react'
import Navbar from '../../components/Navbar'
import Graphicheader from '../../components/Graphicheader';
import Servicecta from '../../components/Servicecta'
import Marquee from '../../components/Marquee';
import Footer from '../../components/Footer'
import Designexpertise from '../../components/Designexpertise';
import Featuredesigns from '../../components/Featuredesigns';
import Designapproach from '../../components/Designapproach';

export default function page() {
  return (
    <div>
      <Navbar />
      <Graphicheader />
      <Marquee />
      <Designexpertise />
      <Featuredesigns />
      <Designapproach />
      <Servicecta />
      <Footer />
    </div>
  )
}
