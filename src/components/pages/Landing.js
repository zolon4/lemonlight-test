import React from "react";
import { Link } from "react-router-dom"

function Landing() {
  return (
    <div className="px-4 py-6 w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">Hello!</h1>
      <span>Start by going to the <Link to="/home" className="underline text-blue-700">Home</Link> page</span>
    </div>
  )
}

export default Landing;