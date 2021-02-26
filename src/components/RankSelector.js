import React, { Fragment } from "react";

import { useSettingsContext } from "../contexts/SettingsContext";

import { selectRank } from "../misc/Variables";

import "../styles/RankSelector.css";
import "../scripts/RankSelector.js";

export const RankSelector = (props) => {
  const { rank, setRank } = useSettingsContext();

  return (
    <>
      <div className=" my-2">
        <div className="btn-group" role="group">
          {selectRank.ranks.map((rank_s) => {
            return (
              <Fragment key={rank_s.value}>
                <button
                  className={`btn ${
                    rank_s.value == rank ? "rank-selected" : "rank-not-selected"
                  }`}
                  value={rank_s.value}
                  disabled={props.loading}
                  onClick={(e) => {
                    console.log(e.target.value);
                    setRank(e.target.value);
                  }}
                >
                  {rank_s.value}
                </button>
              </Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};
