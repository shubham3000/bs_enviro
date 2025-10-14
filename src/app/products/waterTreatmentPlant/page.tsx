import Footer from '@/Components/Footer/footer'
import Header from '@/Components/Header/header'
import React from 'react'
import AppointmentBanner from '@/Components/Partials/appointmentBanner'
import ProductHeroBg from '@/Components/Partials/productherobg'
import WaterTreatmentPlant from '@/Components/Products/WaterTreatmentPlant'

export default function page() {
  return (
    <div>
      <Header isWhite={true} />
      <main className="max-w-screen-2xl">
        <ProductHeroBg heading='Water Treatment <br/> Plant' imageurl='/assests/ProductHeroBg.png'/>
        <WaterTreatmentPlant/>
        <AppointmentBanner/>
      </main>
      <Footer />
    </div>
  )
}

