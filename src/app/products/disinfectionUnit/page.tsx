import Footer from '@/Components/Footer/footer'
import Header from '@/Components/Header/header'
import React from 'react'
import AppointmentBanner from '@/Components/Partials/appointmentBanner'
import ProductHeroBg from '@/Components/Partials/productherobg'
import DisinfectionUnit from '@/Components/Products/DisinfectionUnit'

export default function page() {
  return (
    <div>
      <Header isWhite={true} />
      <main className="max-w-screen-2xl">
        <ProductHeroBg heading='Disinfection Unit (DU)' imageurl='/assests/ProductHeroBg.png'/>
        <DisinfectionUnit/>
        <AppointmentBanner/>
      </main>
      <Footer />
    </div>
  )
}

