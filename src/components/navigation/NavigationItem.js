import React from "react"
import { NavLink } from 'react-router-dom'

function NavigationItem(props) {
  return <NavLink
    to={props.to}
    className="select-none opacity-50 hover:opacity-100 transition-opacity duration-500 ease-in-out"
    activeClassName="font-bold">
    {props.children}
  </NavLink>
}
export default NavigationItem;