import React from "react";
import Layout from "./Layout"
import { Link } from "react-router-dom"

function Dashboard() {
  return (
    <Layout>
      <div className="w-64 h-64 bg-red-500 rounded-full" />
      <h1 className="text-5xl font-bold">Dashboard</h1>
      <span>Go to <Link to="/blog" className="underline text-blue-700">Blog</Link></span>
    </Layout>
  )
}

export default Dashboard;