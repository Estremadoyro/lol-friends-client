import { combineReducers } from "redux";
import { alertReducer } from "./alertReducer";
import { searchSummonerReducer } from "./searchSummonerReducer";
import { leaderboardReducer } from "./leaderboardReducer";
import { regionReducer } from "./regionReducer";
import { leagueReducer } from "./leagueReducer";

export default combineReducers({
  alertReducer,
  searchSummonerReducer,
  leaderboardReducer,
  regionReducer,
  leagueReducer,
});
