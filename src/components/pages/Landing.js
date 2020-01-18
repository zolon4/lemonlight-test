import React from "react";
import Layout from "./Layout"
import { Link } from "react-router-dom"

function Landing() {
  return (
    <Layout>
      <h1 className="text-5xl font-bold">Hello!</h1>
      <span>Start by going to the <Link to="/home" className="underline text-blue-700">Home</Link> page</span>
    </Layout>
  )
}

export default Landing;