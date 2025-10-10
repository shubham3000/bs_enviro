"use client";
import { IconArrowDown } from "@tabler/icons-react";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function hero() {
  return (
    <>
      <motion.section
        className="w-screen overflow-hidden flex flex-col justify-center items-center"
        style={{
          backgroundImage: "url('/assests/Homeherobg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100vw",
        }}
      >
        <div className="container h-full flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <motion.h1
              className="text-center font-bold font-montserrat text-3xl md:text-5xl xl:text-7xl px-2 md:px-0 text-white max-w-4xl xl:max-w-7xl"
              initial={{ y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              A Complete <br /> Water & Waste Water Solution
            </motion.h1>
            <motion.h3
              className="text-center px-2 md:px-4 mt-8 xl:mt-12 text-white font-epilogue text-sm md:text-lg xl:text-2xl max-w-3xl xl:max-w-5xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Designing and Installing Sewage Treatment, UF/UV/RO & Water Supply
              Systems Tailored for Industrial, Residential & Municipal Needs
            </motion.h3>
          </div>
          <motion.div
            className="absolute bottom-8 text-white font-montserrat font-semibold text-sm xl:text-lg gap-2 cursor-pointer"
            initial={{ opacity: 0, scale: 0.5, y: 80 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
            viewport={{
              once: true,
            }}
          >
            <Link href="#VisionMissionGoal" scroll={true} className="flex justify-center items-center">
              <p>Scroll Down</p>
              <IconArrowDown />
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
