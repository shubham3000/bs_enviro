import Header from '@/Components/Header/header'
import Hero from '@/Components/Home/hero'
import React from 'react'

export default function page() {
  return (
    <div className='absolute top-0 left-0 w-full z-50'>
    <Header isWhite={true} />
    <Hero/>
    </div>
  )
}
