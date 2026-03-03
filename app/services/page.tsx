import React from 'react'
import Navbar from '../components/Navbar'
import Servicesheader from '../components/Servicesheader'
import Marquee from '../components/Marquee'
import Servicecta from '../components/Servicecta'
import Footer from '../components/Footer'
import Services from '../components/Services'
import Technologies from '../components/Technologies'

export default function page() {
  return (
    <div>
      <Navbar />
      <Servicesheader />
      <Marquee />
      <Services />
      <Technologies />
      <Servicecta />
      <Footer />
    </div>
  )
}
