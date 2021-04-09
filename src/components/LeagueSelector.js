import React, { Fragment } from "react";
import { useSettingsContext } from "../contexts/SettingsContext";
import { selectLeague } from "../misc/Variables";

import "../styles/LeagueSelector.css";
import "../scripts/LeagueSelector.js";

export const LeagueSelector = (props) => {
  const { league, setLeague } = useSettingsContext();

  return (
    <>
      <div className=" my-2">
        <div className="btn-group" role="group">
          {selectLeague.leagues.map((league_s) => {
            return (
              <Fragment key={league_s.value}>
                <button
                  className={`btn ${league_s.value == league ? "league-selected" : "league-not-selected"}`}
                  value={league_s.value}
                  disabled={props.loading}
                  onClick={(e) => {
                    console.log(e.target.value);
                    setLeague(e.target.value);
                  }}
                >
                  {league_s.value}
                </button>
              </Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};
