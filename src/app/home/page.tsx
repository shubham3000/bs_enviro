import About from '@/Components/Home/about'
import Footer from '@/Components/Footer/footer'
import React from 'react'
import Header from '@/Components/Header/header'
import Hero from '@/Components/Home/hero'
import OurMission from '@/Components/Home/ourMission'

export default function page() {
  return (
    <div>
    <Header isWhite={true} />
    <main className="max-w-screen-2xl">
    <Hero/>
    <OurMission/>
    <About/>
    <Footer/>
    </main>
    </div>
  )
}
