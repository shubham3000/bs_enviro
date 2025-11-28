"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import dynamic from "next/dynamic";

const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
});

import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
  query,
  limit,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../../firebase.config";

export default function Dashboard() {
  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [location, setLocation] = useState("");
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [editingJob, setEditingJob] = useState<any>(null);
  const [content, setContent] = useState("");

  const router = useRouter();
  const auth = getAuth();

  const INACTIVITY_TIMEOUT = 60 * 60 * 1000;
  let inactivityTimer: NodeJS.Timeout;

  // Check if the user is authenticated
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        startInactivityTimer();
      } else {
        router.push("/admin");
      }
    });

    return () => {
      unsubscribe();
      clearInactivityTimer();
    };
  }, [auth, router]);

  const startInactivityTimer = () => {
    clearInactivityTimer();
    inactivityTimer = setTimeout(() => {
      handleLogout();
    }, INACTIVITY_TIMEOUT);

    window.addEventListener("mousemove", resetInactivityTimer);
    window.addEventListener("keydown", resetInactivityTimer);
  };

  const resetInactivityTimer = () => {
    clearInactivityTimer();
    inactivityTimer = setTimeout(() => {
      handleLogout();
      alert("You have been logged out due to inactivity.");
    }, INACTIVITY_TIMEOUT);
  };

  const clearInactivityTimer = () => {
    clearTimeout(inactivityTimer);
    window.removeEventListener("mousemove", resetInactivityTimer);
    window.removeEventListener("keydown", resetInactivityTimer);
  };

  // Logout handler
  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/admin");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const config = {
    readonly: false,
    height: 300,
    statusbar: false,
    removeButtons: ["source", "about", "fullsize"],
  };

  // Fetch jobs
  const fetchJobs = async () => {
    try {
      const jobsRef = collection(db, "jobs");
      const q = query(jobsRef, limit(50));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setMessage("No jobs found. Add the first job!");
        setJobs([]);
      } else {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setJobs(data);
        setMessage("");
      }
    } catch (error: any) {
      console.error("Error fetching jobs:", error);
      setMessage("Error fetching jobs. Please check Firestore permissions.");
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Add job
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const jobsRef = collection(db, "jobs");
      await addDoc(jobsRef, {
        title,
        department,
        location,
        description: content,
        createdAt: serverTimestamp(),
      });

      setMessage("✅ Job added successfully!");
      setTitle("");
      setDepartment("");
      setLocation("");
      setContent("");
      fetchJobs();
    } catch (err: any) {
      console.error("Error adding job:", err);
      setMessage("❌ Failed to add job. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const deleteJob = async (id: string) => {
    try {
      await deleteDoc(doc(db, "jobs", id));
      setJobs(jobs.filter((job) => job.id !== id));
      alert("Job deleted successfully!");
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  const modifyJob = async (id: string, updatedJob: any) => {
    try {
      await updateDoc(doc(db, "jobs", id), {
        ...updatedJob,
        updatedAt: serverTimestamp(),
      });
      setJobs(
        jobs.map((job) => (job.id === id ? { ...job, ...updatedJob } : job))
      );
      setEditingJob(null);
      alert("Job updated successfully!");
    } catch (error) {
      console.error("Error updating job:", error);
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <section className="w-screen min-h-screen pt-24 pb-32 md:pt-44 px-4 md:px-12 xl:px-24 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-[#01959A] font-montserrat font-bold text-4xl md:text-5xl">
            Admin Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 cursor-pointer"
          >
            Logout
          </button>
        </div>

        {/* Job Form */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-10">
          <h2 className="text-2xl font-semibold mb-4">Add New Job</h2>

          {message && (
            <p
              className={`mb-4 text-center font-medium ${
                message.includes("✅")
                  ? "text-green-600"
                  : message.includes("❌")
                  ? "text-red-600"
                  : "text-gray-600"
              }`}
            >
              {message}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Job Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-[#01959A] outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Department
              </label>
              <input
                type="text"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                required
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-[#01959A] outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-[#01959A] outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Job Description
              </label>
              <div className="mt-1">
                <JoditEditor
                  value={content}
                  config={config}
                  onBlur={(newContent) => setContent(newContent)}
                  onChange={(newContent) => {}}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full p-2 text-white rounded-md font-semibold transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#01959A] hover:bg-[#017f82]"
              }`}
            >
              {loading ? "Saving..." : "Add Job"}
            </button>
          </form>
        </div>

        {/* Jobs List */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">All Jobs</h2>
          {jobs.length === 0 ? (
            <p className="text-gray-500">No jobs available yet.</p>
          ) : (
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#01959A] text-white text-left">
                  <th className="p-2">Title</th>
                  <th className="p-2">Department</th>
                  <th className="p-2">Location</th>
                  <th className="p-2">Description</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job) => (
                  <tr key={job.id} className="border-b">
                    <td className="p-2">
                      {editingJob?.id === job.id ? (
                        <input
                          type="text"
                          defaultValue={job.title}
                          onChange={(e) =>
                            setEditingJob({
                              ...editingJob,
                              title: e.target.value,
                            })
                          }
                          className="border rounded-md px-2 py-1"
                        />
                      ) : (
                        job.title
                      )}
                    </td>
                    <td className="p-2">
                      {editingJob?.id === job.id ? (
                        <input
                          type="text"
                          defaultValue={job.department}
                          onChange={(e) =>
                            setEditingJob({
                              ...editingJob,
                              department: e.target.value,
                            })
                          }
                          className="border rounded-md px-2 py-1"
                        />
                      ) : (
                        job.department
                      )}
                    </td>
                    <td className="p-2">
                      {editingJob?.id === job.id ? (
                        <input
                          type="text"
                          defaultValue={job.location}
                          onChange={(e) =>
                            setEditingJob({
                              ...editingJob,
                              location: e.target.value,
                            })
                          }
                          className="border rounded-md px-2 py-1"
                        />
                      ) : (
                        job.location
                      )}
                    </td>
                    <td className="p-2">
                      {editingJob?.id === job.id ? (
                        <JoditEditor
                          value={editingJob.description}
                          config={config}
                          onBlur={(newContent) =>
                            setEditingJob({
                              ...editingJob,
                              description: newContent,
                            })
                          }
                          onChange={(newContent) => {}}
                        />
                      ) : (
                        <div
                          dangerouslySetInnerHTML={{ __html: job.description }}
                        />
                      )}
                    </td>
                    <td className="p-2 flex space-x-2">
                      {editingJob?.id === job.id ? (
                        <>
                          <button
                            onClick={() => modifyJob(job.id, editingJob)}
                            className="px-2 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
                          >
                            Save
                          </button>
                          <button
                            onClick={() => setEditingJob(null)}
                            className="px-2 py-1 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => setEditingJob(job)}
                            className="px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => deleteJob(job.id)}
                            className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </section>
  );
}
