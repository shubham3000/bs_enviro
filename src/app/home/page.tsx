import Header from '@/Components/Header/header'
import Hero from '@/Components/Home/hero'
import OurMission from '@/Components/Home/ourMission'
import About from '@/components/Home/about'
import Footer from '@/components/Footer/footer'
import React from 'react'

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
