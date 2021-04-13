import React from "react";
import "../styles/LeaderboardInfo.css";

export const LeaderboardInfo = ({ playerCount }) => {
  return (
    <div className="container mx-auto leaderboard-info-container">
      <span className="badge leaderboard-info-pill rounded-pill">
        <i className="fas fa-calendar-alt me-2"></i>21-May-2021
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
