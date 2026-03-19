"use client";

import React from 'react'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Portmarquee from '@/app/components/Portmarquee';
import Portcta from '@/app/components/Portcta';
import Brandidentity from '@/app/components/Brandidentity';
import Brandhero from '@/app/components/Brandhero';

export default function page() {
  return (
    <div>
        <Navbar />
        <Brandhero />
        <Portmarquee />
        <Brandidentity />
        <Portcta />
        <Footer />
    </div>
  )
}
