"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { popUpAnimationProps } from "@/animation/Framer";

interface FormData {
  fullName: string;
  email: string;
  contactNo: string;
  subject: string;
  message: string;
}

export default function contactUs() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    contactNo: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [responseType, setResponseType] = useState<"success" | "error" | null>(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form fields
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.contactNo ||
      !formData.subject ||
      !formData.message
    ) {
      setResponseType("error");
      setResponseMessage("Please fill all fields.");
      return;
    }

    setLoading(true);
    setResponseMessage("");
    setResponseType(null);

    try {
      const response = await fetch("./sendEmail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setResponseType("success");
        setResponseMessage(
          "✅ Email sent successfully! We'll get back to you soon."
        );
        setFormData({
          fullName: "",
          email: "",
          contactNo: "",
          subject: "",
          message: "",
        });
      } else {
        setResponseType("error");
        setResponseMessage(
          data.message || "❌ Failed to send email. Please try again."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseType("error");
      setResponseMessage("❌ An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
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
              <motion.h2 className="text-white font-montserrat font-bold text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl mb-4 mt-8 md:mt-0">
                Product Enquiry/
                <br className="hidden md:block" />
                <br />
                <span className=" text-white md:text-[#01959A]">Quotation</span>
              </motion.h2>
              <motion.p
                className="text-white md:text-[#233852] text-sm xl:text-lg 2xl:text-xl font-medium font-montserrat mt-8 xl:mt-12 mb-8"
                {...popUpAnimationProps}
              >
                Send us a message in case of any enquiry or visit our site
                office anytime.
              </motion.p>

              <motion.div
                className="space-y-3 text-white md:text-[#233852] text-sm xl:text-lg 2xl:text-xl font-medium font-montserrat"
                {...popUpAnimationProps}
              >
                <p className="flex items-center gap-2">
                  <FaMapMarkerAlt className="w-4 h-4" /> E-1069, 2nd Floor,
                  Sec-7, Dwarka New Delhi - 110077, INDIA
                </p>
                <div className="flex gap-2 items-start">
                  <BsFillTelephoneFill className="mt-2 w-4 h-4" />
                  <div className="flex flex-col space-y-3">
                    <p>+91-81309 25273</p>
                  </div>
                </div>
                <div className="flex gap-2 items-start">
                  <IoMdMail className="w-5 h-5" />
                  <div className="flex flex-col space-y-3">
                    <p>info@bsenviro.com</p>
                    <p>bsenvirodelhi@gmail.com</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="flex-1 bg-[#F5FAFE] rounded-lg shadow-md px-8 xl:px-20 py-8 md:py-10 ml-0 md:ml-8 xl:ml-28 mt-8 md:mt-0">
              <h3 className="text-2xl xl:text-4xl font-semibold font-montserrat text-[#01959A] text-center mb-8">
                Get A Free Consultation!
              </h3>

              {responseMessage && (
                <div
                  className={`p-4 rounded-md mb-6 text-center font-medium ${
                    responseType === "success"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {responseMessage}
                </div>
              )}

              <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="border bg-white border-gray-300 rounded-md px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#01959A]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border bg-white border-gray-300 rounded-md px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#01959A]"
                />
                <input
                  type="tel"
                  name="contactNo"
                  placeholder="Contact No."
                  value={formData.contactNo}
                  onChange={handleChange}
                  maxLength={10}
                  required
                  className="border bg-white border-gray-300 rounded-md px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#01959A]"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="border bg-white border-gray-300 rounded-md px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#01959A]"
                />
                <textarea
                  rows={4}
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="border bg-white border-gray-300 rounded-md px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#01959A] resize-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className={`self-end font-montserrat font-semibold text-white px-6 py-4 rounded-full flex items-center gap-2 transition-all ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#233852] hover:bg-[#01959A] cursor-pointer"
                  }`}
                >
                  {loading ? "Sending..." : "Submit →"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
