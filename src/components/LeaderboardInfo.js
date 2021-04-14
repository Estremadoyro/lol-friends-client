import React from "react";
// import DayJS from "react-dayjs";

import "../styles/LeaderboardInfo.css";
import { dateFromNow } from "../scripts/LeaderboardInfo.js";

export const LeaderboardInfo = ({ playerCount, updateTime }) => {
  // console.log(updateTime);
  const timeFromNow = dateFromNow(updateTime);
  // console.log(timeFromNow);
  return (
    <div className="container mx-auto leaderboard-info-container">
      <span className="badge leaderboard-info-pill rounded-pill">
        <i className="fas fa-calendar-alt me-2"></i>
        {/* <DayJS format="MMM-DD HH:mm UTC Z">{updateTime}</DayJS> */}
        {timeFromNow}
      </span>
      <span className="badge leaderboard-info-pill rounded-pill mx-2">
        <i className="fas fa-user-friends me-2"></i>
        {playerCount}
      </span>
      <span className="badge leaderboard-info-pill rounded-pill">
        <i className="fas fa-search-location  me-2"></i>Ranked Solo
      </span>
    </div>
  );
};
