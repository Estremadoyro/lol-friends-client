import React, { useEffect, useState } from "react";

import { useSettingsContext } from "../../contexts/SettingsContext";
import { gLeaderboard } from "../../api/LeaderboardAPI";
import { Loading } from "../../misc/Loading";
import { WRPie } from "../WRPie";
import { WRPerc } from "../WRPerc";

import "../../styles/Leaderboard.css";

const Leaderboard = () => {
  const { region } = useSettingsContext();

  const [queue, setQueue] = useState("RANKED_SOLO_5x5");
  const [rank, setRank] = useState("CHALLENGER");
  const [page, setPage] = useState(1);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [players, setPlayers] = useState([]);

  const getPlayers = async () => {
    setLoading(true);
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
    setLoading(false);
    return () => {
      u = true;
    };
  };

  useEffect(() => {
    getPlayers();
  }, [region]);

  return (
    <>
      <div className="container text-center" style={{ maxWidth: "720px" }}>
        <button type="button" className="btn btn-primary btn-lg">
          CHALLENGER
        </button>
        <button type="button" className="btn btn-primary btn-lg">
          GRANDMASTER
        </button>
        <button type="button" className="btn btn-primary btn-lg">
          MASTER
        </button>
        <div className="table-responsive">
          <table className="table mx-auto w-auto">
            <thead>
              <tr>
                <th scope="col">Rank</th>
                <th scope="col">Player</th>
                <th scope="col">LP</th>
                <th scope="col">Record</th>
                <th scope="col">WR</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td
                    className="align-middle"
                    colSpan="5"
                    style={{ border: "none" }}
                  >
                    {" "}
                    <Loading />{" "}
                  </td>
                </tr>
              ) : null}

              {players && !loading
                ? players.map((player) => {
                    console.log(player);
                    return (
                      <tr key={player.summonerId}>
                        <td className="align-middle">1</td>
                        <td className="align-middle">{player.summonerName}</td>
                        <td className="align-middle">
                          {" "}
                          {player.leaguePoints} LP{" "}
                        </td>
                        <td className="align-middle">
                          <WRPie wins={player.wins} losses={player.losses} />
                        </td>
                        <td className="align-middle">
                          <WRPerc wins={player.wins} losses={player.losses} />
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Leaderboard;
