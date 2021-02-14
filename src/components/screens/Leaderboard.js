import React, { useEffect, useState } from "react";

import { useSettingsContext } from "../../contexts/SettingsContext";
import { gLeaderboard } from "../../api/LeaderboardAPI";

const Leaderboard = () => {
  const { region } = useSettingsContext();

  const [queue, setQueue] = useState("RANKED_SOLO_5x5");
  const [rank, setRank] = useState("CHALLENGER");
  const [page, setPage] = useState(1);

  const [error, setError] = useState("");
  const [players, setPlayers] = useState([]);

  const getPlayers = async () => {
    let u = false;
    const fetchPlayers = await gLeaderboard(region, queue, rank, page);
    if (!u) {
      if (fetchPlayers.error) {
        setError(fetchPlayers.error);

        console.log(fetchPlayers.error);
      } else {
        console.log(fetchPlayers.data.players);
        setPlayers(fetchPlayers.data.players);
      }
    }
    return () => {
      u = true;
    };
  };

  useEffect(() => {
    getPlayers();
  }, []);

  return (
    <>
      <div className="container text-center">
        <button type="button" className="btn btn-primary btn-lg">
          CHALLENGER
        </button>
        <button type="button" className="btn btn-primary btn-lg">
          GRANDMASTER
        </button>
        <button type="button" className="btn btn-primary btn-lg">
          MASTER
        </button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {players &&
              players.map((player) => {
                console.log(player);
                return (
                  <tr key={player.summonerId}>
                    <th scope="row">1</th>
                    <td>{player.summonerName}</td>
                    <td> {player.leaguePoints} LP </td>
                    <td> {player.wins} W </td>
                    <td> {player.losses} L </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Leaderboard;
