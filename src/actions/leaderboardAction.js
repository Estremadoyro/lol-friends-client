import axios from "axios";

import {
  LOAD_LEADERBOARD,
  LOAD_LEADERBOARD_ERROR,
  LOAD_LEADERBOARD_SUCCESS,
} from "../action-types/types";

export const loadLeaderboardAction = (region, league) => async (dispatch) => {
  // console.log(`${region} || ${league}`);
  dispatch({
    type: LOAD_LEADERBOARD,
  });
  try {
    const { data } = await axios.get(
      `/api/v1.1/leaderboard/${region}/${league}`
    );
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