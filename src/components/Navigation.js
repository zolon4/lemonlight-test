import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom'
import NavigationDrawer from './navigation/NavigationDrawer';
import { withRouter } from 'react-router';

function Navigation(props) {
  const [activeIndex, setActiveIndex] = useState(undefined)

  useEffect(() => {
    let path = props.location.pathname
    let index
    switch (path) {
      case "/home":
      case "/dashboard":
      case "/blog":
        index = 0
        break;
      case "/news":
      case "/contact":
      case "/about":
        index = 1
        break;
      default:
        index = undefined
    }
    setActiveIndex(index)
  }, [props.location]);

  return (
    <div className="h-screen w-56 bg-gray-200">
      <div className="flex flex-col p-6">
        <NavigationDrawer title="General" index={0} activeDrawerIndex={activeIndex} setActiveIndex={setActiveIndex}>
          <NavLink to="/home" className="hover:underline" activeClassName="font-bold">Home</NavLink>
          <NavLink to="/dashboard" className="hover:underline" activeClassName="font-bold">Dashboard</NavLink>
          <NavLink to="/blog" className="hover:underline" activeClassName="font-bold">Blog</NavLink>
        </NavigationDrawer>
        <NavigationDrawer title="Special" index={1} activeDrawerIndex={activeIndex} setActiveIndex={setActiveIndex}>
          <NavLink to="/news" className="hover:underline" activeClassName="font-bold">News</NavLink>
          <NavLink to="/contact" className="hover:underline" activeClassName="font-bold">Contact</NavLink>
          <NavLink to="/about" className="hover:underline" activeClassName="font-bold">About</NavLink>
        </NavigationDrawer>
      </div>
    </div>
  )
}


export default withRouter(Navigation);