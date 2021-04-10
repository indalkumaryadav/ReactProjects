import React from "react";
import { Avatar } from "@material-ui/core";
import "./sidebar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=715&q=80" />
        <Avatar className="sidebar_avatar" />
        <h2>Indal Kumar</h2>
        <h4>indalkumar@gmail.com</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>who viewed you</p>
          <p className="sidebar_statNumber">2500</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
