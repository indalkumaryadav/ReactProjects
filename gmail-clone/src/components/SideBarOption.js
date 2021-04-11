import React from "react";
import "./sidebar_option.css";

const SideBarOption = ({ Icon, title, number, selected }) => {
  return (
    <div className={`sideBar_option ${selected && "sidebar_active"}`}>
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
};

export default SideBarOption;
