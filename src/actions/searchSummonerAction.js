import axios from "axios";
import {
  SEARCH_SUMMONER,
  SEARCH_SUMMONER_SUCCESS,
  SEARCH_SUMMONER_ERROR,
} from "../action-types/types";
import { setAlertAction } from "./alertAction";

export const searchSummonerAction = (summonerName, region) => async (
  dispatch
) => {
  console.log(summonerName);
  dispatch({
    type: SEARCH_SUMMONER,
  });
  try {
    const { data } = await axios.post(
      `/api/v1.1/summoner/${region}/${summonerName}`
    );
    dispatch({
      type: SEARCH_SUMMONER_SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.log(err.response.data.error);
    dispatch(setAlertAction(err.response.data.error));
    dispatch({
      type: SEARCH_SUMMONER_ERROR,
      payload: err.response.data.error,
    });
  }
};