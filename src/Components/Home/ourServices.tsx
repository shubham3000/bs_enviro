"use client";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Image from "next/image";
import { IconChevronDown } from "@tabler/icons-react";
import services from "@/data/servicesData.json";

export default function OurServices() {
  return (
   <section className="relative w-screen overflow-hidden text-white py-16">
  {/* Background */}
  <div className="absolute inset-0">
    {/* Top Half - Blue */}
    <div className="h-1/2 bg-[#233852]" />

    {/* Bottom Half - White base with soft green tint on right corner */}
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

  {/* Foreground Content */}
  <div className="relative z-10 container mx-auto px-6 md:px-12 lg:py-12">
    <h2 className="text-4xl md:text-5xl xl:text-6xl font-semibold font-montserrat text-center mb-12 text-white">
      Our Services
    </h2>

    <Tabs>
      <TabList
        className="flex justify-start lg:justify-center overflow-x-auto xl:overflow-x-visible whitespace-nowrap space-x-6 md:space-x-12 mb-8 font-montserrat scrollbar-hide 2xl:justify-center"
      >
        {services.map((service, index) => (
          <Tab
            key={index}
            className="text-sm xl:text-base text-gray-400 font-bold py-2 px-4 border-b-2 border-transparent cursor-pointer focus:outline-none hover:border-white"
            selectedClassName="text-white border-white"
          >
            {service.title}
          </Tab>
        ))}
      </TabList>

      {services.map((service, index) => (
        <TabPanel key={index}>
          <ExpandableServiceCard service={service} />
        </TabPanel>
      ))}
    </Tabs>
  </div>
</section>

  );
}

interface ServiceApproach {
  title: string;
  content: string;
}

interface ServiceBenefit {
  content: string;
}

interface Service {
  title: string;
  heading: string;
  description: string;
  approach: ServiceApproach[];
  benefits?: ServiceBenefit[];
  image: any;
}

function ExpandableServiceCard({ service }: { service: Service }) {
  const [expanded, setExpanded] = React.useState(false);

  const visibleApproach = expanded
    ? service.approach
    : service.approach.slice(0, 2);

  return (
    <div className="bg-white text-[#233852] rounded-lg shadow-lg p-6 md:p-12 lg:p-20 flex flex-col lg:flex-row items-start">
      <div className="md:w-2/3 pr-6 lg:pr-12 order-2 lg:order-1">
        <h3 className="text-sm xl:text-base font-semibold text-[#01959A] mb-4 font-epilogue">
          {service.heading}
        </h3>

        <p className="text-lg xl:text-2xl font-semibold mb-4 font-montserrat">
          {service.description}
        </p>

        {service.approach && service.approach.length > 0 && (
          <>
            <h4 className="text-sm xl:text-lg font-bold mb-2 font-epilogue">
              Our Approach
            </h4>
            <ul className="list-disc pl-6 space-y-2 text-sm xl:text-base font-epilogue">
              {visibleApproach.map((item, idx) => (
                <li key={idx}>
                  <span className="font-semibold">{item.title}</span>
                  <br />
                  {item.content}
                </li>
              ))}
            </ul>
          </>
        )}

        {expanded && service.benefits && service.benefits.length > 0 && (
          <>
            <h4 className="text-sm xl:text-lg font-bold mb-2 font-epilogue mt-4">
              Key Benefits
            </h4>
            <ul className="list-disc pl-6 space-y-2 text-sm xl:text-base font-epilogue">
              {service.benefits.map((item, idx) => (
                <li key={idx}>{item.content}</li>
              ))}
            </ul>
          </>
        )}

        <button
          onClick={() => setExpanded(!expanded)}
          className="text-[#01959A] font-montserrat font-semibold text-sm xl:text-base mt-4 flex items-center cursor-pointer hover:underline"
        >
          {expanded ? "Read Less" : "Read More"}{" "}
          <span
            className={`transition-transform duration-300 ${
              expanded ? "rotate-180" : ""
            }`}
          >
            <IconChevronDown />
          </span>
        </button>
      </div>

      {/* Right Image */}
      <div className=" w-full lg:w-1/3 p-6 md:p-12 lg:p-0 pt-0 lg:pl-6 order-1 lg:order-2">
        <img
          src={service.image}
          alt="Service Image"
          className="rounded-lg"
          style={{
            filter: "drop-shadow(0px 0px 4px rgba(0,0,0,0.25))",
          }}
        />
      </div>
    </div>
  );
}
