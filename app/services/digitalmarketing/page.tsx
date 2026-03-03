"use client";
import React from 'react'
import Navbar from '../../components/Navbar'
import Marquee from '../../components/Marquee';
import Servicecta from '../../components/Servicecta';
import Footer from '../../components/Footer';
import Digiheader from '../../components/Digiheader';
import Digitools from '../../components/Digitools';
import Digiprocess from '../../components/Digiprocess';
import Digigrowth from '@/app/components/Digigrowth';

export default function page() {
  return (
    <div>
        <Navbar />
        <Digiheader />
        <Marquee />
        {/* <Digitools /> */}
        <Digigrowth />
        <Digiprocess /> 
        <Servicecta />
        <Footer />
    </div>
  )
}
