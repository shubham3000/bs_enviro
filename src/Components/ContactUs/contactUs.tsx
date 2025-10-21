"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

export default function contactUs() {
  const router = useRouter();
  return (
    <>
      <section className="relative w-screen overflow-hidden pt-24 pb-32 md:pb-52 xl:pb-64 md:pt-44 px-4 md:px-12 xl:px-24 ">
        <div className="absolute inset-0">
        <div className="h-1/2 bg-[#01959A]" />
        <div className="h-1/2 bg-white relative">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 80% 80%, rgba(117, 181, 183, 0.5), transparent 60%)",
            }}
          ></div>
        </div>
      </div>
        <div className="relative z-10 container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="flex flex-col gap-6 lg:gap-16">
              <button
                onClick={() => router.back()}
                aria-label="Go back"
                className="flex items-center gap-2 text-white hover:text-gray-200 transition-colors duration-300 hover:translate-x-[-2px] cursor-pointer"
              >
                <FaArrowLeftLong className="w-8 h-8 " />
                <span className="font-montserrat font-medium">Go Back</span>
              </button>
              <h1 className="text-white font-montserrat font-bold text-4xl md:text-4xl xl:text-6xl leading-tight">
                Contact Us
              </h1>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
            <div className="flex-1 md:relative md:top-60">
              <h2 className="text-white font-montserrat font-bold text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl mb-4 mt-8 md:mt-0">
                Product Enquiry/
                <br className="hidden md:block" />
                <br/>
                <span className=" text-white md:text-[#01959A]">Quotation</span>
              </h2>
              <p className="text-white md:text-[#233852] text-sm xl:text-lg 2xl:text-xl font-medium font-montserrat mt-8 xl:mt-12 mb-8">
                Send us a message in case of any enquiry or visit our site
                office anytime.
              </p>

              <motion.div className="space-y-3 text-white md:text-[#233852] text-sm xl:text-lg 2xl:text-xl font-medium font-montserrat">
                <p className="flex items-center gap-2">
                  <FaMapMarkerAlt className="w-4 h-4" /> E-1069, 2nd Floor,
                  Sec-7, Dwarka New Delhi - 110077 INDIA
                </p>
                <div className="flex gap-2 items-start">
                  <BsFillTelephoneFill className="mt-2 w-4 h-4" />
                  <div className="flex flex-col space-y-3">
                    <p>+91-11414 11203</p>
                    <p>+91-81309 25273</p>
                  </div>
                </div>
                <div className="flex gap-2 items-start">
                  <IoMdMail className="w-5 h-5" />
                  <div className="flex flex-col space-y-3">
                    <p>sales@bsenviro.com</p>
                    <p>bsenvirodelhi@gmail.com</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="flex-1 bg-[#F5FAFE] rounded-lg shadow-md px-8 xl:px-20 py-8 md:py-10 ml-0 md:ml-8 xl:ml-28 mt-8 md:mt-0">
              <h3 className="text-2xl xl:text-4xl font-semibold font-montserrat text-[#01959A] text-center mb-8">
                Get A Free Consultation!
              </h3>
              <form className="flex flex-col gap-8">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border bg-white border-gray-300 rounded-md px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#01959A]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border bg-white border-gray-300 rounded-md px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#01959A]"
                />
                <input
                  type="tel"
                  placeholder="Contact No."
                  className="border bg-white border-gray-300 rounded-md px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#01959A]"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="border bg-white border-gray-300 rounded-md px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#01959A]"
                />
                <textarea
                  rows={4}
                  placeholder="Message"
                  className="border bg-white border-gray-300 rounded-md px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#01959A] resize-none"
                />
                <button
                  type="submit"
                  className="self-end bg-[#233852] font-montserrat font-semibold text-white px-6 py-4 rounded-full flex items-center gap-2 hover:bg-[#01959A] cursor-pointer transition-all"
                >
                  Submit →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
