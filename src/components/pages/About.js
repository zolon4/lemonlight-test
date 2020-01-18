import React from "react";
import { Link } from 'react-router-dom'

function About(props) {
  return (
    <div className="px-4 py-6 w-full h-screen flex flex-col items-center justify-center">
      <div className="w-64 h-64 bg-green-500 rounded-full" />
      <h1 className="text-5xl font-bold">About</h1>
      <Link to="/home">Go home</Link>
    </div>
  )
}

export default About;