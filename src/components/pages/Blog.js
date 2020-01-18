import React from "react";
import { Link } from "react-router-dom"

function Blog() {
  return (
    <div className="px-4 py-6 w-full h-screen flex flex-col items-center justify-center">
      <div className="w-64 h-64 bg-indigo-500 rounded-full" />
      <h1 className="text-5xl font-bold">Blog</h1>
      <span>Go to <Link to="/news" className="underline text-blue-700">News</Link></span>
    </div>
  )
}

export default Blog;