import React, { useEffect, useState, Fragment } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import { loadLeaderboardAction } from "../../actions/leaderboardAction";
import { loadLeagueAction } from "../../actions/leagueAction";

import LeagueSelector from "../LeagueSelector";
import { LeaderboardSkeleton } from "../skeletons/LeaderboardSkeleton";

import { WRBar } from "../WRBar";
import { WRPerc } from "../WRPerc";

import { Countdown } from "../Countdown";
import { UpdatedRank } from "../UpdatedRank";
import Pagination from "../Pagination";

import "../../styles/Leaderboard.css";
import "../../styles/Pagination.css";

const Leaderboard = ({
  players,
  league,
  region,
  loading,
  loadLeaderboardAction,
}) => {
  console.log(league);
  const [pageNumber, setPageNumber] = useState(0);
  const playersPerPage = 25;
  const pagesVisited = pageNumber * playersPerPage;

  const getPlayers = async () => {
    loadLeaderboardAction(region, league);
  };

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
            {player.summonerName}
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
        <Countdown />
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
        {players.length > 0 && !loading ? (
          <Pagination
            players={players}
            displayPlayers={displayPlayers}
            playersPerPage={playersPerPage}
            setPageNumber={setPageNumber}
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
};

const mapStateToProps = (state) => ({
  league: state.leagueReducer.league,
  players: state.leaderboardReducer.players,
  region: state.regionReducer.region,
  loading: state.leaderboardReducer.loading,
});

export default connect(mapStateToProps, {
  loadLeaderboardAction,
})(Leaderboard);
