import React from "react";
import "./header_option.css";
import { Avatar } from "@material-ui/core";

const HeaderOption = ({ avatar, Icon, title }) => {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && <Avatar className="headerOption_icon" src={avatar} />}
      <p className="headerOption_title">{title}</p>
    </div>
  );
};

export default HeaderOption;
