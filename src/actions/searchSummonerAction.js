import axios from "axios";
import {
  SEARCH_SUMMONER,
  SEARCH_SUMMONER_SUCCESS,
  SEARCH_SUMMONER_ERROR,
} from "../action-types/types";

import { setAlertAction, removeAlertAction } from "./alertAction";

import { apiEnvironment } from "../api/apiEnvironment";

export const searchSummonerAction = (summonerName, region) => async (
  dispatch
) => {
  const parameters = `${apiEnvironment()}/api/v1.1/summoner/${region}/${region}`;
  // console.log(summonerName);
  dispatch({
    type: SEARCH_SUMMONER,
  });
  dispatch(removeAlertAction());
  try {
    const { data } = await axios.post(parameters);
    dispatch({
      type: SEARCH_SUMMONER_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch(setAlertAction(err.response.data.error));
    dispatch({
      type: SEARCH_SUMMONER_ERROR,
      payload: err.response.data.error,
    });
  }
};
