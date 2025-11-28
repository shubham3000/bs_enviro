import React from "react";
import Dashboard from "@/Components/AdminDashboard/dashboardHome";
import Header from "@/Components/Header/header";

export default function page() {
  return (
    <div>
      <Header isWhite={false} />
      <main className="max-w-screen-2xl">
        <Dashboard />
      </main>
    </div>
  );
}
