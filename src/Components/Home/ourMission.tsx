"use client";
import React from "react";
import Image from "next/image";
import ValueImg from "@/assests/Icons/value.png";
import VisionImg from "@/assests/Icons/vision.png";
import MissionImg from "@/assests/Icons/mission.png";
import QualityImg from "@/assests/Icons/quality.png";
import { motion } from "framer-motion";
import { popUpAnimationProps, textAnimationProps } from "@/animation/Framer";

export default function OurMission() {
  return (
    <section className="w-screen overflow-hidden flex flex-col justify-center items-center relative">
      {/* Overflow Background */}
      <div className="bg-[#01959A] absolute top-0 left-0 w-full md:w-3/5 h-full -z-10"></div>
      <div className="md:bg-[#FFF] absolute top-0 right-0 w-full md:w-2/5 h-full -z-10"></div>
      <div className="container mx-auto">
        <div className="w-full md:flex md:justify-between">
          {/* Left Section */}
          <div className="w-full md:w-3/5 bg-[#01959A] text-white py-16 md:py-24 2xl:flex 2xl:justify-end 2xl:items-center">
            <div className="grid gap-12 xl:gap-24 md:grid-cols-2 px-4 md:px-12 xl:px-24">
              <motion.div
                className="flex flex-col gap-3 md:gap-4 xl:gap-6 font-montserrat"
                {...popUpAnimationProps}
              >
                <Image src={ValueImg} alt="Value" className="w-8 md:w-10 h-8 md:h-10 " />
                <div className="text-lg md:text-xl xl:text-3xl font-semibold">VALUE</div>
                <div className="border-t opacity-25 border-white w-full"></div>
                <p className="opacity-75 font-medium text-sm xl:text-lg">
                  We have understanding that our core values are nothing but the
                  foundation of our organisation.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col gap-3 md:gap-4 xl:gap-6 font-montserrat"
                {...popUpAnimationProps}
              >
                <Image src={VisionImg} alt="Vision" className="w-8 md:w-10 h-8 md:h-10 " />
                <div className="text-lg md:text-xl xl:text-3xl font-semibold">VISION</div>
                <div className="border-t opacity-25 border-white w-full"></div>
                <p className="opacity-75 font-medium text-sm xl:text-lg">
                  Water is one of the most precious resources of our planet. We
                  must protect it!
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col gap-3 md:gap-4 xl:gap-6 font-montserrat"
                {...popUpAnimationProps}
              >
                <Image src={MissionImg} alt="Mission" className="w-8 md:w-10 h-8 md:h-10 " />
                <div className="text-lg md:text-xl xl:text-3xl font-semibold">MISSION</div>
                <div className="border-t opacity-25 border-white w-full"></div>
                <p className="opacity-75 font-medium text-sm xl:text-lg">
                  To be known as a company feeling responsible for water
                  globally. Lets care together!
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col gap-3 md:gap-4 xl:gap-6 font-montserrat"
                {...popUpAnimationProps}
              >
                <Image src={QualityImg} alt="Quality" className="w-8 md:w-10 h-8 md:h-10 " />
                <div className="text-lg md:text-xl xl:text-3xl font-semibold">QUALITY</div>
                <div className="border-t opacity-25 border-white w-full"></div>
                <p className="opacity-75 font-medium text-sm xl:text-lg">
                  BS Enviro system, services quality & customers satisfaction is
                  the primary goal of our company.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full bg-white md:w-2/5 py-8 md:py-0 px-4 md:px-12 xl:px-24 flex flex-col justify-center border-b-[1px] md:border-b-0 border-b-[#2C3745]">
            <motion.h2
              className="text-4xl md:text-5xl xl:text-6xl text-[#0195B1] font-semibold font-montserrat"
              {...textAnimationProps}
            >
              Our <br /> Mission
            </motion.h2>
            <motion.p
              className="mt-6 text-sm xl:text-lg font-medium text-[#233852] font-epilogue"
              {...textAnimationProps}
            >
              At B S Enviro & Infracon Pvt Ltd, our mission is to be a globally
              trusted name in water treatment and conservation. We’re dedicated
              to providing cutting-edge, sustainable, and efficient solutions to
              industrial and municipal water challenges. By enabling recycling,
              reuse, and revitalization of wastewater, we strive to preserve our
              planet’s most precious resource—together.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
