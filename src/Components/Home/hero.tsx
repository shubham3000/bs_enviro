"use client";
import { IconArrowDown } from "@tabler/icons-react";
import React from "react";
import { motion } from "framer-motion";

export default function hero() {
  return (
    <>
      <motion.section
        className="container mx-auto max-w-full flex flex-col justify-center items-center relative"
        style={{
          backgroundImage: "url('/assests/Homeherobg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <motion.h1
            className="font-montserrat text-center font-bold text-7xl text-white max-w-7xl"
            initial={{ y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Advanced Industrial & Municipal Water Treatment Solutions
          </motion.h1>
          <motion.h3
            className="font-epilogue text-center px-4 mt-12 text-white text-lg md:text-2xl max-w-5xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Designing and Installing Sewage Treatment, UF/UV/RO & Water Supply
            Systems Tailored for Industrial, Residential & Municipal Needs
          </motion.h3>
        </div>
        <motion.div
          className=" absolute bottom-8 text-white font-montserrat font-semibold text-lg flex justify-center items-center gap-2 cursor-pointer"
          initial={{ opacity: 0, scale: 0.5, y: 80 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
          viewport={{
            once: true,
          }}
        >
          <p>Scroll Down</p>
          <IconArrowDown />
        </motion.div>
      </motion.section>
    </>
  );
}
