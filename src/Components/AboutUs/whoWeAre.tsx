"use client";
import React from "react";
import { motion } from "framer-motion";
import { popUpAnimationProps } from "@/animation/Framer";

export default function whoWeAre() {
  return (
    <section className="w-screen overflow-hidden py-16 md:py-24 px-4 md:px-12 xl:px-24 bg-[#F5FAFE]">
      <div className="container mx-auto flex flex-col justify-center items-center gap-12 xl:gap-16">
        <motion.h1
          className="text-[#0195B1] text-4xl md:text-5xl xl:text-6xl font-semibold text-center font-montserrat"
          {...popUpAnimationProps}
        >
          Who We Are
        </motion.h1>
        <motion.div
          className="font-epilogue font-normal text-[#233852] text-sm md:text-lg xl:text-xl"
        >
          <p>
            At <strong>B S Enviro N Infracon Pvt Ltd</strong>, we believe that
            water is not just a resource—it’s a responsibility. Since our
            inception in 2002, we have been committed to delivering sustainable
            wastewater management solutions that focus on{" "}
            <strong>Recycle, Reduce, and Reuse</strong>.
          </p>

          <p className="mt-4">
            With over two decades of expertise, we specialize in designing,
            building, and maintaining advanced water and wastewater treatment
            systems for both industrial and domestic sectors. Our solutions are
            engineered to meet global standards, ensuring efficiency,
            environmental compliance, and long-term sustainability.
          </p>

          <p className="mt-4">
            Backed by a dedicated team of engineers, consultants, and field
            experts, we operate with a clear mission:
          </p>

          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>To help industries and communities manage water responsibly</li>
            <li>
              To provide end-to-end services including Consulting &amp;
              Engineering, Smart &amp; Green Technologies, EPC, O&amp;M, and AMC
            </li>
            <li>
              To create value through innovation, reliability, and a
              customer-first approach
            </li>
          </ul>

          <p className="mt-4">
            Today, B S Enviro stands as a trusted partner for industries across
            India, driving projects that not only treat water but also transform
            it into an opportunity for reuse and conservation.
          </p>

          <p className="mt-6">
            <strong>Our Vision:</strong> A future where every drop of water is
            valued, treated, and reused responsibly.
          </p>
          <p>
            <strong>Our Mission:</strong> To be the leading provider of
            innovative, cost-effective, and sustainable water solutions that
            empower businesses and protect the environment.
          </p>
          <p>
            <strong>Our Goal:</strong> To continuously advance water treatment
            technologies and create a lasting impact towards a cleaner, greener,
            and water-secure planet.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
