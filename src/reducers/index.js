import { combineReducers } from "redux";
import { alertReducer } from "./alertReducer";
import { summonerReducer } from "./summonerReducer";
import { leaderboardReducer } from "./leaderboardReducer";
import { regionReducer } from "./regionReducer";
import { leagueReducer } from "./leagueReducer";

export default combineReducers({
  alertReducer,
  summonerReducer,
  leaderboardReducer,
  regionReducer,
  leagueReducer,
});
