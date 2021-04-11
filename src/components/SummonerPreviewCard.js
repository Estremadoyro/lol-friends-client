import React from "react";

import "../styles/SummonerPreviewCard.css";
export const SummonerPreviewCard = ({ player }) => {
  return (
    <div className="col mx-auto my-4">
      <div className="card">
        <div className="row g-0">
          <div className="col-md-4 ">
            <img src={player.profileIconUrl} className="home-summoner-icon" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title fw-bold">{player.name}</h5>
              <p className="card-text">{player.summonerLevel}</p>
              <p className="card-text">{player.region}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
