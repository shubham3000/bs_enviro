"use client";

import React, { useRef, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { motion } from "framer-motion";
import { textAnimationProps } from "@/animation/Framer";
import Image, { StaticImageData } from "next/image";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { disinfectionUnit } from "@/data/disinfectionUnitdata";


interface TabData {
  id: string;
  label: string;
  title: string;
  image?: StaticImageData;
  description?: string;
}

const DisinfectionUnit: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const tabSectionRef = useRef<HTMLDivElement | null>(null);

  const handleNext = () => {
    if (tabIndex < disinfectionUnit.length - 1) {
      setTabIndex(tabIndex + 1);
      scrollToTabs();
    }
  };

  const handlePrev = () => {
    if (tabIndex > 0) {
      setTabIndex(tabIndex - 1);
      scrollToTabs();
    }
  };

  const scrollToTabs = () => {
    tabSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      ref={tabSectionRef}
      className="w-screen min-h-screen pb-16 md:pb-24 px-4 md:px-12 xl:px-24 bg-white overflow-hidden"
    >
      <div className="container mx-auto">
        <Tabs selectedIndex={tabIndex} onSelect={setTabIndex}>
          <TabList className="flex border-b border-gray-300 mb-6 overflow-x-auto no-scrollbar mt-2 lg:mt-6 w-full">
            {disinfectionUnit.map((tab: TabData) => (
              <Tab
                key={tab.id}
                className="flex-1 text-center px-4 py-3 text-base md:text-lg xl:text-xl text-[#233852] cursor-pointer hover:text-[#0195B1] focus:outline-none whitespace-nowrap transition-colors duration-300 font-montserrat font-semibold"
                selectedClassName="border-b-4 border-[#0195B1] !text-[#0195B1] font-semibold"
              >
                {tab.label}
              </Tab>
            ))}
          </TabList>

          {disinfectionUnit.map((tab: TabData, index: number) => (
            <TabPanel key={tab.id}>
              <div className="space-y-8 mt-8">
                {tab.image && (
                  <div className="flex justify-center">
                    <Image
                      src={tab.image}
                      alt={tab.label}
                      className="w-full md:max-w-4xl rounded-2xl shadow-lg"
                    />
                  </div>
                )}

                <motion.h2
                  className="text-3xl md:text-5xl xl:text-6xl text-[#0195B1] font-semibold font-montserrat mt-12"
                  {...textAnimationProps}
                >
                  {tab.title}
                </motion.h2>

                {tab.description && (
                  <div
                    className="text-base md:text-lg leading-relaxed text-[#233852] font-epilogue font-normal text-justify space-y-4"
                    dangerouslySetInnerHTML={{ __html: tab.description }}
                  />
                )}
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-12 w-full">
                                {index > 0 ? (
                                    <button
                                        onClick={handlePrev}
                                        className="flex justify-center items-center gap-1.5 bg-[#233852] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-[#0195B1] transition-all duration-300 font-montserrat cursor-pointer text-sm sm:text-base w-full md:w-auto text-center whitespace-normal break-words"
                                    >
                                        <FaArrowLeftLong /> Previous:{" "}
                                        {disinfectionUnit[index - 1].label}
                                    </button>
                                ) : (
                                    <div className="w-full md:w-auto" />
                                )}

                                {index < disinfectionUnit.length - 1 && (
                                    <button
                                        onClick={handleNext}
                                        className="flex justify-center items-center gap-1.5 bg-[#0195B1] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-[#233852] transition-all duration-300 font-montserrat cursor-pointer text-sm sm:text-base w-full md:w-auto text-center whitespace-normal break-words"
                                    >
                                        Next: {disinfectionUnit[index + 1].label}{" "}
                                        <FaArrowRightLong />
                                    </button>
                                )}
                            </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default DisinfectionUnit;
