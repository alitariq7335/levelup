"use client";
import React from 'react'
import Navbar from '../../components/Navbar'
import Marquee from '../../components/Marquee';
import Servicecta from '../../components/Servicecta';
import Footer from '../../components/Footer';
import Videoheader from '../../components/Videoheader';
import Videofeacture from '../../components/Videofeacture';
import Videoprocess from '@/app/components/Videoprocess';
import Videocontent from '@/app/components/Videocontent';


export default function page() {
  return (
    <div>
        <Navbar />
        <Videoheader />  
        <Marquee />
        <Videofeacture />
        <Videocontent />
        <Videoprocess />
        <Servicecta />
        <Footer />
    </div>
  )
}
