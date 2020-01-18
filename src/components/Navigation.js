import React from "react";
import {
  Link
} from "react-router-dom";

function Navigation(props) {
  return (
    <div className=" h-screen w-56 bg-gray-200">
      <div className="flex flex-col p-6">
        <Link to="/home">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/news">News</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  )
}
export default Navigation