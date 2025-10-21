import Footer from '@/Components/Footer/footer'
import Header from '@/Components/Header/header'
import React from 'react'
import ContactUs from '@/Components/ContactUs/contactUs'

export default function page() {
  return (
     <div>
      <Header isWhite={true} />
      <main className="max-w-screen-2xl">
        <ContactUs/>
      </main>
      <Footer />
    </div>
  )
}
