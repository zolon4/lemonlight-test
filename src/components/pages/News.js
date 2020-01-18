import React from "react";
import { Link } from 'react-router-dom'

function News(props) {
  return (
    <div className="px-4 py-6 w-full h-screen flex flex-col items-center justify-center">
      <div className="w-64 h-64 bg-pink-500 rounded-full" />
      <h1 className="text-5xl font-bold">News</h1>
      <Link to="/contact">Go to Contact</Link>
    </div>
  )
}

export default News;