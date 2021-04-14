import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { selectLeague } from "../misc/Variables";
import { switchLeagueAction } from "../actions/leagueAction";

import "../styles/LeagueSelector.css";
import "../scripts/LeagueSelector.js";

const LeagueSelector = ({ league, loading, switchLeagueAction }) => {
  return (
    <>
      <div className=" my-2">
        <div className="btn-group" role="group">
          {selectLeague.leagues.map((league_s) => {
            return (
              <Fragment key={league_s.value}>
                <button
                  className={`btn ${
                    league_s.value == league
                      ? "league-selected"
                      : "league-not-selected"
                  }`}
                  value={league_s.value}
                  disabled={loading}
                  onClick={(e) => {
                    // console.log(e.target.value);
                    switchLeagueAction(e.target.value);
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

LeagueSelector.propTypes = {
  league: PropTypes.string.isRequired,
  switchLeagueAction: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  league: state.leagueReducer.league,
  loading: state.leaderboardReducer.loading,
});

export default connect(mapStateToProps, { switchLeagueAction })(LeagueSelector);
