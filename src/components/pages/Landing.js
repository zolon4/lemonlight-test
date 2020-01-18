import React from "react";
import { Link } from 'react-router-dom'

function Landing(props) {
  return (
    <div className="px-4 py-6 w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">Hello!</h1>
      <Link to="/home">Start by going to the home page</Link>
    </div>
  )
}

export default Landing;