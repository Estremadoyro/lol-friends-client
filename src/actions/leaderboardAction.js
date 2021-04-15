import axios from "axios";

import {
  LOAD_LEADERBOARD,
  LOAD_LEADERBOARD_ERROR,
  LOAD_LEADERBOARD_SUCCESS,
} from "../action-types/types";

import { apiEnvironment } from "../api/apiEnvironment";

export const loadLeaderboardAction = (region, league) => async (dispatch) => {
  // console.log(apiEnvironment());
  // console.log(`${region} || ${league}`);
  const parameters = `${apiEnvironment()}/api/v1.1/leaderboard/${region}/${league}`;
  // console.log(parameters);
  dispatch({
    type: LOAD_LEADERBOARD,
  });
  try {
    const { data } = await axios.get(parameters);
    dispatch({
      type: LOAD_LEADERBOARD_SUCCESS,
      payload: data.players,
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: LOAD_LEADERBOARD_ERROR,
      payload: err.response.data.error,
    });
  }
};
