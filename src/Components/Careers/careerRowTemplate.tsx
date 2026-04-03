"use client";
import React, { useRef } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../../firebase.config";
import { useState, useEffect } from "react";
import { fadeInAnimationCompanies } from "@/animation/Framer";
import { motion } from "framer-motion";
import ApplicationModal from "../AdminDashboard/ApplicationModal";

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  description: string;
  createdAt: any;
}

interface ExpandedState {
  [key: string]: boolean;
}

export default function CareerRowTemplate() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedJobs, setExpandedJobs] = useState<ExpandedState>({});
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [selectedJobForApplication, setSelectedJobForApplication] = useState<any>(null); // Number of jobs to show per page

  // Get current jobs
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  const handleApplyClick = (job: Job) => {
    setSelectedJobForApplication(job);
    setShowApplicationModal(true);
  };

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobsRef = collection(db, "jobs");
        const q = query(jobsRef, orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);

        const jobsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Job[];

        setJobs(jobsData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError("Failed to load job listings. Please try again later.");
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20 bg-white w-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#01959A]"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center py-20 text-red-600">{error}</div>;
  }

  if (jobs.length === 0) {
    return (
      <div className="text-center py-20 bg-white w-screen text-gray-600">
        No job openings available at the moment.
      </div>
    );
  }

  return (
    <>
      <ApplicationModal
        jobId={selectedJobForApplication?.id || ""}
        jobTitle={selectedJobForApplication?.title || ""}
        isOpen={showApplicationModal}
        onClose={() => setShowApplicationModal(false)}
      />
      <section className="w-screen bg-white py-16 md:py-24 px-4 md:px-12 xl:px-24">
      <div className="container mx-auto">
        <div className="space-y-6">
          {currentJobs.map((job, index) => (
            <motion.div
              key={job.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100"
              variants={{ ...fadeInAnimationCompanies }}
              initial="initial"
              whileInView="animate"
              custom={index}
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-3xl font-semibold text-[#01959A] mb-2 font-montserrat">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-gray-600 mb-4 font-epilogue font-semibold">
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                        <span>{job.department}</span>
                      </div>
                      <div
                        className="flex items-center font-epilogue font-semibold"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span>{job.location}</span>
                      </div>
                    </div>
                    <div className="relative">
                      <div
                        className={`prose max-w-none text-gray-600 mb-4 overflow-hidden transition-all duration-300 ease-in-out${
                          !expandedJobs[job.id] ? " h-[90px]" : ""
                        }`}
                      >
                        <style>
                          {`
                          .job-description-${job.id} table {
                            border-collapse: collapse;
                            width: 100%;
                            margin: 1rem 0;
                          }
                          .job-description-${job.id} table td,
                          .job-description-${job.id} table th {
                            border: 1px solid #000;
                            padding: 8px;
                          }
                          .job-description-${job.id} table th {
                            background-color: #f8f8f8;
                          }
                          .job-description-${job.id} ul,
                          .job-description-${job.id} ol{
                            margin-left: 1.5rem;
                          }
                          .job-description-${job.id} li{
                           list-style-type: disc;
                          }
                        `}
                        </style>
                        <p className="font-epilogue font-semibold">
                          Job Description:
                        </p>
                        <br />
                        <div
                          className={`job-description-${job.id} font-epilogue`}
                          dangerouslySetInnerHTML={{ __html: job.description }}
                        />
                      </div>
                      <div className="text-center mt-2">
                        <button
                          onClick={() =>
                            setExpandedJobs((prev) => ({
                              ...prev,
                              [job.id]: !prev[job.id],
                            }))
                          }
                          className="text-[#01959A] hover:text-[#017f82] font-medium inline-flex items-center gap-1 cursor-pointer"
                        >
                          {!expandedJobs[job.id] ? (
                            <>
                              Read More Details
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </>
                          ) : (
                            <>
                              Show Less
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 15l7-7 7 7"
                                />
                              </svg>
                            </>
                          )}
                        </button>
                      </div>
                      {!expandedJobs[job.id] && (
                        <div className="absolute bottom-0 left-0 right-0 h-16 to-transparent pointer-events-none" />
                      )}
                    </div>
                  </div>
                  <div className="w-full md:w-auto mt-4 md:mt-0">
                    <button
                      onClick={() => handleApplyClick(job)}
                      className="w-full md:w-auto px-6 py-3 bg-[#01959A] hover:bg-[#017f82] text-white font-semibold rounded-md transition-colors duration-300"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mt-8">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-md ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-[#01959A] text-white hover:bg-[#017f82]"
              } transition-colors duration-300`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Page numbers */}
            <div className="flex items-center space-x-1">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                    currentPage === index + 1
                      ? "bg-[#01959A] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-md ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-[#01959A] text-white hover:bg-[#017f82]"
              } transition-colors duration-300`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        )}

        {/* Jobs count */}
        <div className="text-center text-gray-600 mt-4">
          Showing {indexOfFirstJob + 1}-{Math.min(indexOfLastJob, jobs.length)}{" "}
          of {jobs.length} jobs
        </div>
      </div>
    </section>
    </>
  );
}
