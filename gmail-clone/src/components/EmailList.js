import React from "react";
import "./email_list.css";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import { IconButton, Checkbox } from "@material-ui/core";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import Section from "./section/Section";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import EmailRow from "./EmailRow";
import "./email_row.css";
const EmailList = () => {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <IconButton>
            <Checkbox />
          </IconButton>
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>

        <div className="emailList_settingsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>

      {/* sections */}
      <div className="emailList_sections">
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={PeopleIcon} title="Primary" color="#1A73E8" />
        <Section Icon={LocalOfferIcon} title="Primary" color="green" />
      </div>

      <div className="email_list">
        <EmailRow
          title="Title"
          subject="subject"
          description="description"
          time="10pm"
        />
        <EmailRow
          title="Title"
          subject="subject"
          description="description"
          time="10pm"
        />
        <EmailRow
          title="title"
          subject="subject"
          description="description"
          time="10pm"
        />
        <EmailRow
          title="title"
          subject="subject"
          description="description"
          time="10pm"
        />
        <EmailRow
          title="Title"
          subject="subject"
          description="description"
          time="10pm"
        />
        <EmailRow
          title="title"
          subject="subject"
          description="description"
          time="10pm"
        />
        <EmailRow
          title="Title"
          subject="subject"
          description="description "
          time="10pm"
        />
        <EmailRow
          title="Title"
          subject="subject"
          description="description"
          time="10pm"
        />
        <EmailRow
          title="Title"
          subject="subject"
          description="description"
          time="10pm"
        />
      </div>
    </div>
  );
};

export default EmailList;
