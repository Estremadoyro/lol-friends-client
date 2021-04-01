import React, { useEffect, useState } from "react";

import { useSettingsContext } from "../../contexts/SettingsContext";
import { gLeaderboard } from "../../api/LeaderboardAPI";
import { Loading } from "../../misc/Loading";
import { LeagueSelector } from "../LeagueSelector";

import { WRPie } from "../WRPie";
import { WRPerc } from "../WRPerc";

import "../../styles/Leaderboard.css";
import { Countdown } from "../Countdown";
import { UpdatedRank } from "../UpdatedRank";

const Leaderboard = () => {
  const { region, league } = useSettingsContext();

  const [queue, setQueue] = useState("RANKED_SOLO_5x5");
  const [division, setDivision] = useState("I");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [players, setPlayers] = useState([]);

  const getPlayers = async () => {
    setLoading(true);
    let u = false;
    try {
      const fetchPlayers = await gLeaderboard(region, queue, league, division);
      //nasty flags used to prevent memory leaks, gotta find a better way...
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
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPlayers();
  }, [region, league]);

  return (
    <>
      <div className="container text-center" style={{ maxWidth: "720px" }}>
        <LeagueSelector loading={loading} />
        <Countdown />
        <div className="table-responsive">
          <table className="table mx-auto w-auto">
            <thead>
              <tr>
                <th className="header" scope="col">
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
                        <td
                          className="align-middle"
                          style={{ textAlign: "left" }}
                        >
                          <span
                            className={`badge rank-badge-${
                              player.rank < 4 ? player.rank : "default"
                            } m-2`}
                          >
                            {player.rank}
                          </span>
                          {player.summonerName}
                        </td>
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
                        <td className="align-middle">
                          <UpdatedRank
                            rankUpdate={player.rankUpdate}
                            rankOffset={player.rankOffset}
                          />
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
