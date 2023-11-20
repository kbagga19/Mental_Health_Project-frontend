import {React, useState} from 'react';
import classes from "./Dashboard.module.css";

import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Map from "../Map/Map";
// import {
//   BsFillArchiveFill,
//   BsFillGrid3X3GapFill,
//   BsPeopleFill,
//   BsFillBellFill,
// } from "react-icons/bs";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

import girlImg from "../../assets/greetingImg.png";
import tasks from "../../assets/complete.svg";
import sleep from "../../assets/sleeping.svg";
import reports from "../../assets/reports.svg";
import { useEffect } from "react";

function Dashboard() {
  const today = new Date();

  const options = {
    weekday: "long", // Full day of the week
    day: "2-digit", // Day of the month with leading zeros
    month: "short", // Abbreviated month name
    year: "numeric", // Full year
  };

  const formattedDate = today.toLocaleDateString(undefined, options);

  console.log(formattedDate);
  // console.log(loggedInUserDetails.name)

  const data = [
    {
      name: "Day 1",
      Productivity: 4,
      Mood: 2,
      // amt: 2400,
    },
    {
      name: "Day 2",
      Productivity: 5,
      Mood: 7,
      // amt: 2210,
    },
    {
      name: "Day 3",
      Productivity: 2,
      Mood: 6,
      // amt: 2290,
    },
    {
      name: "Day 4",
      Productivity: 5,
      Mood: 8,
      // amt: 2000,
    },
    {
      name: "Day 5",
      Productivity: 3,
      Mood: 6,
      // amt: 2181,
    },
    {
      name: "Day 6",
      Productivity: 4,
      Mood: 1,
      // amt: 2500,
    },
    {
      name: "Day 7",
      Productivity: 10,
      Mood: 3,
      // amt: 2100,
    },
  ];

  return (
    <main className={classes["main-container"]}>
      <div className={classes["main-title"]}>
        <h3>Dashboard</h3>
        <h6>{formattedDate}</h6>
      </div>

      <div className={classes.helloCard}>
        <div className={classes.greetingDiv}>
          <h4>
            Hi, <span>{localStorage.getItem('name')}</span>
          </h4>
          <p>
            Let's beat it!
            <br /> You have 3 daily tasks to complete today.
          </p>
        </div>
        <img src={girlImg} alt="girl greeting"/>
      </div>

      <h3>At a Glance</h3>
      <div className={classes["main-cards"]}>

        <div className={classes.card}>
          <div className={classes["card-inner"]}>
            <img src={tasks} alt="tick-icon"  className={classes["card_icon"]} />
          </div>
          <div className={classes.cardContent}>
            <h5>25 Done</h5>
            <h6>Tasks</h6>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes["card-inner"]}>
            <img src={sleep} alt="tick-icon"  className={classes["card_icon"]} />
          </div>
          <div className={classes.cardContent}>
            <h5>100 Score</h5>
            <h6>Sleep</h6>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes["card-inner"]}>
            <img src={reports} alt="tick-icon"  className={classes["card_icon"]} />
          </div>
          <div className={classes.cardContent}>
            <h5>12 Reports</h5>
            <h6>Tests</h6>
          </div>
        </div>
  
      </div>

    <h3>Your Progress</h3>
      <div className={classes.charts}>
        
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            // margin={{
            //   top: 5,
            //   right: 30,
            //   left: 20,
            //   bottom: 5,
            // }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Mood"
              stroke="#86c5bf"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="Productivity" stroke="#e27259" />
          </LineChart>
        </ResponsiveContainer>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar defaultValue={dayjs()} />
        </LocalizationProvider>
      </div>
      <Map/>
    </main>
  );
}
export default Dashboard;