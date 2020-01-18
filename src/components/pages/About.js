import React from "react";
import Layout from "./Layout"
import { Link } from "react-router-dom"

function About() {
  return (
    <Layout>
      <div className="w-64 h-64 bg-green-500 rounded-full" />
      <h1 className="text-5xl font-bold">About</h1>
      <span>Go <Link to="/home" className="underline text-blue-700">Home</Link></span>
    </Layout>
  )
}

export default About;