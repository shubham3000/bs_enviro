"use client";
import React from "react";
import { motion } from "framer-motion";
import { textAnimationProps } from "@/animation/Framer";
import ourSolution1 from "@/assests/WasteWater.png";
import ourSolution2 from "@/assests/WaterTreatment.png";
import ourSolution3 from "@/assests/Chemicals.png";
import ourSolution4 from "@/assests/AirPollution.png";
import Image from "next/image";

export default function ourSolution() {
  return (
    <>
      <section className="w-screen h-auto py-16 md:py-24 px-4 md:px-12 xl:px-24 md:pb-96 bg-[#F5FAFE]">
        <div className="container mx-auto">
          <div className="w-full flex flex-col md:items-end">
            <div className=" w-1/2">
              <motion.h1
                className="text-4xl md:text-5xl xl:text-6xl text-[#0195B1] font-semibold font-montserrat mt-4 text-left "
                {...textAnimationProps}
              >
                Our <br /> Solutions
              </motion.h1>
            </div>
            <div className="md:relative flex flex-col justify-center mt-8">
              <div className="md:w-1/2 text-gray-600 flex flex-col gap-14 md:gap-32  ">
                <div className="flex flex-col gap-4 lg:gap-8">
                  <Image
                    src={ourSolution1}
                    alt="Community Circle"
                    className="h-auto w-2/6"
                  />
                  <motion.h1
                    className="text-lg lg:text-2xl xl:text-4xl text-[#233852] font-semibold font-montserrat"
                    {...textAnimationProps}
                  >
                    Waste Water Treatment
                  </motion.h1>
                  <motion.p
                    className="text-sm lg:text-base xl:text-xl lg:w-3/4 border-l-2 border-[#0195B1] pl-4 md:text-left"
                    {...textAnimationProps}
                  >
                    B S Enviro provides reliable sewage treatment and recycling
                    solutions for residential, commercial, and industrial needs,
                    ensuring clean water, compliance with standards, and
                    sustainable resource management.
                  </motion.p>
                </div>
                <div className="flex flex-col gap-4 lg:gap-8">
                  <Image
                    src={ourSolution2}
                    alt="Community Circle"
                    className="h-auto w-2/6"
                  />
                  <motion.h1
                    className="text-lg lg:text-2xl xl:text-4xl text-[#233852] font-semibold font-arimo"
                    {...textAnimationProps}
                  >
                    Water Treatment Plant
                  </motion.h1>
                  <motion.p
                    className="text-sm lg:text-base xl:text-xl lg:w-3/4 border-l-2 border-[#0195B1] pl-4 md:text-left font-arimo"
                    {...textAnimationProps}
                  >
                    Our robust Water Treatment Plants use proven filtration
                    methods like PSF, ACF, and RO to deliver pure, safe, and
                    sustainable water for industries, institutions, and
                    communities.{" "}
                  </motion.p>
                </div>
              </div>
              <div className="md:absolute md:right-0 md:top-20 xl:top-44 md:w-1/2 mt-16 md:pl-12 text-gray-600 flex flex-col gap-14 md:gap-32">
                <div className="flex flex-col gap-4 lg:gap-8">
                  <Image
                    src={ourSolution3}
                    alt="Community Circle"
                    className="h-auto w-2/6"
                  />
                  <motion.h1
                    className="text-lg lg:text-2xl xl:text-4xl text-[#233852] font-semibold font-arimo"
                    {...textAnimationProps}
                  >
                    Chemicals & Consumables
                  </motion.h1>
                  <motion.p
                    className="text-sm lg:text-base xl:text-xl lg:w-3/4 border-l-2 border-[#0195B1] pl-4 md:text-left font-arimo"
                    {...textAnimationProps}
                  >
                    We supply premium chemicals, pumping solutions, and
                    consumables tailored to customer needs, ensuring efficient
                    performance, cost-effectiveness, and long-term reliability
                    in water treatment and plant operations.
                  </motion.p>
                </div>
                <div className="flex flex-col gap-4 lg:gap-8">
                  <Image
                    src={ourSolution4}
                    alt="Community Circle"
                    className="h-auto w-2/6"
                  />
                  <motion.h1
                    className="text-lg lg:text-2xl xl:text-4xl text-[#233852] font-semibold font-arimo"
                    {...textAnimationProps}
                  >
                    Air Pollution Control
                  </motion.h1>
                  <motion.p
                    className="text-sm lg:text-base xl:text-xl lg:w-3/4 border-l-2 border-[#0195B1] pl-4 md:text-left font-arimo"
                    {...textAnimationProps}
                  >
                    B S Enviro designs efficient Air Pollution Control systems
                    like bag filters and scrubbers, ensuring emission
                    compliance, reducing harmful gases, and promoting healthier,
                    cleaner air for industries.
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
