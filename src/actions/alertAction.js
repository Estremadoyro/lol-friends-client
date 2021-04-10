import { SET_SEARCH_ALERT, REMOVE_SEARCH_ALERT } from "../action-types/types";

export const setAlert = (alert) => (dispatch) => {
  dispatch({
    type: SET_SEARCH_ALERT,
    payload: alert,
  });
};

export const removeAlert = () => (dispatch) => {
  dispatch({
    type: REMOVE_SEARCH_ALERT,
  });
};
