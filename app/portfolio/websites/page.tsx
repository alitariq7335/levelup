"use client";

import React from 'react'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Portmarquee from '@/app/components/Portmarquee';
import Portcta from '@/app/components/Portcta';
import Websitehero from '@/app/components/Websitehero';
import Websiteportfolio from '@/app/components/Websiteportfolio';

export default function page() {
  return (
    <div>
        <Navbar />
        <Websitehero />
        <Portmarquee />
        <Websiteportfolio />
        <Portcta />
        <Footer />
    </div>
  )
}
