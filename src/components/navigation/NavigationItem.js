import React from "react"
import { NavLink } from 'react-router-dom'

function NavigationItem(props) {
  return <NavLink
    to={props.to}
    className="hover:underline"
    activeClassName="font-bold">
    {props.children}
  </NavLink>
}

export default NavigationItem;