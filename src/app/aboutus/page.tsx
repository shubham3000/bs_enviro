"use client"
import Footer from "@/Components/Footer/footer";
import Header from "@/Components/Header/header";
import React from "react";
import HeroBg from "@/Components/Partials/herobg";
import WhoWeAre from "@/Components/AboutUs/whoWeAre";
import WhyBsEnviro from "@/Components/AboutUs/whyBSEnviro";
import OurClinets from "@/Components/AboutUs/ourClients";
import AppointmentBanner from "@/Components/Partials/appointmentBanner";
import AboutVideo from "@/Components/AboutUs/aboutVideo";
import { Helmet, HelmetProvider } from "react-helmet-next";

export default function page() {
  const helmetContext = {};
  return (
    <div>
      <HelmetProvider context={helmetContext}>
        <Helmet prioritizeSeoTags>
          <title>About Us - B S Enviro N Infracon Pvt Ltd</title>
          <meta property="og:title" content="About Us - B S Enviro N Infracon Pvt Ltd" />
          <meta
            name="description"
            content="A Complete Water & Waste Water Solution"
          />
          <link rel="canonical" href="https://bsenviro.com/aboutus" />
        </Helmet>
        <Header isWhite={true} />
        <main className="max-w-screen-2xl">
          <HeroBg
            heading="About <br/> B S Enviro"
            imageurl="/assests/aboutherobg.png"
          />
          <WhoWeAre />
          <WhyBsEnviro />
          <AboutVideo />
          <OurClinets />
          <AppointmentBanner />
        </main>
        <Footer />
      </HelmetProvider>
    </div>
  );
}
