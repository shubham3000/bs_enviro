"use client";
import Footer from "@/Components/Footer/footer";
import Header from "@/Components/Header/header";
import React from "react";
import AppointmentBanner from "@/Components/Partials/appointmentBanner";
import ProductHeroBg from "@/Components/Partials/productherobg";
import DisinfectionUnit from "@/Components/Products/DisinfectionUnit";
import { Helmet, HelmetProvider } from "react-helmet-next";

export default function page() {
  const helmetContext = {};
  return (
    <div>
      <HelmetProvider context={helmetContext}>
        <Helmet prioritizeSeoTags>
          <title>Disinfection Unit - B S Enviro N Infracon Pvt Ltd</title>
          <meta
            property="og:title"
            content="Disinfection Unit - B S Enviro N Infracon Pvt Ltd"
          />
          <meta
            name="description"
            content="A Complete Water & Waste Water Solution"
          />
          <link
            rel="canonical"
            href="https://bsenviro.com/products/disinfectionUnit"
          />
        </Helmet>
        <Header isWhite={true} />
        <main className="max-w-screen-2xl">
          <ProductHeroBg
            heading="Disinfection Unit (DU)"
            imageurl="/assests/ProductHeroBgSTP.png"
          />
          <DisinfectionUnit />
          <AppointmentBanner />
        </main>
        <Footer />
      </HelmetProvider>
    </div>
  );
}
