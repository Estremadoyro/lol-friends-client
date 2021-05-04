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
} from "../action-types/types";

const initialState = {
  error: null,
  loading: false,
  player: null,
};

export const summonerReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_SUMMONER:
    case UPDATE_SUMMONER:
    case SEARCH_SUMMONER:
      return {
        ...state,
        ...payload,
        loading: true,
      };
    case CREATE_SUMMONER_SUCCESS:
    case UPDATE_SUMMONER_SUCCESS:
    case SEARCH_SUMMONER_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        player: payload,
      };
    case CREATE_SUMMONER_ERROR:
    case UPDATE_SUMMONER_ERROR:
    case SEARCH_SUMMONER_ERROR:
      return { ...state, error: payload, loading: false, player: null };
    default:
      return state;
  }
};
