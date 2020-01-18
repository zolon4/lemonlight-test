import React from "react";

function NavigationDrawer(props) {

  function handleClick() {
    let index = props.index === props.activeDrawerIndex ? undefined : props.index
    props.setActiveIndex(index)
  }

  return (
    <div className="p-2">
      <div className="cursor-pointer flex justify-between items-center" onClick={handleClick}>
        <h2 className="text-2xl font-bold">{props.title}</h2>
        <i className="fas fa-caret-down"></i>
      </div>
      {props.activeDrawerIndex === props.index && (
        <div className="p-2 flex flex-col">
          {props.children}
        </div>
      )}
    </div>
  )
}
export default NavigationDrawer