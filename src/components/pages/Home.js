import React from "react";
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="px-4 py-6 w-full h-screen flex flex-col items-center justify-center">
      <div className="w-64 h-64 bg-blue-500 rounded-full" />
      <h1 className="text-5xl font-bold">Home</h1>
      <span>Go to <Link to="/dashboard" className="underline text-blue-700">Dashboard</Link></span>
    </div>
  )
}

export default Home;