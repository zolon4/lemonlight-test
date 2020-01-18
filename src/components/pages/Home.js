import React from "react";
import Layout from "./Layout"
import { Link } from "react-router-dom"

function Home() {
  return (
    <Layout>
      <div className="w-64 h-64 bg-blue-500 rounded-full" />
      <h1 className="text-5xl font-bold">Home</h1>
      <span>Go to <Link to="/dashboard" className="underline text-blue-700">Dashboard</Link></span>
    </Layout>
  )
}

export default Home;