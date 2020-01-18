import React from "react";

function NavigationDrawer(props) {

  var active = props.index === props.activeDrawerIndex

  function handleClick() {
    let index = active ? undefined : props.index
    props.setActiveIndex(index)
  }

  return (
    <div className={`p-2 ${active && "bg-gray-200"}`}>
      <div className="cursor-pointer flex justify-between items-center" onClick={handleClick}>
        <h2 className={`opacity-75 hover:opacity-100 transition-opacity duration-500 select-none text-2xl font-bold ${active && "text-blue-800"}`}>{props.title}</h2>
        <i className="fas fa-caret-down"></i>
      </div>
      <div className={`p-2 flex flex-col ${active ? "show transition-all ease-in duration-500" : "hidden"}`}>
        {props.children}
      </div>
    </div>
  )
}
export default NavigationDrawer