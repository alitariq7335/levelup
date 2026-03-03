"use client";
import React from 'react'
import Navbar from '../../components/Navbar'
import Marquee from '../../components/Marquee';
import Servicecta from '../../components/Servicecta';
import Footer from '../../components/Footer';
import Appheader from '../../components/Appheader';
import Appfeactures from '../../components/Appfeactures';
import Apptimeline from '@/app/components/Apptimeline';
import Appcontent from '@/app/components/Appcontent';

export default function page() {
  return (
    <div>
        <Navbar />
        <Appheader />   
        <Marquee />
        <Appfeactures />
        <Appcontent />
        <Apptimeline />
        <Servicecta />
        <Footer />
    </div>
  )
}
