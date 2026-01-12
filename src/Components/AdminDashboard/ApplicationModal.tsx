"use client";
import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase.config";

interface ApplicationModalProps {
  jobId: string;
  jobTitle: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function ApplicationModal({
  jobId,
  jobTitle,
  isOpen,
  onClose,
}: ApplicationModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // Validate fields
      if (
        !formData.fullName ||
        !formData.email ||
        !formData.phone ||
        !formData.coverLetter
      ) {
        setMessage("Please fill in all fields.");
        setLoading(false);
        return;
      }

      // Validate email
      if (!formData.email.includes("@")) {
        setMessage("Please enter a valid email.");
        setLoading(false);
        return;
      }

      // Save to Firestore
      const applicationsRef = collection(db, "applications");
      const docRef = await addDoc(applicationsRef, {
        jobId,
        jobTitle,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        coverLetter: formData.coverLetter,
        appliedAt: serverTimestamp(),
        status: "pending",
      });

      console.log("Application saved with ID:", docRef.id);

      // Send email
      const emailResponse = await fetch("/php/sendApplication.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jobId: jobId,
          applicantName: formData.fullName,
          applicantEmail: formData.email,
          applicantPhone: formData.phone,
          jobTitle,
          coverLetter: formData.coverLetter,
        }),
      });

      const result = await emailResponse.json();

      if (result.success) {
        setMessage("✅ Application submitted successfully! We'll contact you soon.");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          coverLetter: "",
        });
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        setMessage(result.message || "Failed to submit application. Please try again.");
      }
    } catch (error: any) {
      console.error("Error submitting application:", error);
      setMessage("Error submitting application. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-[#01959A]">Apply for Job</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ✕
          </button>
        </div>

        <p className="text-gray-600 mb-4">
          <strong>Position:</strong> {jobTitle}
        </p>

        {message && (
          <p
            className={`mb-4 text-center font-medium ${
              message.includes("✅")
                ? "text-green-600"
                : message.includes("Error")
                ? "text-red-600"
                : "text-gray-600"
            }`}
          >
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#01959A]"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#01959A]"
              placeholder="Your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#01959A]"
              placeholder="Your phone number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cover Letter / Message *
            </label>
            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              required
              rows={4}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#01959A]"
              placeholder="Tell us why you're interested in this position..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 text-white font-semibold rounded-lg transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#01959A] hover:bg-[#017f82]"
            }`}
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-full py-2 text-gray-700 font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
