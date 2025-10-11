import Footer from '@/Components/Footer/footer'
import Header from '@/Components/Header/header'
import React from 'react'
import HeroBg from "@/Components/Partials/herobg"

export default function page() {
  return (
    <div>
      <Header isWhite={true} />
      <main className="max-w-screen-2xl">
        <HeroBg heading='About <br/> B S Enviro' imageurl='/assests/aboutherobg.png'/>
      </main>
      <Footer />
    </div>
  )
}
