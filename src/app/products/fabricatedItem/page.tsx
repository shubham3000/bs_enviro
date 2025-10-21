import Footer from '@/Components/Footer/footer'
import Header from '@/Components/Header/header'
import React from 'react'
import AppointmentBanner from '@/Components/Partials/appointmentBanner'
import ProductHeroBg from '@/Components/Partials/productherobg'
import FabricatedItem from '@/Components/Products/fabricatedItem'

export default function page() {
  return (
    <div>
      <Header isWhite={true} />
      <main className="max-w-screen-2xl">
        <ProductHeroBg heading='Fabricated Items (FI)' imageurl='/assests/ProductHeroBgSTP.png'/>
        <FabricatedItem/>
        <AppointmentBanner/>
      </main>
      <Footer />
    </div>
  )
}
