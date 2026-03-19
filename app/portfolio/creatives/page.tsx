"use client";

import React from 'react'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Portmarquee from '@/app/components/Portmarquee';
import Portcta from '@/app/components/Portcta';
import Creativehero from '@/app/components/Creativehero';
import Creativeportfolio from '@/app/components/Creativeportfolio';

export default function page() {
  return (
    <div>
        <Navbar />
        <Creativehero />
        <Portmarquee />
        <Creativeportfolio />
        <Portcta />
        <Footer />
    </div>
  )
}
