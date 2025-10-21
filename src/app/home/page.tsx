"use client";
import About from "@/Components/Home/about";
import Footer from "@/Components/Footer/footer";
import React from "react";
import Header from "@/Components/Header/header";
import Hero from "@/Components/Home/hero";
import OurMission from "@/Components/Home/ourMission";
import OurJourney from "@/Components/Home/ourJourney";
import OurSolution from "@/Components/Home/ourSolution";
import OurServices from "@/Components/Home/ourServices";
import OurVission from "@/Components/Home/ourVission";
import OurHighlights from "@/Components/Home/ourHighlights";
import AppointmentBanner from "@/Components/Partials/appointmentBanner";
import { Helmet, HelmetProvider } from "react-helmet-next";

export default function page() {
  const helmetContext = {};
  return (
    <div>
      <HelmetProvider context={helmetContext}>
        <Helmet prioritizeSeoTags>
          <title>B S Enviro N Infracon Pvt Ltd</title>
          <meta property="og:title" content="B S Enviro N Infracon Pvt Ltd" />
          <meta
            name="description"
            content="A Complete Water & Waste Water Solution"
          />
          <link rel="canonical" href="https://bsenviro.com/home" />
        </Helmet>
        <Header isWhite={true} />
        <main className="max-w-screen-2xl">
          <Hero />
          {/* <OurMission/> */}
          <OurVission />
          <About />
          <OurHighlights />
          <OurJourney />
          <OurServices />
          <OurSolution />
          <AppointmentBanner />
        </main>
        <Footer />
      </HelmetProvider>
    </div>
  );
}
