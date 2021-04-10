import { combineReducers } from "redux";
import { alertReducer } from "./alertReducer";
import { searchSummonerReducer } from "./searchSummonerReducer";
import { leaderboardReducer } from "./leaderboardReducer";

export default combineReducers({ alertReducer, searchSummonerReducer, leaderboardReducer });
