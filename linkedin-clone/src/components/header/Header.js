import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./header.css";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import BusinessCenterTwoToneIcon from "@material-ui/icons/BusinessCenterTwoTone";
import NotificationsNoneTwoToneIcon from "@material-ui/icons/NotificationsNoneTwoTone";

const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG27.png"
          alt=""
        />
      </div>
      <div className="header_search">
        <SearchIcon />
        <input />
      </div>

      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={PeopleIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterTwoToneIcon} title="jobs" />
        <HeaderOption
          Icon={NotificationsNoneTwoToneIcon}
          title="notification"
        />
        <HeaderOption avatar="https://pngimg.com/uploads/linkedIn/linkedIn_PNG27.png" />
      </div>
    </div>
  );
};

export default Header;
