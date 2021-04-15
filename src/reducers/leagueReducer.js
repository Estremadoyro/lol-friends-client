import {
  SWITCH_LEAGUE_SUCCESS,
  SWITCH_LEAGUE_ERROR,
} from "../action-types/types";

const initialState = {
  league: "CHALLENGER",
  error: null,
};

export const leagueReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SWITCH_LEAGUE_SUCCESS:
      return { ...state, league: payload };
    case SWITCH_LEAGUE_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};
