import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { getRegionName } from "../../shared-hooks/Functions";
import "../../styles/SummonerPreviewCardMobile.css";

export const SummonerPreviewCardMobile = ({ player }) => {
  const regionName = getRegionName(player.region);
  return (
    <div className="summoner-card-mobile">
      <div className="summoner-card-container shadow-lg my-4">
        <div className="row">
          <div className="col-12 summoner-card-image-container">
            <LazyLoadImage
              src={player.profileIconUrl}
              effect="blur"
              alt="https://cdn.communitydragon.org/11.7.9/profile-icon/29"
              wrapperClassName="summoner-card-image"
            />
            <span className="summoner-card-level">
              <i className="fas fa-circle summoner-circle-loss"></i>
              <i className="fas fa-circle summoner-circle-win"></i>
              <i className="fas fa-circle summoner-circle-loss"></i>
              <i className="fas fa-circle summoner-circle-win"></i>
              <i className="fas fa-circle summoner-circle-win"></i>
            </span>
          </div>
          <div className="col-12 summoner-card-info">
            <div className="summoner-card-name">{player.name}</div>
            <span
              className="summoner-card-region badge rounded-pill "
              style={{ backgroundColor: "rgb(100 102 245)" }}
            >
              {getRegionName(player.region)}
            </span>
            <p>Mobile XDXDX</p>
          </div>
        </div>
      </div>
    </div>
    //   <div className="summoner-card-mobile">
    //   <div className="summoner-card-container shadow-lg my-4">
    //     <div className="row">
    //       <div className="col-12 summoner-card-image-container">
    //         <LazyLoadImage
    //           src={player.profileIconUrl}
    //           effect="blur"
    //           alt="https://cdn.communitydragon.org/11.7.9/profile-icon/29"
    //           wrapperClassName="summoner-card-image"
    //         />
    //         <span className="summoner-card-level">{player.summonerLevel}</span>
    //       </div>
    //       <div className="col-12 summoner-card-info">
    //         <div className="summoner-card-name">{player.name}</div>
    //         <span
    //           className="summoner-card-region badge rounded-pill "
    //           style={{ backgroundColor: "rgb(100 102 245)" }}
    //         >
    //           {getRegionName(player.region)}
    //         </span>
    //         <p>Mobile XDXDX</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
