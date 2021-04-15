import {
  SEARCH_SUMMONER,
  SEARCH_SUMMONER_ERROR,
  SEARCH_SUMMONER_SUCCESS,
} from "../action-types/types";

const initialState = {
  error: null,
  loading: false,
  player: null,
};

export const searchSummonerReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_SUMMONER:
      return {
        ...state,
        ...payload,
        loading: true,
      };
    case SEARCH_SUMMONER_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        player: payload,
      };
    case SEARCH_SUMMONER_ERROR:
      return { ...state, error: payload, loading: false, player: null };
    default:
      return state;
  }
};
