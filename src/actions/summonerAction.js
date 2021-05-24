import axios from "axios";
import {
  SEARCH_SUMMONER,
  SEARCH_SUMMONER_ERROR,
  SEARCH_SUMMONER_SUCCESS,
  CREATE_SUMMONER,
  CREATE_SUMMONER_SUCCESS,
  CREATE_SUMMONER_ERROR,
  UPDATE_SUMMONER,
  UPDATE_SUMMONER_SUCCESS,
  UPDATE_SUMMONER_ERROR,
  USING_REGION,
  NOT_USING_REGION,
} from "../action-types/types";

import { setAlertAction, removeAlertAction } from "./alertAction";

import { apiEnvironment } from "../api/apiEnvironment";

export const searchSummonerAction = (summonerName, region) => async (dispatch) => {
  dispatch(removeAlertAction());
  dispatch({ type: USING_REGION });
  const summonerIsFound = await dispatch(findSummonerAction(summonerName, region));
  console.log(summonerIsFound);
  if (summonerIsFound && Object.keys(summonerIsFound).length === 0 && summonerIsFound.constructor === Object) {
    await dispatch(createSummonerAction(summonerName, region));
  }
  dispatch({ type: NOT_USING_REGION });
};

const findSummonerAction = (summonerName, region) => async (dispatch) => {
  dispatch({ type: SEARCH_SUMMONER });
  const parameters = `${apiEnvironment()}/api/v1.1/summoner/${region}/${summonerName}`;
  try {
    const { data } = await axios.get(parameters);
    if (data.player) {
      dispatch({ type: SEARCH_SUMMONER_SUCCESS, payload: data });
    } else {
      dispatch({
        type: SEARCH_SUMMONER_ERROR,
        payload: "Summoner not found in DB",
      });
    }
    return data;
  } catch (err) {
    if (err.response) {
      dispatch(setAlertAction(err.response.data.error));
      dispatch({
        type: SEARCH_SUMMONER_ERROR,
        payload: err.response.data.error,
      });
      return;
    }
    dispatch(setAlertAction("Server error"));
    dispatch({
      type: SEARCH_SUMMONER_ERROR,
      payload: "Server error",
    });
  }
};

const createSummonerAction = (summonerName, region) => async (dispatch) => {
  dispatch({ type: CREATE_SUMMONER });
  const parameters = `${apiEnvironment()}/api/v1.1/summoner/${region}/${summonerName}`;
  try {
    const { data } = await axios.post(parameters);
    dispatch({ type: CREATE_SUMMONER_SUCCESS, payload: data });
    dispatch({ type: SEARCH_SUMMONER_SUCCESS, payload: data });
    return data;
  } catch (err) {
    console.log(err.response.data.error);
    if (err.response) {
      dispatch(setAlertAction(err.response.data.error));
      dispatch({
        type: CREATE_SUMMONER_ERROR,
        payload: err.response.data.error,
      });
      return;
    }
    dispatch(setAlertAction("Server error"));
    dispatch({
      type: CREATE_SUMMONER_ERROR,
      payload: "Server error",
    });
  }
};

export const updateSummonerAction = (summonerName, region) => async (dispatch) => {
  dispatch({ type: UPDATE_SUMMONER });
};
