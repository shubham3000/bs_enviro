"use client";
import React, { useState, useEffect } from "react";
import {
  collection,
  query,
  getDocs,
  deleteDoc,
  doc,
  where,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../firebase.config";

interface ApplicationsListProps {
  jobId?: string;
}

interface Application {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  coverLetter: string;
  status: string;
  jobTitle: string;
  jobId: string;
  appliedAt: any;
  [key: string]: any;
}

export default function ApplicationsList({ jobId }: ApplicationsListProps) {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(false);
  const [expandedApp, setExpandedApp] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const fetchApplications = async () => {
    setLoading(true);
    try {
      const applicationsRef = collection(db, "applications");
      let q;

      if (jobId) {
        q = query(applicationsRef, where("jobId", "==", jobId));
      } else {
        q = query(applicationsRef);
      }

      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Application[];

      // Sort by date (newest first)
      data.sort(
        (a, b) =>
          (b.appliedAt?.toMillis() || 0) - (a.appliedAt?.toMillis() || 0)
      );

      setApplications(data);
    } catch (error) {
      console.error("Error fetching applications:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, [jobId]);

  const deleteApplication = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this application?")) {
      return;
    }

    try {
      await deleteDoc(doc(db, "applications", id));
      setApplications(applications.filter((app) => app.id !== id));
      alert("Application deleted successfully!");
    } catch (error) {
      console.error("Error deleting application:", error);
    }
  };

  const updateApplicationStatus = async (id: string, newStatus: string) => {
    try {
      await updateDoc(doc(db, "applications", id), {
        status: newStatus,
      });
      setApplications(
        applications.map((app) =>
          app.id === id ? { ...app, status: newStatus } : app
        )
      );
      alert(`Application status updated to ${newStatus}!`);
    } catch (error) {
      console.error("Error updating application status:", error);
      alert("Failed to update status. Please try again.");
    }
  };

  const formatDate = (timestamp: any) => {
    if (!timestamp) return "N/A";
    const date = new Date(timestamp.toDate());
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  };

  // Filter applications based on tab and search query
  const filteredApplications = applications.filter((app) => {
    const matchesTab =
      selectedTab === "all" || app.status === selectedTab;
    const matchesSearch =
      app.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.jobTitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  // Count applications by status
  const statusCounts = {
    all: applications.length,
    pending: applications.filter((app) => app.status === "pending").length,
    accepted: applications.filter((app) => app.status === "accepted").length,
    rejected: applications.filter((app) => app.status === "rejected").length,
  };

  if (loading) {
    return <p className="text-center text-gray-500">Loading applications...</p>;
  }

  if (applications.length === 0) {
    return (
      <p className="text-center text-gray-500">
        No applications received yet.
      </p>
    );
  }

  return (
    <div>
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by applicant name or job title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01959A]"
        />
      </div>

      {/* Status Tabs */}
      <div className="mb-6 flex gap-2 flex-wrap">
        <button
          onClick={() => setSelectedTab("all")}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            selectedTab === "all"
              ? "bg-[#01959A] text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          All ({statusCounts.all})
        </button>
        <button
          onClick={() => setSelectedTab("pending")}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            selectedTab === "pending"
              ? "bg-yellow-500 text-white"
              : "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
          }`}
        >
          Pending ({statusCounts.pending})
        </button>
        <button
          onClick={() => setSelectedTab("accepted")}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            selectedTab === "accepted"
              ? "bg-green-500 text-white"
              : "bg-green-100 text-green-800 hover:bg-green-200"
          }`}
        >
          Accepted ({statusCounts.accepted})
        </button>
        <button
          onClick={() => setSelectedTab("rejected")}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            selectedTab === "rejected"
              ? "bg-red-500 text-white"
              : "bg-red-100 text-red-800 hover:bg-red-200"
          }`}
        >
          Rejected ({statusCounts.rejected})
        </button>
      </div>

      {/* Applications List */}
      {filteredApplications.length === 0 ? (
        <p className="text-center text-gray-500 py-8">
          {searchQuery
            ? "No applications found matching your search."
            : "No applications in this category."}
        </p>
      ) : (
        <div className="space-y-4">
      {filteredApplications.map((app) => (
        <div
          key={app.id}
          className="bg-white border border-gray-200 rounded-lg overflow-hidden"
        >
          <div
            className="p-4 cursor-pointer hover:bg-gray-50 flex justify-between items-center"
            onClick={() =>
              setExpandedApp(expandedApp === app.id ? null : app.id)
            }
          >
            <div className="flex-1">
              <h4 className="font-semibold text-gray-800">{app.fullName}</h4>
              <p className="text-sm text-gray-600">{app.email}</p>
              {!jobId && (
                <p className="text-sm text-[#01959A] font-medium">
                  {app.jobTitle}
                </p>
              )}
              <p className="text-xs text-gray-500 mt-1">
                Applied: {formatDate(app.appliedAt)}
              </p>
            </div>
            <span
              className={`text-2xl transition-transform ${
                expandedApp === app.id ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </div>

          {expandedApp === app.id && (
            <div className="border-t border-gray-200 p-4 bg-gray-50">
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-700">Phone:</p>
                  <p className="text-sm text-gray-600">{app.phone}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700">
                    Cover Letter:
                  </p>
                  <p className="text-sm text-gray-600 whitespace-pre-wrap">
                    {app.coverLetter}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700">
                    Status:
                  </p>
                  <div className="mt-2 flex gap-2">
                    <select
                      value={app.status}
                      onChange={(e) =>
                        updateApplicationStatus(app.id, e.target.value)
                      }
                      className={`px-3 py-1 rounded text-sm font-medium border-2 cursor-pointer ${
                        app.status === "pending"
                          ? "bg-yellow-50 border-yellow-300 text-yellow-800"
                          : app.status === "accepted"
                          ? "bg-green-50 border-green-300 text-green-800"
                          : "bg-red-50 border-red-300 text-red-800"
                      }`}
                    >
                      <option value="pending">Pending</option>
                      <option value="accepted">Accepted</option>
                      <option value="rejected">Rejected</option>
                    </select>
                    <span
                      className={`px-3 py-1 rounded text-white text-xs font-medium ${
                        app.status === "pending"
                          ? "bg-yellow-500"
                          : app.status === "accepted"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      {app.status?.charAt(0).toUpperCase() +
                        app.status?.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <a
                  href={`mailto:${app.email}`}
                  className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
                >
                  Email
                </a>
                <button
                  onClick={() => deleteApplication(app.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
        </div>
      )}
    </div>
  );
}
