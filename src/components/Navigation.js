import React, { useState, useEffect } from "react";
import NavigationDrawer from './navigation/NavigationDrawer';
import NavigationItem from './navigation/NavigationItem';
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
          <NavigationItem to="/home">Home</NavigationItem>
          <NavigationItem to="/dashboard">Dashboard</NavigationItem>
          <NavigationItem to="/blog">Blog</NavigationItem>
        </NavigationDrawer>
        <NavigationDrawer title="Special" index={1} activeDrawerIndex={activeIndex} setActiveIndex={setActiveIndex}>
          <NavigationItem to="/news">News</NavigationItem>
          <NavigationItem to="/contact">Contact</NavigationItem>
          <NavigationItem to="/about">About</NavigationItem>
        </NavigationDrawer>
      </div>
    </div>
  )
}

export default withRouter(Navigation);