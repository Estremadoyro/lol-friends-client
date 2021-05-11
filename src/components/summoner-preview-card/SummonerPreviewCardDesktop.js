import React from "react";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { getRegionName } from "../../shared-hooks/Functions";

import { SummonerPreviewWinrate } from "../SummonerPreviewWinrate";
import { SummonerPreviewShield } from "../SummonerPreviewShield";
import { SummonerPreviewCardWinLossBar } from "../SummonerPreviewCardWinLossBar";
import { SummonerPreviewCardLP } from "../SummonerPreviewCardLP";

import "../../styles/SummonerPreviewCard.css";
import "../../styles/SummonerPreviewCardDesktop.css";

export const SummonerPreviewCardDesktop = ({ player }) => {
  const regionName = getRegionName(player.region);
  return (
    <div className="summoner-card-desktop">
      <div
        className={`summoner-card-container summoner-border-${player.highestLeague} shadow-lg my-4`}
      >
        <div className="row">
          <div
            className={`col-8 summoner-card-image-container summoner-border-right-${player.highestLeague}`}
          >
            <div className="summoner-card-region-level">
              <span
                className={`summoner-card-region summoner-border-sm-${player.highestLeague} summoner-region-${regionName.cardRegionId}`}
                style={{ borderWidth: "3px" }}
              >
                {regionName.cardRegion}
              </span>
              <span
                className={`summoner-card-level summoner-border-sm-${player.highestLeague}`}
                style={{ borderWidth: "3px" }}
              >
                {player.summonerLevel}
              </span>
            </div>
            <div className="summoner-card-image">
              <img
                src={player.profileIconUrl}
                alt={player.profileIconId}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://ddragon.leagueoflegends.com/cdn/11.8.1/img/profileicon/29.png";
                }}
              />
            </div>
            <span
              className={`summoner-card-name summoner-bg-${player.highestLeague}`}
            >
              {player.name}
            </span>
          </div>
          <div
            className={`col-3 summoner-border-right-${player.highestLeague}`}
          >
            {player.summonerRank.map((queue) => (
              <div className="summoner-card-info" key={queue._id}>
                <SummonerPreviewShield league={queue.league} />
                <div className="league-queue-division">
                  <div className="league-queue">{queue.queue}</div>
                  <div
                    className={`league-division summoner-league-division-${queue.league}`}
                  >
                    {queue.leagueDivision}
                  </div>
                </div>
                <div className="league-stats">
                  <SummonerPreviewWinrate winrate={queue.winRate} />
                  <SummonerPreviewCardLP
                    leaguePoints={queue.leaguePoints}
                    promos={queue.promos}
                  />
                  {/* <div className="league-lp">{queue.leaguePoints}LP</div> */}
                </div>
                <div className="league-bar-container">
                  <SummonerPreviewCardWinLossBar
                    wins={queue.wins}
                    losses={queue.losses}
                    winrate={queue.winRate}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="col-1 summoner-card-mastery">
            {player.championMastery.slice(0, 4).map((champion) => (
              <div
                className="summoner-card-mastery-champion"
                key={champion._id}
              >
                <img src={champion.championIconUrl} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
