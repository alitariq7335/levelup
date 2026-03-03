"use client";
import React from 'react'
import Navbar from '../../components/Navbar'
import Marquee from '../../components/Marquee';
import Servicecta from '../../components/Servicecta';
import Footer from '../../components/Footer';
import Webheader from '../../components/Webheader';
import Webstack from '../../components/Webstack';
import Webtimeline from '../../components/Webtimeline';
import Webfeactures from '../../components/Webfeactures';

export default function page() {
  return (
    <div>
        <Navbar />
        <Webheader />   
        <Marquee />
        <Webstack />
        <Webfeactures />
        <Webtimeline />
        <Servicecta />
        <Footer />
    </div>
  )
}
