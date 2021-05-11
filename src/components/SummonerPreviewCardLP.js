import React from "react";

export const SummonerPreviewCardLP = ({ leaguePoints, promos }) => {
  let lp = `${leaguePoints}LP`;
  if (promos.isInPromo) {
    const progress = promos.progress.toLowerCase();
    lp = (
      <div className="league-promos">
        <div className={`promo-g-${progress[0]}`}></div>
        <div className={`promo-g-${progress[1]}`}></div>
        <div className={`promo-g-${progress[2]}`}></div>
        <div className={`promo-g-${progress[3]}`}></div>
        <div className={`promo-g-${progress[4]}`}></div>
      </div>
    );
  }
  return <div className="league-lp">{lp}</div>;
};
