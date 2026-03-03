"use client";
import React from 'react'
import Navbar from '../../components/Navbar'
import Marquee from '../../components/Marquee';
import Servicecta from '../../components/Servicecta';
import Footer from '../../components/Footer';
import Uxheader from '@/app/components/Uxheader';
import Uxfeactures from '@/app/components/Uxfeactures';
import Uxtimeline from '@/app/components/Uxtimeline';
import Uxdesign from '@/app/components/Uxdesign';

export default function page() {
  return (
    <div>
        <Navbar />
        <Uxheader />
        <Marquee />
        <Uxdesign />
        <Uxfeactures />
        <Uxtimeline />
        <Servicecta />
        <Footer />
    </div>
  )
}
