import React from "react";
import './SidebarOption.css'

function SidebarOption({ active, text, Icon }) {
  return (
    <div className={`sidebarOption ${active && "sidebarOptionactive"}`}>
      <div className="icon">
        <Icon />
      </div>
      <h2 className="sidebarText">{text}</h2>
    </div>
  );
}

export default SidebarOption