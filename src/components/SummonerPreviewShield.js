import React from "react";
import { selectShield } from "../misc/Variables";
export const SummonerPreviewShield = ({ league }) => {
  return (
    <div className="league-shield">
      <img src={selectShield[league].shield} alt={league} />
    </div>
  );
};
