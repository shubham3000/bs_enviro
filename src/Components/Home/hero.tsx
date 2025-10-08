"use client";
import { IconArrowDown } from "@tabler/icons-react";
import React from "react";
import { motion } from "framer-motion";

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
              className="text-center font-bold text-5xl xl:text-7xl text-white max-w-4xl xl:max-w-7xl"
              style={{ fontFamily: "Montserrat" }}
              initial={{ y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Advanced Industrial & Municipal Water Treatment Solutions
            </motion.h1>
            <motion.h3
              className="text-center px-4 mt-8 xl:mt-12 text-white text-lg xl:text-2xl max-w-3xl xl:max-w-5xl"
              style={{ fontFamily: "Epilogue" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Designing and Installing Sewage Treatment, UF/UV/RO & Water Supply
              Systems Tailored for Industrial, Residential & Municipal Needs
            </motion.h3>
          </div>
          <motion.div
            className="absolute bottom-8 text-white font-semibold text-sm xl:text-lg flex justify-center items-center gap-2 cursor-pointer"
            style={{ fontFamily: "Montserrat" }}
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
        </div>
      </motion.section>
    </>
  );
}
