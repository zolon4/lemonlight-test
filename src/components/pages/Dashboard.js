import React from "react";
import { Link } from "react-router-dom"

function Dashboard(props) {
  return (
    <div className="px-4 py-6 w-full h-screen flex flex-col items-center justify-center">
      <div className="w-64 h-64 bg-red-500 rounded-full" />
      <h1 className="text-5xl font-bold">Dashboard</h1>
      <Link to="/blog">Go to Blog</Link>
    </div>
  )
}

export default Dashboard;