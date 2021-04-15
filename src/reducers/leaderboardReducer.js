import {
  LOAD_LEADERBOARD,
  LOAD_LEADERBOARD_SUCCESS,
  LOAD_LEADERBOARD_ERROR,
} from "../action-types/types";

const initialState = {
  error: null,
  loading: false,
  players: [],
};

export const leaderboardReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_LEADERBOARD:
      return { ...state, ...payload, error: null, loading: true, players: [] };
    case LOAD_LEADERBOARD_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        players: payload,
      };
    case LOAD_LEADERBOARD_ERROR:
      return { ...state, error: payload, loading: false, players: [] };
    default:
      return state;
  }
};
