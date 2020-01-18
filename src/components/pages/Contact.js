import React from "react";
import { Link } from "react-router-dom"

function Contact() {
  return (
    <div className="px-4 py-6 w-full h-screen flex flex-col items-center justify-center">
      <div className="w-64 h-64 bg-yellow-500 rounded-full" />
      <h1 className="text-5xl font-bold">Contact</h1>
      <span>Go to <Link to="/about" className="underline text-blue-700">About</Link></span>
    </div>
  )
}

export default Contact;