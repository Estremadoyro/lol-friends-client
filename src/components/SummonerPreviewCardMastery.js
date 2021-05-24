import React from "react";

export const SummonerPreviewCardMastery = ({ champion }) => {
  let color = "rgba(0, 0, 0, 0.7)";
  if (champion.championLevel == 7) color = "rgba(51, 133, 246, 0.6)";
  if (champion.championLevel == 6) color = "rgba(102, 101, 215, 0.6)";
  if (champion.championLevel == 5) color = "rgba(232, 96, 116, 0.6)";
  // console.log(color);
  return (
    <div className="summoner-card-mastery-champion">
      <div className="champion-icon">
        <img src={champion.championIconUrl} style={{ border: `3px solid ${color}` }} />
      </div>
      <div className="champion-points-formated" style={{ backgroundColor: color }}>
        {champion.championPointsFormated}
      </div>
    </div>
  );
};
