import React from "react";

export const SummonerPreviewWinrate = ({ winrate }) => {
  let winRateColor = "gray";

  if (winrate >= 65) winRateColor = "golden";
  else if (winrate >= 50) winRateColor = "blue";
  else if (winrate < 50) winRateColor = "red";

  return (
    <div className={`league-winrate summoner-winrate-${winRateColor}`}>
      {winrate}%
    </div>
  );
};
