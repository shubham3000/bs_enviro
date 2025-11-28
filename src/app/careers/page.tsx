import Footer from '@/Components/Footer/footer'
import Header from '@/Components/Header/header'
import React from 'react'
import ContactUs from '@/Components/ContactUs/contactUs'
import { Metadata } from 'next'
import Hero from "@/Components/Careers/hero"
import CareerOpportunities from '@/Components/Careers/CareerOpportunities'
import CareerRowTemplate from '@/Components/Careers/careerRowTemplate'

export const metadata: Metadata = {
  title: 'Careers',
  metadataBase: new URL('https://bsenviro.com/careers'),
};

export default function page() {
  return (
     <div>
      <Header isWhite={false} />
      <main className="max-w-screen-2xl">
        <Hero/>
        <CareerOpportunities/>
        <CareerRowTemplate/>
      </main>
      <Footer />
    </div>
  )
}