"use client";
import Footer from "@/Components/Footer/footer";
import Header from "@/Components/Header/header";
import React from "react";
import AppointmentBanner from "@/Components/Partials/appointmentBanner";
import ProductHeroBg from "@/Components/Partials/productherobg";
import EffluentTreatmentPlant from "@/Components/Products/EffluentTreatmentPlant";
import { Helmet, HelmetProvider } from "react-helmet-next";

export default function page() {
  const helmetContext = {};
  return (
    <div>
      <HelmetProvider context={helmetContext}>
        <Helmet prioritizeSeoTags>
          <title>
            Effluent Treatment Plant - B S Enviro N Infracon Pvt Ltd
          </title>
          <meta
            property="og:title"
            content="Effluent Treatment Plant - B S Enviro N Infracon Pvt Ltd"
          />
          <meta
            name="description"
            content="A Complete Water & Waste Water Solution"
          />
          <link
            rel="canonical"
            href="https://bsenviro.com/products/effluentTreatmentPlant"
          />
        </Helmet>
        <Header isWhite={true} />
        <main className="max-w-screen-2xl">
          <ProductHeroBg
            heading="Effluent Treatment <br/> Plant (ETP)"
            imageurl="/assests/ProductHeroBgSTP.png"
          />
          <EffluentTreatmentPlant />
          <AppointmentBanner />
        </main>
        <Footer />
      </HelmetProvider>
    </div>
  );
}
