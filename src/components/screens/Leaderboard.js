import React, { useEffect, useState, Fragment } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import { loadLeaderboardAction } from "../../actions/leaderboardAction";

import LeagueSelector from "../LeagueSelector";
import { LeaderboardSkeleton } from "../skeletons/LeaderboardSkeleton";
import { LeaderboardInfoSkeleton } from "../skeletons/LeaderboardInfoSkeleton";

import { WRBar } from "../WRBar";
import { WRPerc } from "../WRPerc";

import { LeaderboardInfo } from "../LeaderboardInfo";
import { UpdatedRank } from "../UpdatedRank";
import Pagination from "../Pagination";

import Emoji from "../../misc/Emoji";

import "../../styles/Leaderboard.css";
import "../../styles/Pagination.css";


/**
  * @typedef Props
  * @type {object}
  * @property {number} pageCount
  * @property {object[]} players
  *
  * @param {Props}
  */
const Leaderboard = ({
  players,
  pageCount,
  league,
  region,
  loading,
  error,
  loadLeaderboardAction,
}) => {
  // console.log(process.env.NODE_ENV);
  // console.log(league);
  const [pageNumber, setPageNumber] = useState(0);
  const playersPerPage = 25;
  const pagesVisited = pageNumber * playersPerPage;

  const getPlayers = async () => {
    loadLeaderboardAction(region, league);
  };

  /**
    * @param {number} selected Page number current selected
    */
  const onPageChange = (selected) => {
    setPageNumber(selected);
    // TODO fetch players for this page (selected as query parameter)
  }

  const displayPlayers = players
    .slice(pagesVisited, pagesVisited + playersPerPage)
    .map((player) => {
      return (
        <tr key={player.summonerId}>
          <td className="align-middle" style={{ textAlign: "left" }}>
            <span
              className={`badge rank-badge-${
                player.rank < 4 ? player.rank : "default"
              } m-2`}
            >
              {player.rank}
            </span>
            <span className="leaderboard-summoner-name">
              {player.summonerName}
            </span>
          </td>
          <td className="align-middle">{player.leaguePoints}</td>
          <td className="align-middle">
            <WRBar wins={player.wins} losses={player.losses} />
          </td>
          <td className="align-middle">
            <WRPerc wins={player.wins} losses={player.losses} />
          </td>
          <td className="align-middle">
            <UpdatedRank
              rankUpdate={player.rankUpdate}
              rankOffset={player.rankOffset}
            />
          </td>
        </tr>
      );
    });
  useEffect(() => {
    getPlayers();
  }, [region, league]);

  return (
    <>
      <div className="container text-center" style={{ maxWidth: "720px" }}>
        <LeagueSelector />
        {loading && <LeaderboardInfoSkeleton />}
        {players.length > 0 && (
          <LeaderboardInfo
            playerCount={players.length}
            updateTime={players[0].updateTime}
          />
        )}
        <div className="table-responsive">
          <table className="table mx-auto w-auto">
            <thead>
              <tr>
                <th className="header" scope="col" style={{ width: "100px" }}>
                  Player
                </th>
                <th className="header" scope="col">
                  LP
                </th>
                <th className="header" scope="col">
                  Record
                </th>
                <th className="header" scope="col">
                  WR
                </th>
                <th className="header" scope="col">
                  Update
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <LeaderboardSkeleton
                  players={players.slice(0, playersPerPage)}
                />
              ) : (
                displayPlayers
              )}
            </tbody>
          </table>
        </div>
        {error && (
          <div className="alert alert-danger my-2" role="alert">
            {error} <Emoji symbol="😥" label="sheep" />
            <br />
            <div>
              Please let
              <a
                href="https://www.instagram.com/leoestremadoyro/"
                target="blank_"
              >
                <span className="error-contact-link fw-bold"> me </span>
              </a>
              know
            </div>
          </div>
        )}
        {players.length > 0 && !loading ? (
          <Pagination
            pageCount={pageCount}
            onPageChange={onPageChange} 
          />
        ) : null}
      </div>
    </>
  );
};

Leaderboard.propTypes = {
  loadLeaderboardAction: PropTypes.func.isRequired,
  league: PropTypes.string,
  players: PropTypes.array.isRequired,
  region: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

const mapStateToProps = (state) => ({
  league: state.leagueReducer.league,
  players: state.leaderboardReducer.players,
  region: state.regionReducer.region,
  loading: state.leaderboardReducer.loading,
  error: state.leaderboardReducer.error,
});

export default connect(mapStateToProps, {
  loadLeaderboardAction,
})(Leaderboard);
