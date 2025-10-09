import About from '@/Components/Home/about'
import Footer from '@/Components/Footer/footer'
import React from 'react'
import Header from '@/Components/Header/header'
import Hero from '@/Components/Home/hero'
import OurMission from '@/Components/Home/ourMission'
import OurJourney from '@/Components/Home/ourJourney'
import OurSolution from '@/Components/Home/ourSolution'
import OurServices from '@/Components/Home/ourServices'

export default function page() {
  return (
    <div>
    <Header isWhite={true} />
    <main className="max-w-screen-2xl">
    <Hero/>
    <OurMission/>
    <About/>
    <OurJourney/>
    <OurServices/> 
    <OurSolution/>
    <Footer/>
    </main>
    </div>
  )
}
