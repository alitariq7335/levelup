"use client";

import React from 'react'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Portmarquee from '@/app/components/Portmarquee';
import Portcta from '@/app/components/Portcta';
import Portvideohero from '@/app/components/Portvideohero';
import Videoportfolio from '@/app/components/Videoportfolio';

export default function page() {
  return (
    <div>
        <Navbar />
        <Portvideohero />
        <Portmarquee />
        <Videoportfolio />
        <Portcta />
        <Footer />
    </div>
  )
}
