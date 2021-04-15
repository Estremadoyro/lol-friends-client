import React from "react";
import "../styles/LeaderboardInfo.css";

export const LeaderboardInfo = () => {
  return (
    <div className="container countdown">
      <span className="badge rounded-pill bg-primary mx-2">Players: 200</span>
      <span className="badge rounded-pill bg-warning mx-2">
        Updated: 21-May-2021
      </span>
    </div>
  );
};
