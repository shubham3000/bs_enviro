"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { textAnimationProps } from "@/animation/Framer";
import CountUp from 'react-countup';

export default function ourJourney() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <section className="w-screen overflow-hidden flex flex-col justify-center items-center bg-[#01959A]" ref={ref}>
        <div className="container mx-auto py-16 md:py-24">
          <div className="w-full flex flex-col justify-center items-center">
            <motion.h2
              className="text-4xl md:text-5xl xl:text-6xl text-white font-semibold font-montserrat"
              {...textAnimationProps}
            >
              Our Journey...
            </motion.h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mt-12 xl:mt-24">
              <div className="flex flex-col justify-center items-center gap-4">
                <h2 className="font-montserrat font-semibold text-3xl xl:text-8xl text-white">
                  {isInView ? <CountUp end={10} duration={2} /> : 0}+
                </h2>
                <p className="font-montserrat font-medium text-base xl:text-2xl text-white">
                  Satisfied Clients
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-4 md:border-l md:border-r border-gray-400 px-8 md:px-16">
                <h2 className="font-montserrat font-semibold text-3xl xl:text-8xl text-white">
                  {isInView ? <CountUp end={new Date().getFullYear() - 2002} duration={2} /> : 0}+
                </h2>
                <p className="font-montserrat font-medium text-base xl:text-2xl text-white">
                  Year's of Experience
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                <h2 className="font-montserrat font-semibold text-3xl xl:text-8xl text-white">
                  {isInView ? <CountUp end={100} duration={2} /> : 0}+
                </h2>
                <p className="font-montserrat font-medium text-base xl:text-2xl text-white">
                  Successfull Projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
