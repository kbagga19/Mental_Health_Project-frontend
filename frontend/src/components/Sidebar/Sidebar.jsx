//import React from 'react'
import classes from "./Sidebar.module.css";

import {
  BsGrid1X2Fill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill
} from "react-icons/bs";
import {TbMoodPlus} from "react-icons/tb";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import MoodTracker from "../MoodTracker/MoodTracker";
import Dashboard from "../Dashboard/Dashboard";
import Plan from "../Plan/Plan";
import { useState } from "react";

function Sidebar({ openSidebar, sidebarHandler, componentHandler }) {
  const [active, setActive] = useState('Dashboard');

  return (
    <aside id={classes.sidebar} className={openSidebar ? classes["sidebar-responsive"] : ""}>
      <div className={classes["sidebar-title"]}>
        <div className={classes["sidebar-brand"]}>
          <VolunteerActivismIcon className={classes["icon_header"]} /> BeatIT
        </div>
        <span className={`${classes.icon} ${classes["close_icon"]}`} onClick={sidebarHandler}>
          <ArrowBackIosNewIcon />
        </span>
      </div>

      <ul className={classes["sidebar-list"]}>
        <li onClick={() => {componentHandler(<Dashboard/>); setActive('Dashboard')}} className={`${classes["sidebar-list-item"]} ${active === 'Dashboard' ? `${classes["itemActive"]}` : ''}`}>
            <BsGrid1X2Fill className={classes.icon} /> Dashboard
        </li>
        {/* <li className='sidebar-list-item'>
                <a href="">
                    <BsFillArchiveFill className='icon'/> Products
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGrid3X3GapFill className='icon'/> Categories
                </a>
            </li> */}

        <li onClick={() => {componentHandler(<Plan/>); setActive('Plan')}} className={`${classes["sidebar-list-item"]} ${active === 'Plan' ? `${classes["itemActive"]}` : ''}`}>
            <BsListCheck className={classes.icon} /> Your Plan
        </li>

        <li onClick={() => {componentHandler(<MoodTracker/>); setActive('MoodTracker')}} className={`${classes["sidebar-list-item"]} ${active === 'MoodTracker' ? `${classes["itemActive"]}` : ''}`}>
            <TbMoodPlus className={classes.icon} /> Mood Tracker
        </li>

        <li className={classes["sidebar-list-item"]}>
            <BsPeopleFill className={classes.icon} /> Support Groups
        </li>

        <li className={classes["sidebar-list-item"]}>
            <BsMenuButtonWideFill className={classes.icon} /> Reports
        </li>
        <li className={classes["sidebar-list-item"]}>
            <BsFillGearFill className={classes.icon} /> Settings
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;