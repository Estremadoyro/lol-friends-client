import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { getRegionName } from "../../shared-hooks/Functions";
import "../../styles/SummonerPreviewCardDesktop.css";

export const SummonerPreviewCardDesktop = ({ player }) => {
  const regionName = getRegionName(player.region);
  return (
    <div className="summoner-card-desktop">
      <div className="summoner-card-container shadow-lg my-4">
        <div className="row">
          <div className="col-4 summoner-card-image-container">
            <LazyLoadImage
              src={player.profileIconUrl}
              effect="blur"
              alt="https://cdn.communitydragon.org/11.7.9/profile-icon/29"
              wrapperClassName="summoner-card-image"
            />
            <span className="summoner-card-level">{player.summonerLevel}</span>
          </div>
          <div className="col-8 summoner-card-info">
            <div className="summoner-card-name">{player.name}</div>
            Desktop owowaa
          </div>
        </div>
      </div>
    </div>
  );
};
