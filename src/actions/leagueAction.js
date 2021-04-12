import {
  SWITCH_LEAGUE_SUCCESS,
  SWITCH_LEAGUE_ERROR,
} from "../action-types/types";

import { selectLeague } from "../misc/Variables";

export const switchLeagueAction = (league) => (dispatch) => {
  if (selectLeague.leagues.map((league) => league.value).includes(league)) {
    dispatch({
      type: SWITCH_LEAGUE_SUCCESS,
      payload: league,
    });
    return;
  }
  dispatch({
    type: SWITCH_LEAGUE_ERROR,
    payload: "Invalid league",
  });
  return;
};
