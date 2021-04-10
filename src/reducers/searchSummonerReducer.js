import { SEARCH_SUMMONER, SEARCH_SUMMONER_ERROR, SEARCH_SUMMONER_SUCCESS } from "../action-types/types";

const initialState = {
  error: null,
  loading: false,
  data: [],
};

export const searchSummonerReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_SUMMONER:
      return { error: null, loading: true, data: [] };
    case SEARCH_SUMMONER_SUCCESS:
      return { error: null, loading: false, data: payload };
    case SEARCH_SUMMONER_ERROR:
      return { error: payload, loading: false, data: [] };
    default:
      return state;
  }
};
