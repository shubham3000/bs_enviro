import Footer from '@/Components/Footer/footer'
import Header from '@/Components/Header/header'
import React from 'react'
import AppointmentBanner from '@/Components/Partials/appointmentBanner'
import ProductHeroBg from '@/Components/Partials/productherobg'
import EffluentTreatmentPlant from '@/Components/Products/EffluentTreatmentPlant'

export default function page() {
  return (
    <div>
      <Header isWhite={true} />
      <main className="max-w-screen-2xl">
        <ProductHeroBg heading='Effluent Treatment <br/> Plant (ETP)' imageurl='/assests/ProductHeroBg.png'/>
        <EffluentTreatmentPlant/>
        <AppointmentBanner/>
      </main>
      <Footer />
    </div>
  )
}
