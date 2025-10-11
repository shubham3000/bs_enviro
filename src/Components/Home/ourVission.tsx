"use client";
import React from "react";
import { motion } from "framer-motion";
import { popUpAnimationProps } from "@/animation/Framer";

export default function ourVission() {
  return (
    <section
      className="w-screen py-16 md:py-24  px-4 md:px-12 xl:px-24 bg-white relative"
      id="VisionMissionGoal"
    >
      <div className="absolute inset-0">
        <div className="h-full bg-white relative">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 80% 80%, rgba(117, 181, 183, 0.5), transparent 60%)",
            }}
          ></div>
        </div>
      </div>
      <div className="relative z-10 container mx-auto flex flex-col gap-16">
        <div className="w-full">
          <div className="lg:w-1/2">
            <div className=" border-l-2 pl-4 border-[#008EC1]">
              <motion.h1
                className="text-[#0195B1] text-4xl md:text-5xl xl:text-6xl font-semibold text-left font-montserrat"
                {...popUpAnimationProps}
              >
                Vision
              </motion.h1>
              <motion.p
                className="text-sm xl:text-lg text-[#233852] font-normal lg:w-5/6 md:pl-4 md:text-left mt-4 xl:mt-8 font-epilogue"
                {...popUpAnimationProps}
              >
                Our Vision is to become a world class company in the field of
                Water Management technology. We want to achieve the top most
                position in the area of Water Management technology and service
                providers.
              </motion.p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <div className="lg:w-1/2">
            <div className=" border-l-2 pl-4 border-[#008EC1]">
              <motion.h1
                className="text-[#0195B1] text-4xl md:text-5xl xl:text-6xl font-semibold text-left font-montserrat"
                {...popUpAnimationProps}
              >
                Mission
              </motion.h1>
              <motion.p
                className="text-sm xl:text-lg text-[#233852] font-normal lg:w-5/6 md:pl-4 md:text-left mt-4 xl:mt-8 font-epilogue"
                {...popUpAnimationProps}
              >
                Our Mission is to fully integrate environmental stewardship into
                our business by minimizing waste water disposal and maximizing
                recycling and recovery for our customers.
              </motion.p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="lg:w-1/2">
            <div className=" border-l-2 pl-4 border-[#008EC1]">
              <motion.h1
                className="text-[#0195B1] text-4xl md:text-5xl xl:text-6xl font-semibold text-left font-montserrat"
                {...popUpAnimationProps}
              >
                Vision
              </motion.h1>
              <motion.p
                className="text-sm xl:text-lg text-[#233852] font-normal lg:w-5/6 md:pl-4 md:text-left mt-4 xl:mt-8 font-epilogue"
                {...popUpAnimationProps}
              >
                Our Vision is to become a world class company in the field of
                Water Management technology. We want to achieve the top most
                position in the area of Water Management technology and service
                providers.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
