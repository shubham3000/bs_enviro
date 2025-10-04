import React from "react";
import Image from "next/image";
import ValueImg from "@/assests/Icons/value.png";
import VisionImg from "@/assests/Icons/vision.png";
import MissionImg from "@/assests/Icons/mission.png";
import QualityImg from "@/assests/Icons/quality.png";

export default function OurMission() {
  return (
    <section className="container mx-auto max-w-full flex flex-col md:flex-row text-white">
      {/* Left Section */}
      <div className=" bg-[#01959A] text-white py-24 px-8 w-3/4">
        {/* Overflow Background */}
        {/* <div className="absolute top-0 left-0 w-3/4 h-full -z-10"></div> */}

        <div className="grid gap-24 grid-cols-2 px-24">
          <div className="flex flex-col gap-6">
            <Image src={ValueImg} alt="Value" className="w-10 h-10 " />
            <div className="text-3xl font-montserrat font-semibold">VALUE</div>
            <div className="border-t opacity-25 border-white w-full"></div>
            <p className="font-montserrat opacity-75 font-medium text-lg">
              We have understanding that our core values are nothing but the foundation of our organisation.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <Image src={VisionImg} alt="Vision" className="w-10 h-10 "/>
            <div className="text-3xl font-montserrat font-semibold">VISION</div>
            <div className="border-t opacity-25 border-white w-full"></div>
            <p className="font-montserrat opacity-75 font-medium text-lg">
              Water is one of the most precious resources of our planet. We must protect it!
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <Image src={MissionImg} alt="Mission" className="w-10 h-10 " />
            <div className="text-3xl font-montserrat font-semibold">MISSION</div>
            <div className="border-t opacity-25 border-white w-full"></div>
            <p className="font-montserrat opacity-75 font-medium text-lg">
              To be known as a company feeling responsible for water globally. Lets care together!
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <Image src={QualityImg} alt="Quality" className="w-10 h-10 " />
            <div className="text-3xl font-montserrat font-semibold">QUALITY</div>
            <div className="border-t opacity-25 border-white w-full"></div>
            <p className="font-montserrat opacity-75 font-medium text-lg">
              BS Enviro system, services quality & customers satisfaction is the primary goal of our company.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 px-24 w-1/4 bg-white flex flex-col justify-center">
        <h2 className="text-6xl text-[#0195B1] font-semibold font-montserrat">Our <br/> Mission</h2>
        <p className="mt-6 text-lg font-medium font-epilogue text-[#233852]">
          At B S Enviro & Infracon Pvt Ltd, our mission is to be a globally
          trusted name in water treatment and conservation. We’re dedicated to
          providing cutting-edge, sustainable, and efficient solutions to
          industrial and municipal water challenges. By enabling recycling,
          reuse, and revitalization of wastewater, we strive to preserve our
          planet’s most precious resource—together.
        </p>
      </div>
    </section>
  );
}
