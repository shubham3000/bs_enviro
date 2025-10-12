import Footer from '@/Components/Footer/footer'
import Header from '@/Components/Header/header'
import React from 'react'
import AppointmentBanner from '@/Components/Partials/appointmentBanner'
import ProductHeroBg from '@/Components/Partials/productherobg'
import SewageTreatmentPlant from '@/Components/Products/sewageTreatmentPlant'

export default function page() {
  return (
    <div>
      <Header isWhite={true} />
      <main className="max-w-screen-2xl">
        <ProductHeroBg heading='Sewage Treatment <br/> Plant (STP)' imageurl='/assests/ProductHeroBg.png'/>
        <SewageTreatmentPlant/>
        <AppointmentBanner/>
      </main>
      <Footer />
    </div>
  )
}
