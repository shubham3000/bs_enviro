import Header from '@/components/Header/header'
import Hero from '@/components/Home/hero'
import OurMission from '@/components/Home/ourMission'
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
