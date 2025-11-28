import React from 'react'
import Login from './login'

export default function dashboardHome() {
  return (
   <section className="w-screen h-screen pt-24 pb-32 md:pb-52 xl:pb-64 md:pt-44 px-4 md:px-12 xl:px-24 bg-white">
      <div className="container mx-auto">
        <h1 className="text-[#01959A] text-center font-montserrat font-bold text-4xl md:text-4xl xl:text-6xl leading-tight">
          Admin Dashboard Login
        </h1>
        <Login/>
      </div>
    </section>
  )
}
