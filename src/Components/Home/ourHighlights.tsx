"use client";
import React from "react";
import { motion } from "framer-motion";
import { textAnimationProps } from "@/animation/Framer";
import Highlights from "@/assests/highlights.png";
import Image from "next/image";

export default function ourHighlights() {
  return (
    <section className="w-screen overflow-hidden flex flex-col justify-center items-center bg-white">
      <div className="container mx-auto py-16 md:py-24 px-4 md:px-12 xl:px-24">
        <div className="w-full flex flex-col justify-center">
          <motion.h2
            className="text-4xl md:text-5xl xl:text-6xl text-[#0195B1] font-semibold font-montserrat"
            {...textAnimationProps}
          >
            Our Highlights
          </motion.h2>
          <div className="w-full flex flex-col lg:flex-row mt-16 gap-24">
            <div className="lg:w-1/2 flex justify-center items-center">
              <Image src={Highlights} alt="Key Highlights" className="w-96 lg:w-full" />
            </div>
            <div className="lg:w-1/2 flex flex-col gap-16">
              <div className="">
                <motion.h1
                  className="text-[#0195B1] text-2xl xl:text-4xl  font-semibold text-left font-montserrat"
                  {...textAnimationProps}
                >
                  Clean Water Transformation
                </motion.h1>
                <motion.p
                  className="text-base xl:text-xl text-[#233852] border-l-2 border-[#0195B1] pl-4 md:text-left mt-6 xl:mt-8 font-epilogue"
                  {...textAnimationProps}
                >
                  We convert wastewater into clean, reusable water through
                  advanced treatment technologies.
                </motion.p>
              </div>
              <div className="">
                <motion.h1
                  className="text-[#0195B1] text-2xl xl:text-4xl font-semibold text-left font-montserrat"
                  {...textAnimationProps}
                >
                  Sustainability Commitment
                </motion.h1>
                <motion.p
                  className="text-base xl:text-xl text-[#233852] border-l-2 border-[#0195B1] pl-4 md:text-left mt-6 xl:mt-8 font-epilogue"
                  {...textAnimationProps}
                >
                  Every drop recycled supports a greener future and reduces
                  environmental impact.
                </motion.p>
              </div>
              <div className="">
                <motion.h1
                  className="text-[#0195B1] text-2xl xl:text-4xl font-semibold text-left font-montserrat"
                  {...textAnimationProps}
                >
                  100 Million Litres Recycled Daily
                </motion.h1>
                <motion.p
                  className="text-base xl:text-xl text-[#233852] border-l-2 border-[#0195B1] pl-4 md:text-left mt-6 xl:mt-8 font-epilogue"
                  {...textAnimationProps}
                >
                  Our operations reclaim over 100 million litres of wastewater
                  every day—preserving vital resources at scale.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
