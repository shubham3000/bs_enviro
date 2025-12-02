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
        <motion.div className="font-epilogue font-normal text-[#233852] text-sm md:text-lg xl:text-xl">
          <p>
            Established in 2002 as B S Engineers, we began with a focus on
            delivering reliable engineering solutions. In 2012, we restructured
            as B S Enviro N Infracon Pvt. Ltd. to specialize in sustainable
            environmental and wastewater management With the mission to Recycle,
            Reduce & Reuse, we now operate Pan-India, providing high-performance
            water and wastewater treatment solutions across domestic,
            commercial, and industrial sectors. Supported by a dedicated team
            with 20+ years of combined expertise, we excel in designing,
            executing, and maintaining advanced treatment systems.
          </p>
          <p className="mt-4">Our complete solutions include:</p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Sewage Treatment Plants (STP)</li>
            <li>Effluent Treatment Plants (ETP) </li>
            <li>Water Treatment Plants (WTP) </li>
            <li>Ultrafiltration Systems(UF) </li>
            <li>Reverse Osmosis Systems (RO) </li>
            <li>Operation & Maintenance Services (O&M) </li>
          </ul>
          <p className="mt-4">
            From concept to commissioning, we deliver precision, innovation, and
            consistent quality.
          </p>
          <p className="mt-4">
            We proudly serve leading clients like{" "}
            <strong>
              CPWD, PWD, UPRNN, HAL, Shapoorji & Pallonji, Varindera
              Constructions, RKS Constructions, NPCIL, RITES, EIL, NBCC, L&T,
              Ahluwalia Contracts, BMSICL and many others.
            </strong>
          </p>
          <p className="mt-4">
            Our success comes from providing reliable, efficient, and
            sustainable solutions that support cleaner environments across
            India. At B S Enviro N Infracon Pvt. Ltd., we stand for quality,
            commitment, and engineering excellence—working towards a greener
            future with every project.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
