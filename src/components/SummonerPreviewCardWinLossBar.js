import React from "react";

export const SummonerPreviewCardWinLossBar = ({ wins, losses, winrate }) => {
  const winsPerc = parseInt(winrate);
  const lossesPerc = 100 - winsPerc;
  let winsStyle = { width: `${winsPerc}%` };
  let lossesStyle = { width: `${lossesPerc}%` };
  let bar;
  if (winrate == "-") {
    bar = <div className="league-unranked">No rank yet</div>;
  } else {
    bar = (
      <>
        <div className="league-wins" style={winsStyle}>
          {wins} W
        </div>
        <div className="league-losses" style={lossesStyle}>
          {losses} L
        </div>
      </>
    );
  }
  return <div className="league-win-loss-bar">{bar}</div>;
};
