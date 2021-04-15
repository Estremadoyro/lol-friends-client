import React from "react";
import { selectRegion } from "../misc/Variables";
import "../styles/SummonerPreviewCard.css";

export const SummonerPreviewCard = ({ player }) => {
  const getRegionName = (playerRegion) => {
    const obj = selectRegion.regions.filter((region) => {
      return region.value === playerRegion;
    });
    return obj[0].name;
  };
  return (
    <div className="col mx-auto my-4">
      <div className="card shadow full-card-border">
        <div className="row g-0">
          <div className="col-md-4 ">
            <img
              src={player.profileIconUrl}
              className="home-summoner-icon img-card-border"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title fw-bold">{player.name}</h2>
              <p className="card-text">
                <strong>Level: </strong>
                {player.summonerLevel}
              </p>
              <p className="card-text">
                <span
                  className="badge rounded-pill"
                  style={{ backgroundColor: "rgb(100 102 245)" }}
                >
                  {getRegionName(player.region)}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
