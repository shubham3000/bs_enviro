"use client";
import Footer from "@/Components/Footer/footer";
import Header from "@/Components/Header/header";
import React from "react";
import ContactUs from "@/Components/ContactUs/contactUs";
import { Helmet, HelmetProvider } from "react-helmet-next";

export default function page() {
  const helmetContext = {};
  return (
    <div>
      <HelmetProvider context={helmetContext}>
        <Helmet prioritizeSeoTags>
          <title>Contact Us - B S Enviro N Infracon Pvt Ltd</title>
          <meta
            property="og:title"
            content="Contact Us - B S Enviro N Infracon Pvt Ltd"
          />
          <meta
            name="description"
            content="A Complete Water & Waste Water Solution"
          />
          <link rel="canonical" href="https://bsenviro.com/contactus" />
        </Helmet>
        <Header isWhite={true} />
        <main className="max-w-screen-2xl">
          <ContactUs />
        </main>
        <Footer />
      </HelmetProvider>
    </div>
  );
}
