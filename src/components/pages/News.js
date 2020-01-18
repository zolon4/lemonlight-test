import React from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom"

function News() {
  return (
    <Layout>
      <div className="w-64 h-64 bg-pink-500 rounded-full" />
      <h1 className="text-5xl font-bold">News</h1>
      <span>Go to <Link to="/contact" className="underline text-blue-700">Contact</Link></span>
    </Layout>
  )
}

export default News;