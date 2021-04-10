import axios from "axios";
import { SEARCH_SUMMONER, SEARCH_SUMMONER_SUCCESS, SEARCH_SUMMONER_ERROR } from "../action-types/types";
import { setAlert } from "./alertAction";
export const searchSummonerAction = (summonerName, region) => async (dispatch) => {
  dispatch({
    type: SEARCH_SUMMONER,
  });
  try {
    const { data } = await axios.post(`/api/v1.1/summoner/${region}/${summonerName}`);
    dispatch({
      type: SEARCH_SUMMONER_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch(setAlert(err.message));
    dispatch({
      type: SEARCH_SUMMONER_ERROR,
      payload: err.message,
    });
  }
};
